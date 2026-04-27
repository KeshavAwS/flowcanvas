import { useState, useEffect, useRef } from 'react';
import BaseNode from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)];
    const vars = matches.map(m => m[1]);
    const uniqueVars = [...new Set(vars)];
    setVariables(uniqueVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const inputs = variables.map(v => ({ id: `${id}-${v}` }));
  const outputs = [{ id: `${id}-output` }];

  return (
    <BaseNode id={id} title="Text" inputs={inputs} outputs={outputs} style={{ minWidth: '250px' }}>
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          rows={1}
          style={{ width: '93%', resize: 'none', overflow: 'hidden'}}
        />
      </label>
    </BaseNode>
  );
};
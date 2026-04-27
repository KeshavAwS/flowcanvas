import { useState } from 'react';
import BaseNode from './baseNode';

export const FileNode = ({ id, data }) => {
  const [fileName, setFileName] = useState(data?.fileName || '');
  const outputs = [{ id: `${id}-file` }];

  return (
    <BaseNode id={id} title="File" outputs={outputs}>
      <label>
        File Name:
        <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
      </label>
    </BaseNode>
  );
};
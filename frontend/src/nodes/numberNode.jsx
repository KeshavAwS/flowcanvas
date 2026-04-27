import { useState } from 'react';
import BaseNode from './baseNode';

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || 0);
  const outputs = [{ id: `${id}-value` }];

  return (
    <BaseNode id={id} title="Number" outputs={outputs}>
      <label>
        Value:
        <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
      </label>
    </BaseNode>
  );
};
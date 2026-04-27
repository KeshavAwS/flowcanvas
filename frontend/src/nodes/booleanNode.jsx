import { useState } from 'react';
import BaseNode from './baseNode';

export const BooleanNode = ({ id, data }) => {
  const [checked, setChecked] = useState(data?.checked || false);
  const outputs = [{ id: `${id}-value` }];

  return (
    <BaseNode id={id} title="Boolean" outputs={outputs}>
      <label>
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        {checked ? 'True' : 'False'}
      </label>
    </BaseNode>
  );
};
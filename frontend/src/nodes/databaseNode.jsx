import { useState } from 'react';
import BaseNode from './baseNode';

export const DatabaseNode = ({ id, data }) => {
  const [query, setQuery] = useState(data?.query || 'SELECT * FROM table');
  const inputs = [{ id: `${id}-params` }];
  const outputs = [{ id: `${id}-result` }];

  return (
    <BaseNode id={id} title="Database Query" inputs={inputs} outputs={outputs}>
      <label>
        Query:
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} rows={2} />
      </label>
    </BaseNode>
  );
};
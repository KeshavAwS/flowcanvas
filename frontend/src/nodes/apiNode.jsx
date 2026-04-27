import { useState } from 'react';
import BaseNode from './baseNode';

export const ApiNode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || '');
  const [method, setMethod] = useState(data?.method || 'GET');
  const inputs = [{ id: `${id}-input` }];
  const outputs = [{ id: `${id}-response` }];

  return (
    <BaseNode id={id} title="API Call" inputs={inputs} outputs={outputs}>
      <label>
        Endpoint:
        <input type="text" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
      </label>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
        </select>
      </label>
    </BaseNode>
  );
};
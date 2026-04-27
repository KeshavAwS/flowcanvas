import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, title, inputs = [], outputs = [], children, style = {} }) => {
  return (
    <div className="node" style={style}>
      <div className="node-title">{title}</div>
      <div className="node-content">{children}</div>
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${(index + 1) * 100 / (inputs.length + 1)}%` }}
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${(index + 1) * 100 / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
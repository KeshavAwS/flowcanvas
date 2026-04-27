import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  const inputs = [
    { id: `${id}-system` },
    { id: `${id}-prompt` }
  ];
  const outputs = [{ id: `${id}-response` }];

  return (
    <BaseNode id={id} title="LLM" inputs={inputs} outputs={outputs}>
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
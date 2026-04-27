import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  selectedNodes: state.selectedNodes,
  removeNodes: state.removeNodes,
});

export const DeleteButton = () => {
  const { selectedNodes, removeNodes } = useStore(selector, shallow);

  const handleDelete = () => {
    if (selectedNodes.length > 0) {
      removeNodes(selectedNodes);
    }
  };

  return (
    <button
      className="delete-btn"
      onClick={handleDelete}
      disabled={selectedNodes.length === 0}
    >
      Delete Selected ({selectedNodes.length})
    </button>
  );
};
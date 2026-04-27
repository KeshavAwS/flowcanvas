import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const REACT_APP_API_URL = "https://flowcanvas-chi.vercel.app" || 'http://localhost:8000';

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/pipelines/parse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      alert(`Pipeline Stats:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? 'Yes' : 'No'}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to backend');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
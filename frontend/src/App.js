import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import Blog from './Blog';

function PipelineApp() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

function Navbar() {
  return (
    <div style={styles.nav}>
      <Link to="/" style={styles.brand}>⬡ FlowCanvas</Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Editor</Link>
        <Link to="/blog" style={styles.link}>Blog</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PipelineApp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 28px',
    backgroundColor: '#1e1e2e',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
  },
  brand: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default App;
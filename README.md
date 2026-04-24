# FlowCanvas – Node-Based Pipeline Editor

A visual pipeline builder for creating and connecting data processing nodes. Built with React (frontend) and FastAPI (backend). This project was developed as part of the VectorShift frontend technical assessment.

## ✨ Features

- **Drag-and-drop interface** – Build pipelines by dragging nodes onto a canvas.
- **Node abstraction** – Easily extendable `BaseNode` component; add new nodes with minimal code.
- **Unified styling** – Modern dark theme with responsive controls.
- **Smart Text Node** – Auto-resizes as you type; detect `{{variable}}` and dynamically create input handles.
- **Backend integration** – Submit pipelines to a FastAPI server that validates DAG (Directed Acyclic Graph) and returns node/edge counts.
- **Delete selected nodes** – Remove multiple nodes and their connected edges with one click.

## 🛠️ Tech Stack

**Frontend**
- React 18
- React Flow (node canvas)
- Zustand (state management)

**Backend**
- Python 3.11+
- FastAPI
- Uvicorn

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/flow_canvas.git
cd flowcanvas
```

### 2. Frontend setup
```bash
cd frontend
npm install
npm start
```

The frontend will run at http://localhost:3000

3. Backend setup
```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

The backend will run at http://localhost:8000

🚀 Usage
Drag nodes from the toolbar onto the canvas.

Connect nodes by dragging from the right handle (output) to a left handle (input).

In a Text Node, type {{variableName}} to create dynamic input handles.

Select one or more nodes and click Delete Selected to remove them.

Click Submit to send the pipeline to the backend. An alert will show:

-Number of nodes

-Number of edges

-Whether the pipeline is a DAG (no cycles)

📁 Project Structure

```
frontend/
├── src/
│   ├── nodes/               # All node components (BaseNode + specific nodes)
│   ├── store.js             # Zustand store (nodes, edges, selection)
│   ├── ui.js                # ReactFlow canvas
│   ├── toolbar.js           # Draggable node palette
│   ├── submit.js            # Submit button & API call
│   └── DeleteButton.jsx     # Delete selected nodes
backend/
├── main.py                  # FastAPI app with pipelines/parse endpoint
```

🧪 Example Nodes
Five custom nodes demonstrate the abstraction:

Number – numeric input

Boolean – checkbox

File – file name field

API Call – endpoint & method

Database Query – SQL text area

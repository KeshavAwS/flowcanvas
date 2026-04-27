import { DraggableNode } from './draggableNode';
import { DeleteButton } from '../src/nodes/deleteButton';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar">
            <div className="toolbar-items">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='number' label='Number' />
                <DraggableNode type='boolean' label='Boolean' />
                <DraggableNode type='file' label='File' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='database' label='Database' />
            </div>
            <DeleteButton />
        </div>
    );
};
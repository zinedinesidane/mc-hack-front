import ReactFlow, { Controls, Background, applyNodeChanges, addEdge, applyEdgeChanges } from "reactflow";
import "reactflow/dist/style.css";
import Button from "../ui/Button";
import { useCallback } from "react";

import TextUpdaterNode from "../ui/CustomNode.jsx";
import "../ui/CustomNode.css";
import { useState } from "react";

const GAP_BETWEEN_NODES = 60;
const NODE_WIDTH = 200;

const obj = {
  step1: {
    responsable: "A",
    task: "doing xyz",
  },
  step2: {
    responsable: "B",
    task: "doing xyz",
  },
  step3: {
    responsable: "C",
    task: "doing xyz",
  },
  step4: {
    responsable: "D",
    task: "doing xyz",
  },
  step5: {
    responsable: "E",
    task: "doing xyz",
  },
  step6: {
    responsable: "F",
    task: "doing xyz",
  },
};

function generateNodes(obj) {
  const nodes = [];
  let x = 0;
  let y = 0;
  Object.keys(obj).forEach((key, index) => {
    nodes.push({
      id: (index + 1).toString(),
      data: { task: obj[key].task, responsable: obj[key].responsable },
      position: { x, y },
      type: "textUpdater",
    });
    x += (index + 1) * (NODE_WIDTH + GAP_BETWEEN_NODES);
  });
  return nodes;
}

function generateEdges(objet) {
  const arretes = [];
  let id = 1;

  Object.keys(objet).forEach((etape, index) => {
    if (index < Object.keys(objet).length - 1) {
      const arrete = {
        id: `${id}-${id + 1}`,
        source: id.toString(),
        target: (id + 1).toString(),
      };

      arretes.push(arrete);
      id++;
    }
  });

  return arretes;
}
const edgesInitial = generateEdges(obj);
const nodesInitial = generateNodes(obj);

const nodeTypes = { textUpdater: TextUpdaterNode };

export default function Workflow() {
  const [nodes, setNodes] = useState(nodesInitial);
  const [edges, setEdges] = useState(edgesInitial);

  const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);
  const onConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  const addNode = () => {
    const id = (nodes.length + 1).toString();
    const lastNodePosition = nodes[nodes.length - 1].position.x;
    const newNode = {
      id: id,
      data: { label: `Node ${id}` },
      position: { x: lastNodePosition + 220, y: 0 },
      type: "textUpdater",
    };
    const edge = {
      id: id,
      source: nodes[nodes.length - 1].id,
      target: id,
      animated: true,
    };
    setNodes((nodes) => nodes.concat(newNode));
    setEdges((edges) => edges.concat(edge));
  };

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <Button style={{ position: "absolute", top: "3rem", right: "3rem" }} size="large" onClick={addNode}>
        Add node
      </Button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

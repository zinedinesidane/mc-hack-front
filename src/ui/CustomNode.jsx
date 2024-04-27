import { Handle, Position } from "reactflow";
import { FaUser } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

function TextUpdaterNode(props) {
  const { data, isConnectable } = props ?? {};

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className="box">
        <span className="auth">{data?.responsable}</span>
        <div className="date">
          <FaRegCheckCircle />
          <span>1 jour</span>
        </div>
        <FaUser />
        <span className="role">{data?.task}</span>
      </div>
      <Handle type="source" position={Position.Right} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;

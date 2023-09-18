import "./resetboard.css";

function Resetboard({ resetboard }) {
  return (
    <button className="resetbtn" onClick={resetboard}>
      Reset
    </button>
  );
}

export default Resetboard;

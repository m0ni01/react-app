import Box from "./box";
import "./borad.css";
function Board({ board, onclick }) {
  return (
    <div className="board">
      {board.map((value, index) => {
        return <Box value={value} onclick={() => onclick(index)} />;
      })}
    </div>
  );
}

export default Board;

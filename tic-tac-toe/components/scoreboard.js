import "./scoreboard.css";

function Scoreboard({ scores, player }) {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score xscore ${player === "X" && "inactive"}`}>
        X: {xScore}{" "}
      </span>
      <span className={`score oscore ${player === "O" && "inactive"}`}>
        0 : {oScore}{" "}
      </span>
    </div>
  );
}

export default Scoreboard;

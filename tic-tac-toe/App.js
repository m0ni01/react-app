import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/board";
import Scoreboard from "./components/scoreboard";
import Resetboard from "./components/resetboard";

function App() {
  //wincases
  const wincase = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setboard] = useState(Array(9).fill(null));
  const [scores, setscores] = useState({ oScore: 0, xScore: 0 });
  const nextvalue = nextplayer(board);
  const winnernew = checkwinner(board);

  useEffect(() => {
    if (winnernew) {
      setscores((prevscores) => {
        const prevscorescopy = { ...prevscores };
        if (winnernew === "O") {
          prevscorescopy.oScore = prevscores.oScore + 1;
          return { ...prevscorescopy };
        } else {
          prevscorescopy.xScore = prevscores.xScore + 1;
          return { ...prevscorescopy };
        }
      });
    }
  }, [winnernew]);

  function selectsquare(square) {
    if (winnernew || board[square]) {
      return;
    }
    const boardcopy = [...board];
    boardcopy[square] = nextvalue;
    setboard(boardcopy);
  }

  //checking for winner
  function checkwinner(passboard) {
    for (let i = 0; i < wincase.length; i++) {
      let [x, y, z] = wincase[i];
      if (
        passboard[x] &&
        passboard[x] === passboard[y] &&
        passboard[y] === passboard[z]
      ) {
        console.log(passboard[i]);
        return passboard[x];
      }
    }
    return null;
  }

  //whoes turn it is player
  function nextplayer(board) {
    const nxtplayer = board.filter(Boolean).length % 2 === 0 ? "X" : "O";
    console.log(nxtplayer);
    return nxtplayer;
  }

  function handleclick(index) {
    selectsquare(index);
  }

  const resetboard = () => {
    setboard(Array(9).fill(null));
  };

  //
  return (
    <>
      <Scoreboard scores={scores} player={nextvalue} />
      <Board board={board} onclick={handleclick} />
      <Resetboard resetboard={resetboard} />
    </>
  );
}

export default App;

import React from "react";
import NavBar from "../components/navbar";
import ChessBoard from "../components/chessboard";
import Moves from "../components/moves";

const Home = () => {
  return (
    <div 
      style={{display:"flex",justifyContent:"space-between"}}
    >
      <NavBar />
      <ChessBoard />
      <Moves />
    </div>
  );
};

export default Home;

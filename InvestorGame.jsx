import React from "react";
import { useNavigate } from "react-router-dom";

const games = [
  {
    name: "Tic Tac Toe",
    desc: "Classic X and O game",
    route: "/Investorhome/games/tictactoe",
  },
  {
    name: "Snake Game",
    desc: "Eat food, grow the snake",
    route: "/Investorhome/games/snake",
  },
 
  {
    name: "Rock Paper Scissor",
    desc: "Play against computer",
    route: "/Investorhome/games/rps",
  },
  {
    name: "Bow Game",
    desc: "Aim and shoot arrows",
    route: "/Investorhome/games/bow",
  },
];

const InvestorGame = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🎮 Investor Games
      </h1>

      {/* Game Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-between transition hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              {game.name}
            </h2>
            <p className="text-gray-600 text-center mb-6">{game.desc}</p>
            <button
              onClick={() => navigate(game.route)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorGame;

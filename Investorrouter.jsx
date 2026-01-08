import React, { useContext } from "react";
import { useRoutes } from "react-router-dom";
import InvestorLayout from "./InvestorLayout";
import InvestorHome from "./InvestorHome";
import { GlobalContext } from "../GlobalContext/GlobalState";
import Login from "./Login";
import Signup from "./Signup";
import Innovations from "./Innovations";
import Message from "./Message";
import PageNotFound from "../../Router/PageNotfound";
import InvestorGame from "./InvestorGame";
import TicTacToe from "../Games/TicTacToe";
import BowGame from "../Games/BowGame";
import SnakeGame from "../Games/SnakeGame";


const Investorrouter = () => {
  const { theme } = useContext(GlobalContext);

  const routes = useRoutes([
    {
      path: "Investorhome",
      element: <InvestorLayout />, // layout includes header
      children: [
        { path: "", element: <InvestorHome theme={theme} /> },
        { path: "innovations", element: <Innovations/> },
        { path: "message", element: <Message/> },
        { path: "games", element: <InvestorGame theme={theme}/>,},
      ],
    },

    { path: "/Investorhome/games/tictactoe", element: <TicTacToe /> },
    { path: "/Investorhome/games/bow", element: <BowGame/> },
    { path: "/Investorhome/games/snake", element: <SnakeGame/> },
    //{ path: "/Investorhome/games/whale", element: <BlueWhale/> },
    //{ path: "/Investorhome/games/rps", element: <BowGame/> },

    // Login/Signup routes should stay outside layout 
     {path: "/", element: <InvestorLayout/>,children:[{path:"",element:<InvestorHome/>}]},
     { path: "/login", element: <Login/> },
     { path: "/signup", element: <Signup/> },
     {path: "*", element: <PageNotFound/>},
    
  ]);

  return routes;
};

export default Investorrouter;

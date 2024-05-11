import { useReducer } from "react";
import Container from "./components/Container";
import CustomError from "./components/Error";
import GameField from "./components/GameField";
import Loader from "./components/Loader";
import Result from "./components/Result";

interface InitialStateI {
  status: "loading" | "ready" | "active" | "end" | "result" | "error";
  playerIndex: { computer: number; player: number };
  winner: "player" | "computer" | "draw";
}

interface ActionI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
  type: string;
}

const initialState: InitialStateI = {
  status: "ready",
  playerIndex: {
    computer: 0,
    player: 0,
  },
  winner: "draw",
};

const reducer = function (curState: InitialStateI, action: ActionI) {
  switch (action.type) {
    case "setStatus":
      return { ...curState, status: action.payload };
    case "setPlayersIndex":
      return { ...curState, playerIndex: action.payload };
    case "setWinner":
      return { ...curState, winner: action.payload };
    default:
      throw new Error("Unknown Action Type");
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, playerIndex, winner } = state;
  return (
    <>
      <div className="h-[100vh] flex flex-col gap-y-20">
        <Container>
          <h1 className="text-center text-6xl text-lime-500 mt-10">
            Lets play ✊ 📃 ✂️
          </h1>
        </Container>
        <div className="flex-grow bg-gradient-to-b from-[#323333] to-[#262727]">
          <Container className="h-full">
            {status === "result" && (
              <Result winner={winner} dispatch={dispatch} />
            )}
            <div className="w-full h-full">
              {status === "loading" && <Loader />}
              {(status === "ready" ||
                status === "active" ||
                status === "end" ||
                status === "result") && (
                <GameField
                  status={status}
                  dispatch={dispatch}
                  playerIndex={playerIndex}
                />
              )}
              {status === "error" && <CustomError />}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

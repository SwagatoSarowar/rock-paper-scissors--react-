import paperImgLeft from "../assets/paper-left.png";
import paperImgRight from "../assets/paper-right.png";
import rockImgLeft from "../assets/rock-left.png";
import rockImgRight from "../assets/rock-right.png";
import scissorsImgLeft from "../assets/scissors-left.png";
import scissorsImgRight from "../assets/scissors-right.png";

interface GameFieldProps {
  status: "ready" | "active" | "end" | "result";
  dispatch: any;
  playerIndex: { computer: number; player: number };
}

const computerSideImages = [rockImgRight, paperImgRight, scissorsImgRight];
const playerSideImages = [rockImgLeft, paperImgLeft, scissorsImgLeft];

export default function GameField({
  status,
  dispatch,
  playerIndex,
}: GameFieldProps) {
  const handleHit = function () {
    const computer = Math.trunc(Math.random() * 3);
    const player = Math.trunc(Math.random() * 3);

    dispatch({
      type: "setPlayersIndex",
      payload: {
        computer,
        player,
      },
    });

    dispatch({
      type: "setStatus",
      payload: "active",
    });

    setTimeout(() => {
      dispatch({
        type: "setStatus",
        payload: "end",
      });
    }, 3100);

    setTimeout(() => {
      dispatch({
        type: "setStatus",
        payload: "result",
      });
    }, 4000);

    if (
      (player === 0 && computer === 1) ||
      (player === 1 && computer === 2) ||
      (player === 2 && computer === 0)
    ) {
      dispatch({ type: "setWinner", payload: "computer" });
    } else if (
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1) ||
      (player === 0 && computer === 2)
    ) {
      dispatch({ type: "setWinner", payload: "player" });
    } else {
      dispatch({ type: "setWinner", payload: "draw" });
    }
  };
  return (
    <div className="h-full flex flex-col gap-y-6 items-center">
      <div className="flex [&>*]:flex-grow flex-grow self-stretch text-2xl">
        <div className="text-center flex-grow border-r border-white/25 gap-8 flex flex-col items-center">
          <h2 className="text-[#1B65EE]">Player</h2>
          {status === "active" && (
            <img className="left-image w-[450px]" src={rockImgLeft} alt="" />
          )}
          <img
            className="w-[450px]"
            src={
              status === "ready" || status === "result"
                ? rockImgLeft
                : status === "end"
                ? playerSideImages[playerIndex.player]
                : ""
            }
            alt=""
          />
        </div>
        <div className="text-center flex-grow border-l border-white/25 gap-8 flex flex-col items-center">
          <h2 className="text-[#F03838]">Computer</h2>
          {status === "active" && (
            <img className="right-image w-[450px]" src={rockImgRight} alt="" />
          )}
          <img
            className="w-[450px]"
            src={
              status === "ready" || status === "result"
                ? rockImgRight
                : status === "end"
                ? computerSideImages[playerIndex.computer]
                : ""
            }
            alt=""
          />
        </div>
      </div>
      <button
        onClick={handleHit}
        className="mb-16 border-2 px-16 py-6 w-fit text-3xl rounded-full border-white/20 hover:border-white/50 duration-300"
      >
        HIT
      </button>
    </div>
  );
}

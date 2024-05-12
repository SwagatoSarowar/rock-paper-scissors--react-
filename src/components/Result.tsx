interface ResultProps {
  winner: "player" | "computer" | "draw";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any;
}

export default function Result({ winner, dispatch }: ResultProps) {
  return (
    <div className="absolute inset-[0] flex items-center justify-center bg-black/10 backdrop-blur">
      <div className="absolute rounded-2xl inset-[25vh] bg-black/80 backdrop-blur-2xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-5xl">
            {winner} {winner !== "draw" && "has won"}
          </h2>
          <button
            onClick={() => dispatch({ type: "setStatus", payload: "ready" })}
            className="px-10 py-6 mt-16 border rounded-full"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

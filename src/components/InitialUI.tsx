import { FormEvent } from "react";

interface InitialUIProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any;
  playerName: string;
}

export default function InitialUI({ playerName, dispatch }: InitialUIProps) {
  const handleSubmit = function (e: FormEvent) {
    e.preventDefault();
    if (!playerName) return;

    dispatch({ type: "setStatus", payload: "ready" });
  };
  return (
    <div className="h-full flex flex-col gap-y-6 items-center">
      <h2 className="text-4xl mb-10 text-blue-300">Please enter your name</h2>
      <form
        className="flex flex-col gap-y-6 items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="text-blue-400">
          Player Name
        </label>
        <input
          onChange={(e) =>
            dispatch({ type: "setPlayerName", payload: e.target.value })
          }
          autoComplete="off"
          className="text-2xl text-center px-10 py-5 outline-none rounded-full duration-300 focus-within:shadow-xl focus-within:shadow-black/30"
          id="name"
          type="text"
        />
        <button
          type="submit"
          className="border-2 px-16 py-6 text-lg my-10 rounded-full border-white/20 hover:border-white/50 duration-300"
        >
          Enter The Game
        </button>
      </form>
    </div>
  );
}

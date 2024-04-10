"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a plate of galouti kebab?",
      "What about biryani",
      "PLEASE POOKIE",
      "But :*(",
      "CodeDay Lucknow will be so sad without you",
      "CodeDay Lucknow is gonna be fun",
      "are you sure you don't want to come?",
      "please please please",
      ":((((",
      "PRETTY PLEASE",
      ":(",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          {/* <img src="https://tenor.com/bK3EP.gif" /> */}
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! LESGOOOOOOO!! ;))</div>
        </>
      ) : (
        <>
          {/* <img
            className="h-[200px]"
            src="https://tenor.com/bK3EP.gif"
          /> */}
          <h1 className="my-4 text-4xl">Will you attend CodeDay Lucknow?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

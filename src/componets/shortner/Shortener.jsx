import { useState } from "react";
import "./shortener.style.css";
import Link from "../link/Link";
// import CopyToClipboard from "react-copy-to-clipboard";

const Shortener = () => {
  const [userInput, setUserInput] = useState("");

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
    console.log(userInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <>
      <section className="shortener">
        <form onSubmit={submitHandler}>
          <>
            <input
              type="text"
              value={userInput}
              placeholder="Shorten a link here..."
              onChange={userInputHandler}
            />
            <button type="submit" className="shorten-btn">
              Shorten It!
            </button>
          </>
        </form>
      </section>
      <>
        <Link userInput={userInput} />
      </>
    </>
  );
};

export default Shortener;

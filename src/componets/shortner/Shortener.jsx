import { useState } from "react";
import "./shortener.style.css";
import Link from "../link/Link";
import axios from "axios";
// import CopyToClipboard from "react-copy-to-clipboard";

const Shortener = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  };

  const fetchData = async () => {
    if (!userInput) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://is.gd/create.php?format=json&url=${userInput}`
      );
      setShortenLinks((prevLinks) => [...prevLinks, response.data.shorturl]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchData(); // Now fetchData is available here

    console.log("Shorten Link: ", shortenLinks);
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
        {shortenLinks.length > 0 && (
          <Link shortenLinks={shortenLinks} loading={loading} />
        )}
      </>
    </>
  );
};

export default Shortener;

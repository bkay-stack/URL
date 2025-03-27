import { useState, useEffect } from "react";
import "./shortener.style.css";
import Link from "../link/Link";
import axios from "axios";
// import CopyToClipboard from "react-copy-to-clipboard";

const Shortener = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenLinks, setShortenLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  };

  const fetchData = async () => {
    if (!userInput.trim().length) {
      setError("Please enter a valid URL");
      return;
    }

    const urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+[\w\d]{2,}.*$/;
    if (!urlPattern.test(userInput)) {
      setError("Invalid URL format. Please enter a valid link.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `https://is.gd/create.php?format=json&url=${userInput}`
      );

      if (!response.data.shorturl) {
        throw new Error("Failed to generate short link.");
      }

      setShortenLinks((prevLinks) => [
        ...prevLinks,
        { original: userInput, short: response.data.shorturl },
      ]);
    } catch (error) {
      setError("Failed to shorten the link. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchData();

    console.log("Shorten Link: ", shortenLinks);
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);

  return (
    <>
      <section className="shortener">
        <form onSubmit={submitHandler}>
          <>
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={userInput}
              onChange={userInputHandler}
              className={error ? "custom-input" : ""}
            />

            <button type="submit" className="shorten-btn">
              Shorten It!
            </button>
          </>
        </form>

        <p className="error-message">{error}</p>
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

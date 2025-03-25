import { useState, useEffect } from "react";
import "./link.style.css";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const Link = ({ userInput }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  // Functions
  const fetchData = async () => {
    if (!userInput) return;

    try {
      setLoading(true);
      const response = await axios.post(
        `https://api.tinyurl.com/create
?url=${userInput}&alias=${userInput}&format=json`
      );
      console.log(response.response.data.data.tiny_url);
      setShortenLink(response.response.data.data.tiny_url);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const copyHandler = () => {
    setIsCopied(true);

    console.log("Copied");
  };

  // useEffect

  useEffect(() => {
    if (!userInput) return;

    const delay = setTimeout(() => {
      fetchData();
    }, 800); // Wait 800ms after user stops typing

    return () => clearTimeout(delay); // Clear timeout on new input change
  }, [userInput]);

  // useEffect
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    // Container
    <div className="url-list">
      <div className="original-copy">
        <p>Original</p>
        {/* Line */}
      </div>

      <div className="url-line"></div>

      <div className="copied-link">
        <p>{shortenLink}</p>
        <CopyToClipboard text={shortenLink} onCopy={copyHandler}>
          <button className={isCopied ? "copied" : ""}>
            {isCopied ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Link;

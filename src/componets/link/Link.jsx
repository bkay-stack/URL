import { useState, useEffect } from "react";
import "./link.style.css";
import CopyToClipboard from "react-copy-to-clipboard";

const Link = ({ shortenLinks, loading }) => {
  const [copiedLinkIndex, setCopiedLinkIndex] = useState(null);

  const copyHandler = (index) => {
    setCopiedLinkIndex(index); // Set the copied index
    console.log("Copied:", index);
  };

  // useEffect
  useEffect(() => {
    if (copiedLinkIndex !== null) {
      setTimeout(() => {
        setCopiedLinkIndex(false);
      }, 1000);
    }
  }, [copiedLinkIndex]);

  return (
    // Container
    shortenLinks.map((link, index) => (
      <div key={index} className="url-list">
        <div className="original-copy">
          <p>{link.original}</p>
        </div>

        <div className="url-line"></div>

        <div className="copied-link">
          <p>{link.short}</p>
          <CopyToClipboard text={link.short} onCopy={() => copyHandler(index)}>
            <button className={copiedLinkIndex === index ? "copied" : ""}>
              {copiedLinkIndex === index ? "Copied" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    ))
  );
};

export default Link;

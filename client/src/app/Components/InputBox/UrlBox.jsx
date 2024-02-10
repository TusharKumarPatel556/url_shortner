"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./UrlBox.module.css";
import { MdContentCopy } from "react-icons/md";
import { changeUrl } from "@/app/Api/urlApi";
import { urlcontext } from "@/app/context/UrlContext";

const UrlBox = () => {
  const [inputval, setInput] = useState("");
  const { shortUrl, setshortUrl } = useContext(urlcontext);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  const handleClick = async () => {
    if (inputval) {
      const shortUrl = await changeUrl(inputval);
      setshortUrl(shortUrl);
    }
  };

  const handleChange = (e) => {
    const url = e.target.value;
    setInput(url);
  };

  const handleCopy = () => {
    const urlElement = document.getElementById("shortUrl");
    urlElement.select;
    document.execCommand("copy");
  };

  return (
    <>
      <h5 id="shortUrl" style={{ color: " white", marginBottom: "50px" }}>
        {shortUrl ? (
          <>
            <MdContentCopy onClick={handleCopy} />
            &nbsp;https://urlshortner-hm79.onrender.com/url/
            {shortUrl}
          </>
        ) : (
          ""
        )}
      </h5>

      <input
        style={{ borderRadius: "1000px", width: "700px", height: "50px" }}
        type="text"
        className="form-control"
        placeholder="Enter URL"
        onChange={(e) => handleChange(e)}
        value={inputval}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <button onClick={handleClick} className={styles.getUrl}>
        Get URL
      </button>
    </>
  );
};

export default UrlBox;

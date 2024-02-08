"use client";
import React, { useState, useEffect } from "react";
import styles from "./UrlBox.module.css";
import { changeUrl } from "@/app/Api/urlApi";

const UrlBox = () => {
  const [inputval, setInput] = useState("");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  const handleClick = async () => {
    const shortUrl = await changeUrl(inputval);
  };

  const handleChange = (e) => {
    const url = e.target.value;
    setInput(url);
  };

  return (
    <>
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

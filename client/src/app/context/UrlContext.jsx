"use client";
import React, { useState } from "react";

export const urlcontext = React.createContext();

const UrlContext = ({ children }) => {
  const [shortUrl, setshortUrl] = useState(""); // Initialize shortUrl with an empty string

  const initialValues = {
    shortUrl,
    setshortUrl,
  };

  return (
    <urlcontext.Provider value={initialValues}>{children}</urlcontext.Provider>
  );
};

export default UrlContext;

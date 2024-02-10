"use client";
import React, { useState, useEffect, useContext } from "react";
import { urlcontext } from "@/app/context/UrlContext";
import Image from "next/image";
import QRCode from "qrcode";

const QrCodeGenerator = () => {
  const [src, setSrc] = useState("");
  const context = useContext(urlcontext);
  const shortUrl = context ? context.shortUrl : "";

  const generateQRCode = async () => {
    try {
      const val = await QRCode.toDataURL(shortUrl);
      setSrc(val);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  useEffect(() => {
    if (shortUrl) {
      generateQRCode();
    }
  }, [shortUrl]);

  return (
    <div>
      {src && (
        <div>
          <p>Image URL: {src}</p> {/* Log the src value */}
          <Image src={src} alt={shortUrl} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;

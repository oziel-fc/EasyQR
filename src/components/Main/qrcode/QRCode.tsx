import { QRCodeCanvas } from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import styles from "./QRCode.module.css"
import useDownloadImage from "../download/downloadImage";       // Reference the download button with element QR
import { toBase64Image } from "../../utils/base64Logo";

type QRCodeProps = {
  backColor: string;
  shapeColor: string;
  QRCodeValue: string;
  externLogo: string;
  sizeLogo: number;
}

const QRCode = ({backColor, shapeColor, QRCodeValue, externLogo, sizeLogo}: QRCodeProps) => {

  // Referencing the QRCode element to realize download with the downloadImage function
  const refElementDownload = useRef<HTMLCanvasElement | null>(null);
  const { setRef } = useDownloadImage();          // acts like useRef, but in global level
  useEffect(() => {
      setRef(refElementDownload.current);
  }, [setRef]);

  // Turning the img on base64 to solve the issues with CORS
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  useEffect(() => {
    async function convertLogo() {
      try {
        const base64 = await toBase64Image(externLogo);
        setLogoBase64(base64);
      } catch (err) {
        console.error("Error to convert the image to base64", err);
      }
    }

    if (externLogo) convertLogo();
  }, [externLogo]);

  return (
    <div className={styles.div_qrcode} style={{ position: "relative", display: "inline-block" }}>
      <QRCodeCanvas className={styles.object_qr} ref={refElementDownload}
        value={QRCodeValue ? QRCodeValue : "null"}
        size={1000}
        bgColor={backColor}
        fgColor={shapeColor}
        level="H"
        marginSize={1}
        imageSettings={{
          src: `${logoBase64}`,
          x: undefined,   
          y: undefined,   
          height: sizeLogo,     
          width: sizeLogo,      
          excavate: true, 
        }}
       style={{width: "275px", height: "275px"}}/>
    </div>
  );
};

export default React.memo(QRCode);

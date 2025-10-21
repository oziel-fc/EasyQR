import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRCode.module.css"
import { useEffect, useRef } from "react";
import useDownloadImage from "./download/DownloadImage";

type QRCodeProps = {
  backColor: string;
  shapeColor: string;
  QRCodeValue: string;
  externLogo: string
}

const QRCode = ({backColor, shapeColor, QRCodeValue, externLogo}: QRCodeProps) => {

  // Referencing the QRCode element to realize download with the downloadImage function
  const refElementDownload = useRef<HTMLCanvasElement | null>(null);
  const { setRef } = useDownloadImage();          // acts like useRef, but in global level
  useEffect(() => {
      setRef(refElementDownload.current);
  }, [setRef]);

  return (
    <div className={styles.div_qrcode} style={{ position: "relative", display: "inline-block" }}>
      <QRCodeCanvas className={styles.object_qr} ref={refElementDownload}
        value={QRCodeValue ? QRCodeValue : "null"}
        size={275}
        bgColor={backColor}
        fgColor={shapeColor}
        level="H"
        marginSize={1}
        imageSettings={{
          src: `${externLogo}`,
          x: undefined,   
          y: undefined,   
          height: 40,     
          width: 40,      
          excavate: true, 
        }}
      />
    </div>
  );
};

export default QRCode;

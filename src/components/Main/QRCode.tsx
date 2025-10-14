import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRCode.module.css"

type QRCodeProps = {
  backColor: string;
  shapeColor: string;
  QRCodeValue: string;
  externLogo: string
}

const QRCode = ({backColor, shapeColor, QRCodeValue, externLogo}: QRCodeProps) => {
  return (
    <div className={styles.div_qrcode} style={{ position: "relative", display: "inline-block" }}>
      <QRCodeCanvas className={styles.object_qr}
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

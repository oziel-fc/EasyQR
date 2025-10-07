import { QRCodeCanvas } from "qrcode.react";
import styles from "./QRCode.module.css"

const QrCodeWithLogo = () => {
  return (
    <div className={styles.div_qrcode} style={{ position: "relative", display: "inline-block" }}>
      <QRCodeCanvas
        value="null"
        size={270}
        bgColor="#020109"
        fgColor="#1d1b2e"
        level="H"
        marginSize={1}
        imageSettings={{
          src: "",
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

export default QrCodeWithLogo;

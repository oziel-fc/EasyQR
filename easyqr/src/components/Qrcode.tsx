import { QRCodeSVG } from "qrcode.react";

function QRGenerator() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Gerador de QR Code</h2>
      <QRCodeSVG
        value="https://github.com/oziel-fc"
        size={200}          // tamanho do QR
        fgColor="#1e293b"   // cor do QR
        bgColor="#fef3c7"   // cor de fundo
        level="L"
      />
    </div>
  );
}

export default QRGenerator;

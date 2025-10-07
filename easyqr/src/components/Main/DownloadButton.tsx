import styles from "./DownloadButton.module.css"

type ButtonTextProps = {
  textButton: string;
  addClass?: string;
}

const DownloadButton = ({textButton, addClass}: ButtonTextProps) => {
  return (
    <button className={`${styles.download_button} ${addClass ?? ""}`}>{textButton}</button>
  )
}

export default DownloadButton

import styles from "./DownloadButton.module.css"

type ButtonText = {
  textButton: string;
}

const DownloadButton = ({textButton}: ButtonText) => {
  return (
    <button className={styles.download_button}>{textButton}</button>
  )
}

export default DownloadButton

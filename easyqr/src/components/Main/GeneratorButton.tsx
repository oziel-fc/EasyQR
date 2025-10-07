import styles from "./GeneratorButton.module.css"

type ButtonTextProps = {
    textButton: string;
    addClass?: string
}

const GeneratorButton = ({textButton, addClass}: ButtonTextProps) => {
  return (
    <button className={`${styles.generator_button} ${addClass ?? ""}`}>{textButton}</button>
  )
}

export default GeneratorButton

import styles from "./GeneratorButton.module.css"

type ButtonText = {
    textButton: string;
}

const GeneratorButton = ({textButton}: ButtonText) => {
  return (
    <button className={styles.generator_button}>{textButton}</button>
  )
}

export default GeneratorButton

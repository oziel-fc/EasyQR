import styles from './InputText.module.css'

type InputTextProps = {
    elementName: string;
    inputTitle: string;
}

const InputText = ({elementName, inputTitle}: InputTextProps) => {
  return (
    <div className={styles.input_row}>
        <input id={styles.input_text} type="text" name={elementName} placeholder={inputTitle}/> 
    </div>
  )
}

export default InputText

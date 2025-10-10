import styles from './InputText.module.css'

type InputTextProps = {
  elementName: string;
  inputTitle: string;
  value: string;
  onChange: (newValue: string) => void;
}

const InputText = ({elementName, inputTitle, value, onChange}: InputTextProps) => {
  return (
    <div className={styles.input_row}>
        <input id={styles.input_text} type="text" name={elementName} placeholder={inputTitle} 
        value={value}
        onChange={(e) => onChange(e.target.value)}/> 
    </div>
  )
}

export default InputText

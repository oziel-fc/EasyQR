import styles from './Main.module.css'
import PrimaryColorPicker from './PrimaryColorPicker'

const Main = () => {
  return (
    <div className={styles.container}>
        <div className={styles.col_generator}>
            <div className={styles.settings_qr}>
                <div className={styles.button_font}></div>
                <PrimaryColorPicker/>
                <div className={styles.secondary_color}></div>
                <input type="text" name="" id="" />
            </div>
            <div className={styles.qr_code}></div>
            <div className={styles.generator_qr}></div>
        </div>
    </div>
  )
}

export default Main

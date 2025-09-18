import { useState } from 'react'
import styles from './PrimaryColorPicker.module.css'

const PrimaryColorPicker = () => {
  const [color, setColor] = useState("#ffffff")

  return (
    <div className={styles.button_color_picker}>
      <input type="color" id="colorPicker" value={color} onChange={(e) => setColor(e.target.value)}/>
      <span id="hexValue">{color.toUpperCase()}</span>
    </div>
  )
}

export default PrimaryColorPicker

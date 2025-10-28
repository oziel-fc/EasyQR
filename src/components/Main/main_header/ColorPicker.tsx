import { useState } from 'react'
import { SketchPicker } from 'react-color'
import styles from './ColorPicker.module.css'
import useRgbaToHex from '../../utils/rgbaToHex';

type ColorPickerProps = {
  titleItem: string;
  color: string;
  onChange: (newColor: string) => void;
};



const PrimaryColorPicker = ({ color, onChange, titleItem }: ColorPickerProps) => {
  const [displayColorPicker, setDisplay] = useState(false)

  return (
    <div className={styles.color_picker}>
      <span>{titleItem}</span>
      <button className={styles.button_color_picker} onClick={() => setDisplay(true)}>
        {/* aligns the SketchPicker and currentColorDiv in columns */}
        <div className={styles.color_column}>
          <div className={styles.current_color}
            style={{ backgroundColor: color }}>
          </div>
          
          { displayColorPicker ? <div className={styles.sketch}>
            <SketchPicker
              color={color}
              onChange={(c: any) => onChange(`rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`)}
              presetColors={[]}
            />
          </div>  : null }
        </div>

        <span>{color.startsWith("rgba") ? useRgbaToHex(color).toUpperCase() : color.toUpperCase()}</span>
      </button>

      {/* close the sketch when click outside */}
      { displayColorPicker ? <div className={styles.cover} onClick={() => setDisplay(false)}/>
          : null
      }
    </div>
  )
}

export default PrimaryColorPicker

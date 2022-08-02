import React, { FC, ChangeEvent, useState } from 'react'

type SliderSize = 'small' | 'medium' | string

type SliderColor = 'primary' | 'secondary' | string

interface IMySliderProps {
  /**
   * The value of the slider. For ranged sliders, provide an array with two values.
   */
  value?: Array<number> | number;
  /**
   * The size of the slider.
   */
  size?: SliderSize;
  /**
   * The color of the component.
   */
  color?: SliderColor;
  /**
   * If true, the component is disabled.
   */
  disabled?: boolean;
  /**
   * Marks indicate predetermined values to which the user can move the slider. If true the marks are spaced according the value of the step prop. If an array, it should contain objects with value and an optional label keys.
   */
  marks?: Array<{ label?: string, value: number }> | boolean;
  /**
   * The minimum allowed value of the slider. Should not be equal to max.
   */
  min?: number;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  max?: number;
  /**
   * The maximum allowed value of the slider. Should not be equal to min.
   */
  step?: number;
  /**
   * event handler for the click event of the button
   */
  onChange?:(event:ChangeEvent<HTMLInputElement>) => void
}

const MySlider: FC<IMySliderProps> = ({
  value,
  size = 'medium',
  color,
  marks,
  disabled,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}) => {
  const [values, setValues] = useState(Array.isArray(value) ? value : [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    const newValues = [...values]
    newValues[idx] = +e.target.value
    setValues(newValues)
    onChange?.(e)
  }

  return (
    <span className="slider-root">
      <span className="slider-rail slider-rail--horizontal"/>
      <span className="slider-track slider-track--horizontal"/>
      {values.map((value, index) => {
        return (
          <React.Fragment key={`slider-${index}`}>
            <span className="slider-thumb slider-thumb--horizontal">
              <input
                type="range"
                className="slider-thumb__input"
                value={value}
                onChange={(e) => handleChange(e, index)}
              />
            </span>
            {/* <span className={clsx(classes.offset, className)} theme={theme} aria-hidden>
              <span className={classes.circle}>
                <span className={classes.label}>{value}</span>
              </span>
            </span> */}
          </React.Fragment>
        );
      })}
    </span>
  )
}

export default MySlider
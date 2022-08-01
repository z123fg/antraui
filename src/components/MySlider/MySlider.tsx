import React, { FC, ChangeEvent } from 'react'

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      onChange={handleChange}
    />
  )
}

export default MySlider
import React, { FC, ChangeEvent, useState, useRef, useLayoutEffect, useEffect } from 'react'

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
  value = 50,
  size = 'medium',
  color,
  marks,
  disabled,
  min = 0,
  max = 100,
  step = 1,
  onChange,
}) => {
  const [values, setValues] = useState<number[]>(Array.isArray(value) ? value : [value])
  const [railEdge, setRailEdge] = useState({ left: 0, top: 0, right: 0, bottom: 0 })
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0})
  const [recordingMove, setRecordingMove] = useState(false)

  const railEl = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (railEl.current) {
      const rect = railEl.current.getBoundingClientRect()
      setRailEdge({
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      })
    }
  }, [])

  useEffect(() => {
    if (mousePosition.left || mousePosition.top) {
      const railLength = railEdge.right - railEdge.left
      const coveredLength = mousePosition.left - railEdge.left
      const newPercentage = coveredLength / railLength
      let newValue = (max - min) * newPercentage
      if (newValue % step >= step / 2) {
        newValue = Math.floor(newValue / step) * step
      } else {
        newValue = (Math.floor(newValue / step) + 1) * step
      }
      if (newValue > max) {
        newValue = max
      }
      if (newValue < min) {
        newValue = min
      }
      setValues([newValue])
    }
  }, [mousePosition])

  const valueToPercent = (value: number, min: number, max: number) => {
    return value / (max - min) * 100
  }

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLSpanElement).setPointerCapture(e.pointerId)
    setRecordingMove(true)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    (e.target as HTMLSpanElement).releasePointerCapture(e.pointerId)
    setRecordingMove(false)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (recordingMove) {
      setMousePosition({
        left: e.clientX,
        top: e.clientY
      })
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    console.log('handle change called')
    const newValues = [...values]
    newValues[idx] = +e.target.value
    setValues(newValues)
    onChange?.(e)
  }

  return (
    <span
      className="slider-root slider-root--horizontal"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <span className="slider-rail slider-rail--horizontal" ref={railEl}/>
      <span
        className="slider-track slider-track--horizontal"
        style={{ left: '0%', width: `${valueToPercent(values[0], min, max)}%`}}
      />
      {values.map((value, index) => {
        return (
          <React.Fragment key={`slider-${index}`}>
            <span
              className="slider-thumb slider-thumb--horizontal"
              style={{ left: `${valueToPercent(values[index], min, max)}%`}}
            >
              <input
                type="range"
                className="slider-thumb__input"
                value={values[index]}
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
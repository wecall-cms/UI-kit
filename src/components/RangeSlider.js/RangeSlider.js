
import React, { useState, useEffect } from 'react';
import './RangeSlider.scss';

const RangeSlider = () => {

    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (newValue) => {
        setSliderValue(newValue);
    };



    return (
        <div>            <h1>RangeSlider Example</h1>
            <div className='container'>
                <RangeSliders
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={handleSliderChange}
                    label="Slider Value"
                />
            </div>

        </div>
    )
}

export default RangeSlider






const RangeSliders = ({ min, max, value, onChange }) => {
    const [sliderValue, setSliderValue] = useState(value);

    useEffect(() => {
        setSliderValue(value);
    }, [value]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        onChange(newValue);
    };

    const getSliderBackground = () => {
        const percentage = ((sliderValue - min) / (max - min)) * 100;
        return `linear-gradient(90deg, #1E3D8C ${percentage}%, #ddd ${percentage}%)`;
    };



    return (
        <div className="range-slider">
            <div className="slider-dot" style={{ left: '0%' }}></div> {/* Add the dot here */}
            <input
                type="range"
                min={min}
                max={max}
                value={sliderValue}
                onChange={handleChange}
                className="slider"
                style={{ background: getSliderBackground() }}
            />
        </div>
    );
};


import React, { useState } from 'react';
import Select from 'react-select';
import './Dropdown.scss'

const Dropdown = () => {
    return (
        <div>
            <div>
                <h1>Dropdown Example</h1>
                <div className='container'>
                    <div className='cms__flex'>

                        <Dropdowns size={"small"} />
                        <Dropdowns size={"medium"} />
                        <Dropdowns size={"large"} />
                    </div>

                    <div className='cms__flex'>

                        <Dropdowns size={"small"} />
                        <Dropdowns size={"medium"} />
                        <Dropdowns size={"large"} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dropdown





const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function Dropdowns({ size }) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className={`cms__dropdown ${size}`}

            />
        </div>
    );
}

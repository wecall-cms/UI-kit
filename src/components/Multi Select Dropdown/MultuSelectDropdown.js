import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import './MultiSelectDropdown.scss'

const MultuSelectDropdown = () => {
    return (
        <div>
            <div>
                <div>
                    <h1>Multi Select Dropdown Example</h1>
                    <div className='container'>
                        <div className='cms__flex'>

                            <SelectDropdown size={"small"} />
                            <SelectDropdown size={"medium"} />
                            <SelectDropdown size={"large"} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MultuSelectDropdown




const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const SelectDropdown = ({ size }) => {
    const [selected, setSelected] = useState([]);

    return (
        <div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                className={`cms__dropdown ${size}`}

            />
        </div>
    );
};

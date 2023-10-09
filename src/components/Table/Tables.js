import React from 'react'
import './Table.scss'

const Tables = () => {
    const data = [
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },
        { field0: <input type='checkbox' />, field1: 'Lander-1', field2: 'Lander', field3: '06/06/2023 4:45 PM', field4: "06/06/2023 4:45 PM" },

    ]
    return (
        <div>
            <div>
                <h1>Table Example</h1>
                <div className='container'>
                    <DataTable data={data} />
                </div>
            </div>
        </div>
    )
}

export default Tables


function DataTable({ data }) {
    return (
        <div>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>
                            <input type='checkbox' />

                        </th>
                        <th>Name</th>
                        <th>Content type</th>
                        <th>Last Uodated</th>
                        <th>Publish/Unpublish</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.field0}</td>
                            <td>{item.field1}</td>
                            <td>{item.field2}</td>
                            <td>{item.field3}</td>
                            <td>{item.field4}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


function DataTables() {
    this.state = {
        data: [
            { id: 1, name: 'Item 1', checked: false, radioValue: 'Option 1', switchOn: false }
        ]
    }


    handleCheckboxChange = (id) => {
        this.setState((prevState) => ({
            data: prevState.data.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            ),
        }));
    };


    handleRadioChange = (id, value) => {
        this.setState((prevState) => ({
            data: prevState.data.map((item) =>
                item.id === id ? { ...item, radioValue: value } : item
            ),
        }));
    };

    handleSwitchChange = (id, value) => {
        this.setState((prevState) => ({
            data: prevState.data.map((item) =>
                item.id === id ? { ...item, switchOn: !item } : item
            ),
        }))
    }
    return (
        <div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Checkbox</th>
                            <th>Name</th>
                            <th>Radio Button</th>
                            <th>Switch Button</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item) => (
                            <tr key={item.id} >
                                <td>
                                    <input type='checkbox' checked={item.checked} onChange={() => this.handleCheckboxChange(item.id)} />

                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <label>
                                        <input type='radio' value="Option 1"
                                            checked={item.radioValue === "Option 1"}
                                            onChange={() => this.handleRadioChange(item.id, "Option 1")}
                                        />
                                        Option 1
                                    </label>

                                    <label>
                                        <input type='radio' value="Option 2"
                                            checked={item.radioValue === "Option 2"}
                                            onChange={() => this.handleRadioChange(item.id, "Option 2")}
                                        />
                                        Option 2
                                    </label>
                                </td>
                                <td>
                                    <label className='switch'>
                                        <input type='checkbox'
                                            checked={item.switchOn}
                                            onChange={() => this.handleSwitchChange(item.id)}
                                        />
                                        <span className='slider'></span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
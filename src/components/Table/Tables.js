import React from "react";
import "./Table.scss";

function DataTable({ data }) {
  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
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
  );
}

function DataTables() {
  this.state = {
    data: [
      {
        id: 1,
        name: "Item 1",
        checked: false,
        radioValue: "Option 1",
        switchOn: false,
      },
    ],
  };

  const handleCheckboxChange = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  const handleRadioChange = (id, value) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item) =>
        item.id === id ? { ...item, radioValue: value } : item
      ),
    }));
  };

  const handleSwitchChange = (id, value) => {
    this.setState((prevState) => ({
      data: prevState.data.map((item) =>
        item.id === id ? { ...item, switchOn: !item } : item
      ),
    }));
  };
  return (
    <div>
      <div className="table-container">
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
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => this.handleCheckboxChange(item.id)}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <label>
                    <input
                      type="radio"
                      value="Option 1"
                      checked={item.radioValue === "Option 1"}
                      onChange={() =>
                        this.handleRadioChange(item.id, "Option 1")
                      }
                    />
                    Option 1
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Option 2"
                      checked={item.radioValue === "Option 2"}
                      onChange={() =>
                        this.handleRadioChange(item.id, "Option 2")
                      }
                    />
                    Option 2
                  </label>
                </td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item.switchOn}
                      onChange={() => this.handleSwitchChange(item.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { DataTables, DataTable };

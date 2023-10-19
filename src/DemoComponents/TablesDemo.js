import React from "react";
import { DataTable } from "../components/Table/Tables";

const TablesDemo = () => {
  const data = [
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
    {
      field0: <input type="checkbox" />,
      field1: "Lander-1",
      field2: "Lander",
      field3: "06/06/2023 4:45 PM",
      field4: "06/06/2023 4:45 PM",
    },
  ];

  return (
    <div>
      <div>
        <h1>Table Example</h1>
        <div className="container">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default TablesDemo;


import Papa from "papaparse";
import { useState } from "react";
import Table from './table.js'
import Format from './format-data.js'

function App() {

    // State to store table column name
    const [tableRows, setTableRows] = useState([]);

    // State to store table values
    const [values, setValues] = useState([]);

    // State to store table values
    const [newValues, setNewValues] = useState([]);

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function(results) {
                const rowsArray = [];
                const valuesArray = [];
                const newValues = [];
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                    newValues.push(Format(Object.values(d)));

                    return null;
                });

                // Filtered column names
                setTableRows(rowsArray[0]);

                // Filtered values
                setValues(valuesArray);

                // Filtered values
                setNewValues(newValues);
            },
        });
    };

  return (
    <div id="wrapper">
      {/* File Uploader */}
      <div id="inputDiv">
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
        />
      </div>
      {/* Tables */}
      <div id="table1Div">
        <p>Original Table</p>
        <Table
          tableRows={tableRows}
          values={values}
        />
      </div>
      <div id="table2Div">
        <p>Transformed Table</p>
        <Table
          tableRows={tableRows}
          values={newValues}
        />
      </div>
    </div>
  );
}

export default App;
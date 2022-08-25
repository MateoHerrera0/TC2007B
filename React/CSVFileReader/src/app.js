/*
 * App to display student data formatted for Mexico or USA read from a csv file
 *
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

import Papa from "papaparse";
import { useState } from "react";
import Table from './table.js'
import Format from './format-data.js'

function App() {

    // State to store table column name
    const [tableRows, setTableRows] = useState([]);

    // State to store table values
    const [values, setValues] = useState([]);

    // State to store formatted table values
    const [newValues, setNewValues] = useState([]);

    const changeHandler = (event) => {
      // Read the contents of a CSV file
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          const rowsArray = [];
          const valuesArray = [];
          const newValues = [];
          // Function to proccess the data and push it into the apprpriate 
          // arrays
          results.data.map((d) => {
            rowsArray.push(Object.keys(d));
            valuesArray.push(Object.values(d));
            newValues.push(Format(Object.values(d)));

            return null;
          });

          // Column names
          setTableRows(rowsArray[0]);

          // Values
          setValues(valuesArray);

          // Formated values
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
          data-testid="inputForFile"
        />
      </div>
      {/* Tables */}
      <div id="table1Div">
        <p>Original Table</p>
        <Table
          tableRows={tableRows}
          values={values}
          id='actualTable'
        />
      </div>
      <div id="table2Div">
        <p>Transformed Table</p>
        <Table
          tableRows={tableRows}
          values={newValues}
          id='resultTable'
        />
      </div>
    </div>
  );
}

export default App;
/*
 * Function that returns the table component of the app
 * 
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

// This function recieves the headers and rows, and returns the table in html 
// form. It also recieves the id used for tests.
export default function Table(props) {
  return(
    <table data-testid={props.id}>
      <thead>
        <tr>
          {/* iterate through the headers */}
          {props.tableRows.map((rows, index) => {
            return <th key={index}>{rows}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {/* Iterate through rows */}
        {props.values.map((value, index) => {
          return (
            <tr key={index}>
              {/* Iterate through values in row */}
              {value.map((val, i) => {
                return <td key={i}>{val}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
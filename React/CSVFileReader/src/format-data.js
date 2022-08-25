/*
 * Function that formats lines of data from the csv files using the formatting
 * functions.
 * 
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

import { Name, Date, Email, Grade } from "./convert.js";

// This functiion takes a row from the csv file in array format and returns a
// new formattted row.
export default function Convert(data){
  const newData = data.slice()
  newData[1] = newData[1]? Name(data[1]) : null
  newData[2] = newData[2]? Email(data[2]) : null
  newData[3] = newData[3]? Date(data[3]) : null
  newData[4] = newData[4]? Grade(data[4]) : null
  return newData
}
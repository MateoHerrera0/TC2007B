import { Name, Date, Email, Grade } from "./convert.js";

export default function Convert(data){
    const newData = data.slice()
    newData[1] = newData[1]? Name(data[1]) : null
    newData[2] = newData[2]? Email(data[2]) : null
    newData[3] = newData[3]? Date(data[3]) : null
    newData[4] = newData[4]? Grade(data[4]) : null
    return newData
}
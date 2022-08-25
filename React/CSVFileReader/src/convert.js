/*
 * Functions that format the different fields of data in the csv files.
 * 
 * Mateo Herrera
 * Gerardo Gutierrez
 * Francisco segundo nombre
 * 2022-08-24
 */

// function that returns the name and surname of a full name.
function Name(name_) {
  const [name, surname, ] = name_.split(' ');
  const newName = name + " " + surname;
  return newName;
}

// function that creates an email from an id
function Email(id) {
  return id + "@tec.mx";
}

// function that changes date format
function Date(date) {
  const [month, day, year] = date.split('/');
  const newDate = day + "/" + month + "/" + year;
  return newDate;
}

// function that returns letter grade from numeric grade
function Grade(grade) {
  if (grade>=93) {
      return "A"
  } else if (grade >= 90) {
    return "A-"
  } else if (grade >= 87) {
    return "B+"
  } else if (grade >= 83) {
    return "B"
  } else if (grade >= 80) {
    return "B-"
  } else if (grade >= 77) {
    return "C+"
  } else if (grade >= 73) {
    return "C"
  } else if (grade >= 70) {
    return "C-"
  } else if (grade >= 67) {
    return "D+"
  } else if (grade >= 64) {
    return "D"
  } else {
    return "E"
  }
}

export {Name, Date, Email, Grade}
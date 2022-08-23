function Name(name_) {
    const [name, surname, ] = name_.split(' ');
    const newName = name + " " + surname;
    return newName;
}

function Email(id) {
    return id + "@tec.mx";
}

function Date(date) {
    const [month, day, year] = date.split('/');
    const newDate = day + "/" + month + "/" + year;
    return newDate;
}

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
        return  "E"
    }
}

export {Name, Date, Email, Grade}
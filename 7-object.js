function printObjectProperty(obj, propName) {
    console.log(obj[propName]);
}

let me = {
    name: 'Adam',
    surname: 'Asss',
    middleName: 'Bsss',
    burthDate: {year: 2004, month: 2, day: 1},
    occupation: 'Fronted Developer',
    married: false
}
printObjectProperty(me, 'name');
printObjectProperty(me, 'surname')
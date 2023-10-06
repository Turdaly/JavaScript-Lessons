let person = {
    name: 'Adam',
    surname: 'Goood'
}

let workPlace = {
    company: 'Expert',
    profession: 'Frontend Developer',
    salary: 450000
}

let home = {
    type: 'flate',
    roomNumber: 8,
    floorNumber: 2,
    price: 9500000
}

let allInformation = {
    ...person,
    ...workPlace,
    ...home
}

// ______________________________________

console.log(Object.keys(workPlace));
console.log(Object.values(workPlace));
console.log(Object.entries(workPlace));
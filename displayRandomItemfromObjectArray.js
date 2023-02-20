const array = [
    {
    "name": "John Doe"
    },
    {"name": "Mark Doe"},
    {"name": "Michael Smith"},
    {"name": "Jessy Bieber"},
    {"name": "Taylor Swift"}
];
//generate a random number base on the array length
const random = Math.floor(Math.random() * array.length);
//log the item of array
console.log(array.at(random).name);


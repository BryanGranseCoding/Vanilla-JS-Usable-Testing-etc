const friend1 = {
    name: 'Laurence',
};

const friend2 = {
    name: 'John',
};

const friend3 = {
    name: 'Jane',
};
const friend = {
    name: 'Bryan Devs',
    age: 30,
    gender: 'male',
    location: {
        city: 'Davao',
        country: 'Philippines',
        addresses: 'Purok 5-B'
        }
}

const friends = [friend1, friend2, friend3]; 
console.log(JSON.stringify(friends));

const str = '[{"name":"Laurence"},{"name":"John"},{"name":"Jane"}]';
const friends2 = JSON.parse(str); //parse the string to become a usable object

//TODO: Update the 'str' with new values for the names and output in HTML or index.html
friends2.push({"name": "Zoren"});

let html = "";
//Using for Loop
for (let i = 0; i < friends2.length; i++) {
    html += `<li>${friends2[i].name}</li>`; // here you can also use bracket notation
  
document.querySelector('.container').innerHTML = html;
}
//Using forEach
let html2 = "";
friends2.forEach(
    value => { 
        html2 += `<li>${value.name}</li>`;
        document.querySelector('.forEachdata').innerHTML = html2;
    })

/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/

const names1 = ['Alex', 'Dima', 'Kate', 'Galina', 'Ivan'];
const names2 = ['Dima', 'Ivan', 'Kate'];

function uniqueNames() {
    let names = [];
    for (let i = 0; i < names1.length; i++) {
        if (!names2.includes(names1[i])) {
            names.push(names1[i]);
        }
    }

    return names;
}

console.log(uniqueNames());
    

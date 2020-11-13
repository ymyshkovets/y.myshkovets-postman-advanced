/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/

const names1 = ['Alex', 'Dima', 'Kate', 'Galina', 'Ivan'];
const names2 = ['Dima', 'Ivan', 'Kate'];

function Names(array1 = names1, array2 = names2) {
    let names = [];
    let repeat = false;
    array1.forEach(element => {
        array2.forEach(element2 => {
            if (element == element2) {
                repeat = true;
            }
        });
        if (repeat == false) 
            names.push(element);
        else repeat = false;
    });

    return names;
   
}

console.log(Names(names1, names2));

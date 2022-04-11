var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

let deletePerson = (person) => {
    let peopleVIP = people.filter((index) => index !== person )
return peopleVIP
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

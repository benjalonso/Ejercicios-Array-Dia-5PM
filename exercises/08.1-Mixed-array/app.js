var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let dataType = () => {
    var types = [];
    for(let i = 0; i < mix.length; i++ ){
        types.push(typeof(mix[i]))
    }
    return types;
}
console.log(dataType());

// function init(){
//     var name = "Mozilla";
//     function displayName(){
//         console.log("I am " + name);
//     }
//     name = "Chrome";
//     return displayName();
// }

// let c = init();
// c

//Create 3 functions in different types of return value. Use them to implement closure.
const x = () =>{
    let a = 1
    console.log(a)
    const y = () =>{
        let a = 2
        console.log(a)
        const z = () =>{
            let a = 3
            console.log(a)
        }
        z()
    }
    y()
}
x()
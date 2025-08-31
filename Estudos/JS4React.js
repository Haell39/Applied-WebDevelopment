// normal function
function add(a, b) {
    return a + b;
}
console.log(add(7, 55));

// arrow function
const multiply = (a, b) => a * b;
console.log(multiply(7, 55));

// exporting normal functions

// export default function add() {
//     return a + b;
// }

// exporting arrow functions
// export const multiply = (a, b) => a * b;

// in React

// const MyComponent = () => {
//     return <div> </div>
// }

// anonymous function
<button onClick={() => {console.log(multiply(7, 55))}}


import React from 'react';
import ReactDOM from 'react-dom';

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )


// ==========================================

// function formatName(user) {
//     return user.firstName + '' + user.lastName;
// }

// const user = {
//     firstName: "John",
//     lastName: "Legend"
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// ==========================================

// function getGreeting(user) {
//     if (user){
//         return <h1>Hello, {formatName(user)}</h1>;
//     }
//     return <h1>Hello, Stranger</h1>
// }

// ReactDOM.render(
//     getGreeting(),
//     document.getElementById('root')
// )

// ==========================================

const element2 = <div tabIndex="0"></div>;
const element3 = <img src={user.avatarUrl}></img>
const element4 = <img src={user.avatarUrl} />   
const element5 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
)

ReactDOM.render(
    element5,
    document.getElementById('root')
)

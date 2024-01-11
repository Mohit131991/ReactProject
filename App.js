/*
 <div id="parent">
    <div id="child1">
        <h1>I am child 1 h1</h1>
        <h2>I am child 1 h2</h2>
    </div>
    <div id="child2">
        <h1>I am child 2 h1</h1>
        <h2>I am child 2 h2</h2>
    </div>
*/

const parent = React.createElement(
    "div", { id: "parent" },
    [React.createElement("div", { id: "child1" },[React.createElement("h1", {}, "I am child 1 h1"),React.createElement("h2",{},"I am child 1 h2")]),
         React.createElement("div",{id: "child2"},[React.createElement("h1",{},"I am child 2 h1"),React.createElement("h2",{},"I am child 2 h2")])
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); // This is part of React dom library

root.render(parent); // render method is responsible to take the heading object and convert it to h1 tag and put it into dom


/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>im h1</h1>
 *      <h2> im h2</h2>
 *    </div>
 *    <div id="child2">
 *      <h1>im h1</h1>
 *      <h2> im h2</h2>
 *    </div>
 * </div>
 */


const parent = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "im h1"),
    React.createElement("h2", {}, "im h2")])],
  React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "im h1"),
    React.createElement("h2", {}, "im h2")]))

// const heading = React.createElement(
//   "h1",
//    {id : 'heading'}, 
//    "Hello world from react"
// )

console.log(parent);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)

  <div id="parent">
        <div id="child">
          <h1>Iam h1 tag</h1>
          <h2>Iam h2 tag</h2>
        </div>
        <div id="child2">
          <h1>Iam h1 tag</h1>
          <h2>Iam h2 tag</h2>
        </div>
     </div>


 const heading = React.createElement('h1',{id : 'heading'},"Hello World from React");
 const roots = ReactDOM.createRoot(document.getElementById('root'));

 root.render(heading)

const parent = React.createElement('div',{id:'parent'},[
  React.createElement('div',{id:'child'},[
    React.createElement('h1',{},"Iam h1 tag"),
    React.createElement('h2',{},"Iam h2 tag")])],
    React.createElement('div',{id:'child2'},[
      React.createElement('h1',{},"Iam h1 tag"),
      React.createElement('h2',{},"Iam h2 tag")]
    ));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)
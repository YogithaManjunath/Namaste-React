// const heading = React.createElement("h1", {id:"heading"}, "Welcommeee to React!!!");
// if we console log the heading we will see a object...

//Rect.createElement().. is nothing but the javascript object



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//*****************2 */ Nested HTML structure in React

/* 
 <div>
      <div>
        <h1>"I am H1 React Tag</h1>
      </div>
</div>

*/

//so how to write this in react..

//React.CreateElement is the object that gets converted into the HTML( that Browser Understands) that is while rending in the DOM it converts itself into HTML element

/* const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
        React.createElement("h1", {}, "I am H1 React Tag") ) );

       console.log("parent:::", parent);

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);  
        
        */



        
//*****************3 */ Nested HTML structure in React and if we have siblings 

 //If we have a Sibling then create an array if the child tag

/* 
 <div>
      <div>
        <h1>"I am H1 React Tag</h1>
        <h2> "I am h2 Tag"</h2> ..Sibling
      </div>
</div>

*/

//so how to write this in react..

//React.CreateElement is the object that gets converted into the HTML( that Browser Understands) that is while rending in the DOM it converts itself into HTML element

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "I am H1 React Tag") , React.createElement("h2", {}, "I am H2 React Tag")]
    ) 
);

       console.log("parent:::", parent);

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);  
// console.log(React); // React is a core library with generic powers
// console.Log(ReactDOM); // ReactDOM is a specific library to use React in Web Apps


// const parent = document.getElementById("dom-root"); // real dom element
// const root = ReactDOM.createRoot(parent); // making a root in react


// const newTitle = document.createElement("h2") // type :: directly react DOM element
// const newTitle = React. createElement("h2", {}, "Hello from REAL React!"); // type, properties : (, children
// we are creating react element, and react will do the process from here on
// to manage the real dom element and related things

// const newTitle = React.createElement("h2", {}, "Hello from React")
// root.render(newTitle);


// -----------------------------------------------------------------------------


// const parent = document.getElementById("dom-root"); // real dom element
// const root = ReactDOM.createRoot(parent); // making a root in react

// const newTitle = React.createElement("h2", {}, "Hello from React")
// root.render(newTitle);




// const parent = document.getElementById("dom-root"); // *** THIS is done ONLY ONCE is REACT APP  ***
// const root = ReactDOM.createRoot(parent); // *** THIS is done ONLY ONCE is REACT APP  ***


// const newTitle = React.createElement("h2", {}, "Hello from REAL React!"); // Single child: text
// const newPara = React.createElement("p", {}, "Lorem ipsum dolor..."); // Single child: text

// const list1 = React.createElement("li", {}, "Item 1");
// const list2 = React.createElement("li", {}, "Item 2");
// const unorderList = React.createElement("ul", {}, [list1, list2]);

// const container = React.createElement("div", {}, [newTitle, newPara, unorderList]); // Children: array of React elements
// root.render(container); // *** THIS is done ONLY ONCE is REACT APP  ***




// ------------------------------------------------- PROPERTIES OBJECT --------------------------------------------------------

// const parent = document.getElementById("dom-root");
// const root = ReactDOM.createRoot(parent);

// const styleobj = {
//   fontSize: "3rem", // The key should be in camelCase, and the value should be in double quotes
//   margin: "3rem",
// };

// const title = React.createElement(
//   "h2",
//   {
//     className: "text-style-type-1", // Corrected syntax for props
//     id: "something",
//     style: styleobj,
//     title: "company name",
//   },
//   "Hello from REACT!"
// );

// console.log("title:", title);

// // Render the React element into the DOM
// root.render(title);



// ------------------------------------------------- JSX --------------------------------------------------------


// JSX --> Javascript syntax extension :: It is not Javascript , it is extension of Javascript
//                                     :: Don't call it HTML inside JS


const parent = document.getElementById("dom-root");
const root = ReactDOM.createRoot(parent);

const Card = (obj) => {
    return (
        <div className="card">
            <div>
                <h2>{obj.userName}</h2>
                <p>{obj.greet}! How are you?</p>
            </div>
            <img
                className="image"
                src="https://images.unsplash.com/photo-1736077722346-31ba59414728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            ></img>
        </div>
    );
}

const Container = () => {
    return (
        <div>
            <Card userName="Vishal" greet="Hi"/>
            <Card userName="VKC" greet="Hello"/>
            <Card userName="Raj" greet="Hlo"/>
            <Card userName="Abhi" greet="Hi"/>
        </div>
    );
};

root.render(<Container/>)

// root.render(Container());


// const container = ("div", {},[
//     <Card userName="Vishal" greet="hi"/>,
//     <Card userName="VKC" greet="Hello"/>,
//     <Card userName="Raj" greet="hlo"/>


//     // Card("Vishal"),
//     // Card("VKC"),
//     // Card("Raj"),
// ]);

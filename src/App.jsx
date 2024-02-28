import "./App.css";
import Button from "./Button";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
const user = {
  name: "Gnana Varshita",
  regno: "20MIS0141",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

//let isLoggedIn = true

const movies = [
  { title: "Hello", id: 1 },
  { title: "Guntur Kaaram", id: 2 },
  { title: "Ala Vaikuntapuramlo", id: 3 },
  { title: "Bommarillu", id: 4 },
  { title: "Most Eligle Bachlore", id: 5 },
];

const listItems = movies.map((movie) => <li key={movie.id}>{movie.title}</li>);

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [count, setCount] = useState(0);

  function handleClick() {
    //isLoggedIn = !isLoggedIn
    setLoggedIn(!loggedIn);
    setCount(count + 1);
    console.log(loggedIn);
  }
  return (
    <div className="App">
      <h1>
        Hello {user.name} {user.regno}
      </h1>
      <img
        className="w-90 h-90"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
      />

      <button
        className="border border-blue-500 px-4 py-2"
        onClick={handleClick}
      >
        Click Here
      </button>

      <h2>{count}</h2>

      <div>{loggedIn ? <Login /> : <Register />}</div>

      <div className="three">
        <ul>{listItems}</ul>
      </div>

      <div className="four">
        <Button />
      </div>
    </div>
  );
}

export default App;

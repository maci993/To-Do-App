import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  return (
    <div className="bg-indigo-500 h-screen flex flex-col items-center pt-56">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;

// HOMEWORK

// 01. pri klik na checkmark pozadinata na inputot da e zelena
// 02. napravete novo kopce za delete nekoe x ❌ ama iskoriteteja heroicons bibliotekata.
// https://heroicons.com/
// 03. pod ovaj page da ima history..
// znaci site izbrishani todos taskovi
// da gi imame vo toj history div

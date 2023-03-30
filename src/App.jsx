import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBook from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBook />
      <MyFooter />
    </div>
  );
}

export default App;

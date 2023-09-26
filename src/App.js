import "./App.css";
import { useGlobalContext } from "./context";
// import Favorities from "./Components/Favorities";
import Search from "./Components/Search";
import Meals from "./Components/Meals";
import Modal from "./Components/Modal";

function App() {
  const { showModal } = useGlobalContext();
  return (
    <div className="App">
      <Search />
      <Meals />
      {showModal && <Modal />}
    </div>
  );
}

export default App;

import "./App.css";
import { useGlobalContext } from "./context";
import Favorities from "./Components/Favorities";
import Search from "./Components/Search";
import Meals from "./Components/Meals";
import Modal from "./Components/Modal";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <div className="App">
      <Search />
      {favorites.length > 0 && <Favorities />}
      <Meals />
      {showModal && <Modal />}
    </div>
  );
}

export default App;

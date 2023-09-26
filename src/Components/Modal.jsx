import React from "react";
import { useGlobalContext} from "../context";


const Modal = () => {
  const {closeModal,selectedMeal} = useGlobalContext();
   const {strMealThumb:image, strMeal: title,strInstructions:steps,strSource:source} = selectedMeal;
   console.log(selectedMeal);
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
      <img className="img" src={image} alt={title} width={'200px'}/>
      <footer>
        <h3>{title}</h3>
        <p>Cooking Instruction</p>
        <p>{steps}</p>
        <a href={source} target="_blank">Original Source</a>
        <button className='btn' onClick={closeModal}>Close</button>
      </footer>
      </div>
    </aside>
  );
};

export default Modal;

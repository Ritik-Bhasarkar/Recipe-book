import { useGlobalContext } from '../context'
import { AiOutlineHeart} from "react-icons/ai";
 
const Meals = () => {
    const {meals , loading, selectMeal, addToFavorites} = useGlobalContext();
     

    if(loading){
      return <section className='load-section'>
          <h4>loading...</h4>        
      </section>
    }

    if(meals.length < 1){
      return <section className='load-section'>
        <h4>No meals matched your searched term. Please Try Again</h4>
        </section>
    }
 
  return (
    <div className='meals-card'>
        {meals.map((singleMeal) => {
          const {strMealThumb:image, strMeal: title, idMeal} = singleMeal
          return (
            <article
              key={idMeal}
              className='single-meal'
            >
            <img src={image} className='img' alt='meal' onClick={()=>selectMeal(idMeal)} ></img>
            <footer className='meal-footer'>
              <h5>{title}</h5>
              <button onClick={()=>addToFavorites(idMeal)} className='like-btn'><AiOutlineHeart/></button>
            </footer>
            </article>
            )
        })}
    </div>
  )
}

export default Meals
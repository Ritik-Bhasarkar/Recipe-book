import {useState} from 'react';
import { useGlobalContext } from '../context';

const Search = () => {

  const {setSearchTerm,fetchRandomMeal} = useGlobalContext();
  const [text,setText]=useState('');

  const handleChange=(e)=>{
    const textValue = e.target.value;
    setText(textValue);
    //console.log(textValue);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(text){
      setSearchTerm(text);
    }
  }


  const handleRandomMeal =()=>{
    setSearchTerm('');
    setText('')
    fetchRandomMeal();
  }



  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit} >
        <input onChange = {handleChange } className='form-input'
        value={text} type='text' placeholder='type favorite meal'/>
        <button  className='btn' type='submit' >search</button>
        <button onClick ={handleRandomMeal} className='btn btn-hipster' type='button'>suprise me</button>
      </form>
    </header>
    )
}

export default Search
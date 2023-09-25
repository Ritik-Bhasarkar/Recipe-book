import {useState} from 'react';
import { useGlobalContext } from '../context';

const Search = () => {

  const {setSearchTerm} = useGlobalContext();
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
      setText('')
    }
  }



  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit} >
        <input onChange = {handleChange } className='form-input'
        value={text} type='text' placeholder='type favorite meal'/>
        <button  className='btn' type='submit' >search</button>
        <button className='btn btn-hipster' type='button'>suprise me</button>
      </form>
    </header>
    )
}

export default Search
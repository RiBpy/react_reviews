import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';
const Review = () => {
  //hooks
  const [index,setIndex]=useState(0);
  const {name,job,text,image}=people[index];
  //check if incoming index is in array of data
  const checkNumber=(number)=>{
    if(number>people.length-1){
      return 0
    }else if(number<0){
      return people.length-1;
    }else{
      return number
    }
    }
  //prev and next  button 
  const prevReview=()=>{
    setIndex(index=>{let newIndex=index-1; return checkNumber(newIndex)})
  }
  const nextReview=()=>{
    setIndex(index=>{let newIndex=index+1; return checkNumber(newIndex)})
  }

//review randomly..means review will come not following any sequence 
const randomPerson =()=>{
  let randomNumber=Math.floor(Math.random()*people.length)//random number between 0 to array elements
  if (randomNumber===index){ //same random number will not come
    randomNumber=index+1;
  }
  setIndex(checkNumber(randomNumber))
}

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="autho">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft/>
        </button>
        <button className="prev-btn "onClick={nextReview}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
};

export default Review;

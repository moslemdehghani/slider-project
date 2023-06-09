import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import {useEffect, useLayoutEffect, useState} from 'react'
import data from './data'
function App() {

  const [people , setPeople] = useState(data);
  const [index , setIndex] = useState(0);


  useEffect(()=>{
   let peopleIndex = people.length - 1
    if(index < 0){
      setIndex(peopleIndex)
    }
    if(index > peopleIndex ){
      setIndex(0)
    }
  },[index,people])

  useEffect(()=>{
   let slider = setInterval(()=>{
      setIndex(index+1)
    },3000)
    return () => clearInterval(slider)
  },[index])

  return (
    <div className="section">
      <div className="title">نظرات کاربران</div>
      <div className="section-center">
        {
          people.map((person , personIndex)=>{
            const {id,image,name,title,qoute} = person;
            let position = "nextSlider";
            if(personIndex === index){
              position = "activeSlider"
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
              position = "prevSlider"
            }
            return(
              <article className={position} key={id}>
              <img src={image} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="qoute">{qoute}</p>
              </article>
            )
          })
        }
        <button className="next" onClick={()=> setIndex(index+1)}>
          <FiChevronRight />
        </button>
        <button className="prev" onClick={()=> setIndex(index-1)}>
          <FiChevronLeft />
        </button>
      </div>
    </div>
  );
}

export default App;

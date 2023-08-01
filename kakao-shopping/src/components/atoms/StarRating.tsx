import { useState, useEffect, useRef } from 'react';
const StarRating = ({starCount}) => {
  //return starts as much as starCount
  const stars = [];
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const observer = useRef(4);
  let thiss = 10;
  console.log(count, observer.current, thiss);

  for (let i = 0; i < starCount; i++) {
    stars.push(<img src="/assets/blueStar.png" alt="star" className="w-4 h-4" />);
  }

  return (
    <div className="flex">
    {stars.map((star, index) => (
      <div onClick={() => {
        setCount(prev => prev + 1)
        observer.current = count;
        thiss = count; 
      }} key={index}>{star}</div>
    ))}
    </div>
  )
}

export default StarRating;
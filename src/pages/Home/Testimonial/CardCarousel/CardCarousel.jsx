import { items } from "constants/contents/data";
import { useEffect, useState } from "react";
import "./slider.css"
import { Box } from "@mui/material";

// Card component for slider
export const Card = ({ name, copy, title, profile ,person}) => (
  <Box width={{md:"520px",sm:"400px",xs:"300px" }} boxShadow={3} m={{md:3,sm:1}} p={3} textAlign={"center"} bgcolor={"white"}>
    <h4>{title}</h4>
    <p className="description">{copy}</p>
    <img className="personImg" src={profile} alt="Man" />
    <h4 className="material-icons">{name}</h4>
    <p className="person">{person}</p>
  </Box>
);

//slider main component


const CardCarousel = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = () => {
    if (moveClass === 'prev') {
      shiftNext([...carouselItems]);
    } else if (moveClass === 'next') {
      shiftPrev([...carouselItems]);
    }
    setMoveClass('');
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="carouselwrapper module-wrapper">

      <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
        {carouselItems.map((t, index) =>
          <Card
            key={t.copy + index} name={t.name} copy={t.copy} title={t.title}
             profile={t.profile} person={t.person}/>
        )}
      </ul>
      <div className="ui">
        <button onClick={() => setMoveClass('next')} className="prev">
          <span className="material-icons">NEXT</span>
        </button>
        <button onClick={() => setMoveClass('prev')} className="next">
          <span className="material-icons">PREV</span>
        </button>
      </div>
    </div>
  );
};
export default CardCarousel;

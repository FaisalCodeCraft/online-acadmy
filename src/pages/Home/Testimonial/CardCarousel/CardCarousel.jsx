import { items } from "constants/contents/data";
import { useContext, useEffect, useState } from "react";
import "./slider.css"
import { Box } from "@mui/material";
import { ThemeContext } from "context";

// Card component for slider
export const Card = ({ name, copy, title, profile, person, mode }) => (

  <Box width={{ md: "520px", sm: "400px", xs: "300px" }} borderRadius={5}  boxShadow={mode==="dark"?"1px 5px 37px gray":"1px 5px 30px gray"} m={{ md: 3, sm: 1 }} p={3} textAlign={"center"} sx={{ backgroundColor: mode === "light" ? "white" : "black" }}>
   <div className="card"> <h4>{title}</h4>
    <p className="description">{copy}</p>
    <img className="personImg" src={profile} alt="Man" />
    <h4 className="material-icons">{name}</h4>
    <p className="person">{person}</p></div>
  </Box>
);

//slider main component


const CardCarousel = () => {
  const { mode } = useContext(ThemeContext)

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

      <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel `}>
        {carouselItems.map((t, index) =>
          <Card
            key={t.copy + index} name={t.name} copy={t.copy} title={t.title}
            profile={t.profile} person={t.person} mode={mode} />
        )}
      </ul>
      <div className="ui" >
        <button onClick={() => setMoveClass('next')} className="prev cardBtn">
          <span className="material-icons">PREV</span>
        </button>
        <button onClick={() => setMoveClass('prev')} className="next cardBtn">
          <span className="material-icons">NEXT</span>
        </button>
      </div>
    </div>
  );
};
export default CardCarousel;

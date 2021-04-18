import shecode from "../assets/s1.png"
import jenkinsgsoc from "../assets/s2.png"
import jenkinsistheway from "../assets/s3.png"
import cdCon2021 from "../assets/s4.png"
import jenkinsneedyou from "../assets/s5.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
{
    src: shecode,
    altText: 'Slide 1',
},
{
    src: jenkinsgsoc,
    altText: 'Slide 2',
    caption: 'Slide 2'
},
{
    src: jenkinsistheway,
    altText: 'Slide 3',
    caption: 'Slide 3'
},
{
    src: cdCon2021,
    altText: 'Slide 4',
},
{
    src: jenkinsneedyou,
    altText: 'Slide 5',
    caption: 'Slide 5'
}
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={item.src} alt={item.altText} className="text-success" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;
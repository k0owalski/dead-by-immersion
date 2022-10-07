import { useState, useEffect } from "react";

import Slide from "components/molecules/Slide/Slide";

import StyledProjectBanner from "./StyledProjectBanner";

function ProjectBanner() {
  const [timeoutID, setTimeoutID] = useState(null);
  const [slides, setSlides] = useState([
    {
      id: 0,
      opacity: 0,
      title: 'When the sun goes down',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec diam gravida euismod orci. Nunc enim et, semper magna senectus tellus.',
      image: 'when-the-sun-goes-down.png',
    },
    {
      id: 1,
      opacity: 1,
      title: 'Empty hearts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac turpis placerat, facilisis tellus auctor, accumsan dui. Nam rhoncus sed est eu vulputate.',
      image: 'empty-hearts.png',
    },
  ]);

  useEffect(() => {
    if (timeoutID) clearTimeout(timeoutID);

    setTimeoutID(setTimeout(() => {
      setSlides(prev => prev.map(slide => ({ ...slide, opacity: slide.opacity === 0 ? slides.length - 1 : slide.opacity - 1 })));
    }, 9600));
  }, [slides]);

  return (
    <StyledProjectBanner>
      {
        slides.map(slide => (
          <Slide slide={slide} key={slide.id} />
        ))
      }
    </StyledProjectBanner>
  );
}

export default ProjectBanner;

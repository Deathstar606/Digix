import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Example from './Navbar';
import HeroSec from './HeroSec';
import LineAnimation from './About';
import Show from './Test';

const Para = () => {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer
            sticky={{start:0, end:1}}>
                <Example/>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          offset={0}
          style={{
            backgroundSize: 'cover',
            backgroundColor: "black",
          }}
        >
          <HeroSec/>
        </ParallaxLayer>
        <ParallaxLayer
            offset={1}>
          <Show/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Para;
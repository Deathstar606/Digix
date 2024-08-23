import React, { Component } from 'react';
//import Para from './ParaView';
//import LineAnimation from './About';
import Example from './Navbar';
import HeroSec from './HeroSec';
import Show from './Test';
import AboutUs from './AboutUs';
import People from './Team';
import Service from './Services'
import Icon from './Contact';
import Typewriter from './TextAnimate';

class Main extends Component {
  constructor(props) {
    super(props);

  }

  render() {
  
  return (
      <>
        <Example/>
        <HeroSec/>
        <Show/>
        <Service/>
{/*         <Show/>
        
        <Icon/>
        <Show/>
        <Service/>
        <Icon/> */}
      </>
  );
}
} //selected dish is dick
export default Main;
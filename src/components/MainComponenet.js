import React from 'react';
import Example from './Navbar';
import HeroSec from './HeroSec';
import Show from './Test';
import Leaders from './LeaderShip';
import Service from './Services';
import ShowBrand from './Brands';
import Footer from './Footer';
//import Leaders from './LeaderShip';

const Main = () => {
  return (
    <>
      <Example />
      <HeroSec />
      <Show />
      <Leaders />
      <Service />
      <ShowBrand/>
      <Footer/>
      {/* <Leaders /> */}
      {/* Uncomment the lines below if needed */}
      {/* <Show /> */}
      {/* <Icon /> */}
      {/* <Service /> */}
      {/* <Icon /> */}
    </>
  );
};

export default Main;
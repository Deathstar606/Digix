import React, { useEffect } from 'react';
import Example from './Navbar';
import HeroSec from './HeroSec';
import Show from './Test';
import Case from './CaseStudies';
import Leaders from './LeaderShip';
import Service from './Services';
import ShowBrand from './Brands';
import Footer from './Footer';
import CaseDeats from './CaseDetails';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { connect } from 'react-redux';
import { fetchCases } from '../redux/ActionCreator';

const mapStateToProps = state => {
  return {
    cases: state.cases,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCases: () => dispatch(fetchCases()),
})

const Home = (ct) => {
  return (
    <>
      <HeroSec />
      <Show />
      <Leaders />
      <Case casefile={ct}/>
      <Service />
      <ShowBrand/>
    </>
  )
}

const CaseId = (props) => {
  const { Id } = useParams();
  const deats = props.cases.case.find(c => c.id === Number(Id)) ?? null; 
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CaseDeats
      case={deats}
    />
  );
};

const Main = (props) => {
  const location = useLocation();

  useEffect(() => {
    props.fetchCases();
  }, []);

  return (
    <div>
      <Example />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/home" element={<Home ct={props.cases.case}/>} />
          <Route path="/home/:Id" element={<CaseId {...props} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </AnimatePresence>
      <Footer/>
      {/* <Leaders /> */}
      {/* Uncomment the lines below if needed */}
      {/* <Show /> */}
      {/* <Icon /> */}
      {/* <Service /> */}
      {/* <Icon /> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

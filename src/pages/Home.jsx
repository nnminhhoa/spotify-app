import React from 'react';
import { LeftMenu } from '../components/LeftMenu';
import { MainContainer } from '../components/MainContainer';
import { RightMenu } from '../components/RightMenu';

const Home = () => {
  return (
    <>
      <LeftMenu />
      <MainContainer />
      <RightMenu />
      <div className="background"></div>
    </>
  );
};

export default Home;

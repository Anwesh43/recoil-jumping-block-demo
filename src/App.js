import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDimension} from './hook'
import JumpingBlock from './JumpingBlock'
import {RecoilRoot} from 'recoil'
import FadingInBlock from './FadingInBlock'
function App() {
  const {w, h} = useDimension()
  return (
    <RecoilRoot>
        <JumpingBlock w = {w} h = {h}/>
        <FadingInBlock w = {w} h = {h}/>
    </RecoilRoot>
  );
}

export default App;

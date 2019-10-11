import React, {useEffect, useState} from "react";
import axios from 'axios';
import styled from 'styled-components';
import Title from './components/Title';
import Img from './components/Img';
import Info from './components/Info';

import Date from './components/Date';


const WrapperDiv = styled.div`
  text-align: center;
  `;

const HeaderDiv = styled.div`
display: flex;
max-width: 100%;
justify-content: center;
`;

function App() {

  const [NasaImg, setNasaImg] = useState();
  const [NasaTitle, setNasaTitle] = useState();
  const [NasaInfo, setNasaInfo] = useState();
  const [NasaDate, setNasaDate] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=AihqFJc1iiZypubOyqpbR2aLyhMXoFMMjpPQ588b')
      .then( res => {
        setNasaImg(res.data.url);
        setNasaTitle(res.data.title);
        setNasaInfo(res.data.explanation);
        setNasaDate(res.data.date)
      });
  }, []);

  return (
    <WrapperDiv>
      <HeaderDiv>
         <Title title={NasaTitle} />
      </HeaderDiv>
      <Img src={NasaImg} />
      <Date date={NasaDate} />
      <Info info={NasaInfo}/>
      </WrapperDiv>
  );
}

export default App;
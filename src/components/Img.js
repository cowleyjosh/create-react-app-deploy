import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
    width: 40%;
    margin: 0 auto;
`;

export default function Img(props) {
    if (!props.src) return <h3>Loading...</h3>;

    return <Photo src={props.src} alt=""/>
}  
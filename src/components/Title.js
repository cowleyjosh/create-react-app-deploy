import React from 'react';
import styled from 'styled-components';

const TitleHeader = styled.h1`
    margin-bottom: 5%;
`;

export default function Title(props) {
    return <TitleHeader> {props.title} </TitleHeader>
}  
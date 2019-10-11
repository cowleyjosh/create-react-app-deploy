import React from 'react'
import styled from 'styled-components';

const ParaInfo = styled.p`
    width: 75%;
    margin: 3% auto;
    text-align: center;
`;
export default function Info(props) {
    return <ParaInfo> {props.info} </ParaInfo>
}  
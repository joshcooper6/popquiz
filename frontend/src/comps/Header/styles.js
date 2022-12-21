import styled from "styled-components";

export const Container = styled.div`
    height: 80px; 
    background-color: rgba(255, 255, 255, .6);
    width: 100vw;
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 .1em rgba(0, 0, 0, .4);
`;

export const Wrap = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

export const SelectArtist = styled.select`

`;

export const Logo = styled.h1`
    margin: 0;
    font-family: 'Unbounded', sans-serif;
    text-transform: uppercase;
    letter-spacing: -.05em;
    color: black;

    span {
        text-transform: lowercase;
    }
`;
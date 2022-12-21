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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 1em;
    border: 0;
    width: 20%;
    min-width: 150px;
    padding: 1em;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right .7em center;
    background-size: auto 2em;
    position: relative;
  
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 4em;
      pointer-events: none;
    }
`;

export const Logo = styled.h1`
    margin: 0;
    font-family: 'Unbounded', sans-serif;
    text-transform: uppercase;
    letter-spacing: -.05em;
    color: black;
    user-select: none;

    span {
        text-transform: lowercase;
    }
`;
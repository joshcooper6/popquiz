import styled, { keyframes } from 'styled-components';

export const FadeIn = keyframes`
  from { opacity: 0 } to { opacity: 1 }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: url(${props => props.bg});
  background-size: cover;
  background-color: lightslategrey;
  background-position: center;
  filter: blur(1em);
  -webkit-filter: blur(1em);
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  scale: 1.1;
`

export const ButtonImg = styled.div`
    background: url(${props => props.imgSrc});
    background-size: cover;
    background-position: center;
    height: 70px;
    width: 70px;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1em;
    // opacity: ${props => props.showProceed ? 0.5 : 1};
    z-index: 0;
    border: 0;
`

export const Button = styled.button`
  display: ${props => props.showProceed ? 'block' : 'none'};  
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 100%;
  opacity: ${props => props.showProceed ? '1' : '0'};
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  cursor: pointer;
  background-blend-mode: multiply;
  font-weight: 800;
  transition: 1s ease;
  font-size: 2em;
  margin: 0;
  animation: ${FadeIn} 500ms linear forwards;
`
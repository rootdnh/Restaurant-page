import styled from "styled-components";
import bg_slider_1 from "../../assets/slider-1.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white-color);
  height: 130vh;
  .bgDefaultColor {
    background-color: var(--bg-default-color);
  }
 
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bg_slider_1});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 800px;
  width: 100%;
  position: absolute;
  
  .topHeader {
    color: var(--main-color);
    padding-bottom: 20px;
    margin-top: 100px;
  }

  h1 {
    font-size: 4em;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .subHeader {
    font-weight: 400;
    font-size: 1.2em;
    padding-top: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const ButtonBanner = styled.button`
  background-color: transparent;
  padding: 20px 45px;
  margin-top: 50px;
  border: 2px solid var(--main-color);
  color: var(--main-color);

  &:hover {
    background-color: var(--main-color);
    color: var(--bg-default-color)
  }
  
  
`;


export const SectionOne = styled.section`
  height: 100vh;
  color: white;
  z-index: 11;
  display: flex;
 
  

`;
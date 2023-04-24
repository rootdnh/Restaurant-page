import styled from "styled-components";
import bg_slider_1 from "../../assets/slider-1.jpg";
import thirdImage from "../../assets/third-image.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white-color);
  height: 130vh;

  .bgDefaultColor {
    background-color: var(--bg-default-color);
  }
`;
export const TopHeader = styled.span`
  color: var(--main-color);
  padding-bottom: ${(props) => props.bottom};
  margin-top: ${(props) => props.top};
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

  h1 {
    font-size: 4em;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .subHeader {
    font-weight: 400;
    font-size: 1.2em;
    padding-top: 30px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const ButtonBanner = styled.button`
  background-color: transparent;
  padding: 20px 45px;
  margin-top: ${(props) => props.marginTop};
  border: 2px solid var(--main-color);
  color: var(--main-color);

  &:hover {
    background-color: var(--main-color);
    color: var(--bg-default-color);
  }
`;

export const SectionOne = styled.section`
  color: white;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 130vh;

  img {
    width: 290px;
    z-index: 6;
  }

  h1 {
    font-size: 40px;
    padding-bottom: 20px;
  }
  p {
    text-align: center;
    padding-bottom: 50px;
    line-height: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .right-top-bg {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
  }

  .right-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 5;
    width: 246px;
    height: 412px;
  }
  
`;

export const SectionTwo = styled.section`
  background-color: var(--bg-third-color);
  color: var(--white-color);
  padding-bottom: 100px;

  .boxSecondSection {
    display: flex;
    justify-content: space-around;
  }

  .textClass {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    line-height: 35px;
    text-align: center;
  }
  h1 {
    padding-bottom: 35px;
    font-size: 50px;
    font-weight: 100;
    line-height: 60px;
  }

  img {
    padding-top: 35px;
  }
  .secondImagesClass {
    position: relative;
  }
  #bottom {
    position: absolute;
    left: -100px;
    bottom: 50px;
  }
`;

export const SectionThird = styled.section`
  background: var(--bg-second-color);
  display: flex;
  background-image: url(${thirdImage});
  background-repeat: no-repeat;
  background-position: -100px;
  height: 100vh;
  position: relative;

  .BgThirdText {
    position: absolute;
    background-color: var(--bg-second-color);
    min-width: 50%;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    color: var(--white-color);
  }
  .inside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  p {
    max-width: 450px;
    line-height: 30px;
  }
`;

export const SectionFour = styled.section`
  background-color: var(--bg-third-color);
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

`;


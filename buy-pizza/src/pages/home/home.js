import { Header } from "../../components/header/header";
import {
 Container,
 Banner,
 ButtonBanner,
 SectionOne,
 SectionTwo,
 TopHeader,
 SectionThird,
 SectionFour,
} from "./styles";
import aperitivos from "../../assets/aperitivos.jpg";
import drinks from "../../assets/drinks.jpg";
import cafeDaManha from "../../assets/cafe-da-manha.jpg";
import bgSectionOneTop from "../../assets/bg-section-one-top.png";
import bgSectionOne from "../../assets/bg-section-one.png";
import imageSectionTwo from "../../assets/image-1.661483ecb5620eb91605.jpg";
import imageSectionTwoBottom from "../../assets/image-2.1561d09bd2af250694ab.jpg";
import { TabList } from "../../components/tab-list/TabList";

const svgDecalc = (
 <svg width={100} height={50}>
  <rect
   x="31.6"
   y="3"
   transform="matrix(0.7071 0.7071 -0.7071 0.7071 14.7528 -22.8645)"
   fill="none"
   stroke="#E3C48E"
   stroke-width="0.75"
   stroke-miterlimit="10"
   width="6.8"
   height="6.8"
  />
  <rect
   x="58.7"
   y="3"
   transform="matrix(0.7071 0.7071 -0.7071 0.7071 22.699 -42.0484)"
   fill="none"
   stroke="#E3C48E"
   stroke-width="0.75"
   stroke-miterlimit="10"
   width="6.8"
   height="6.8"
  />
  <polygon
   fill="none"
   stroke="#E3C48E"
   stroke-width="0.75"
   stroke-miterlimit="10"
   points="48.6,12.1 39.8,6.4 48.6,0.6 57.3,6.4   "
  />
  <line
   fill="none"
   stroke="#E3C48E"
   stroke-width="0.75"
   stroke-miterlimit="10"
   x1="3.2"
   y1="6.4"
   x2="30.2"
   y2="6.4"
  />
  <circle fill="#E3C48E" cx="2.6" cy="6.4" r="2.5" />
  <line
   fill="none"
   stroke="#E3C48E"
   stroke-width="0.75"
   stroke-miterlimit="10"
   x1="93.9"
   y1="6.4"
   x2="66.9"
   y2="6.4"
  />
  <circle fill="#E3C48E" cx="94.4" cy="6.4" r="2.5" />
 </svg>
);

const Home = () => {
 return (
  <>
   <Container>
    <Header />
    <Banner>
     <TopHeader top="100px" bottom="20px">
      EXPERIÊNCIA DELICIOSA
     </TopHeader>
     {svgDecalc}
     <h1>Sabores inspirados</h1>
     <h1>nas estações</h1>

     <span className="subHeader">
      Venha com a família e sinta a alegria de uma comida de dar água na boca
     </span>

     <ButtonBanner marginTop="50px">VEJA NOSSO MENU</ButtonBanner>
    </Banner>
   </Container>

   <SectionOne>
    <img className="right-top-bg" src={bgSectionOneTop} />
    <img src={cafeDaManha} height="400px" />
    <div>
     <TopHeader top="0px" bottom="20px">
      SABORES DE REALEZA
     </TopHeader>
     {svgDecalc}
     <h1>Apenas o topo de linha</h1>
     <p>
      Lorem Ipsum is simply dummy text of the printing and <br />
      typesetting industry lorem Ipsum has been the industrys
      <br /> standard dummy text ever.
     </p>
     <img src={aperitivos} height="400px" alt="imagem sobre alimento" />
    </div>
    <img src={drinks} height="400px" alt="imagem sobre alimento" />
    <img className="right-bg" src={bgSectionOne} alt="imagem sobre alimento" />
   </SectionOne>

   <SectionTwo>
    <div className="boxSecondSection">
     <div className="textClass">
      <TopHeader top="100px" bottom="20px">
       Nossa História
      </TopHeader>
      {svgDecalc}
      <h1>Cada sabor conta uma história</h1>
      <p>
       Lorem Ipsum is simply dummy text of the printingand typesetting industry
       lorem Ipsum has been the industrys standard dummy text ever since the
       when an unknown printer took a galley of type and scrambled it to make a
       type specimen book It has survived not only five centuries, but also the
       leap into.
      </p>
      <h3 style={{ marginTop: 20 + "px", marginBottom: -10 + "px" }}>
       Ligue-nos
      </h3>
      <TopHeader top="0px" bottom="0px">
       (47) 9-9999-9999
      </TopHeader>
      <ButtonBanner marginTop="20px">SAIBA MAIS</ButtonBanner>
     </div>

     <div className="secondImagesClass">
      <img
       src={imageSectionTwo}
       height="580px"
       alt="imagem sobre restaurante"
      />
      <img
       id="bottom"
       src={imageSectionTwoBottom}
       height="300px"
       alt="imagem sobre restaurante"
      />
     </div>
    </div>
   </SectionTwo>

   <SectionThird>
    <div className="BgThirdText">
     <div className="inside">
      <TopHeader top="0px" bottom="20px">
       PRATO ESPECIAL
      </TopHeader>
      {svgDecalc}
      <h1 style={{ marginBottom: 20 + "px" }}>Lobster Tortellini</h1>
      <p>
       Lorem Ipsum is simply dummy text of the printingand typesetting industry
       lorem Ipsum has been the industrys standard dummy text ever since the
       when an unknown printer took a galley of type.
      </p>
      <ButtonBanner marginTop="40px">VEJA TODO MENU</ButtonBanner>
     </div>
    </div>
   </SectionThird>

   <SectionFour>
    <TopHeader top="0px" bottom="0px">
     SELEÇÃO ESPECIAL
    </TopHeader>
    <div>{svgDecalc}</div>

    <h1>Menu Delicioso</h1>

    <TabList>

    </TabList>

   </SectionFour>
  </>
 );
};

export default Home;

import { Header } from "../../components/header/header";
import { 
  Container,
  Banner,
  ButtonBanner,
  SectionOne
} from "./styles";
import aperitivos from "../../assets/aperitivos.jpg";
import drinks from "../../assets/drinks.jpg";
import cafeDaManha from "../../assets/cafe-da-manha.jpg";

const Home = () => {
  return (
    <div>
    <Container>
      <Header />
      <Banner>
        <span className="topHeader">EXPERIÊNCIA DELICIOSA</span>
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
        <h1>Sabores inspirados</h1>
        <h1>nas estações</h1>

        <span className="subHeader">
          Venha com a família e sinta a alegria de uma comida de dar água na
          boca
        </span>

        <ButtonBanner>
          VEJA NOSSO MENU
        </ButtonBanner>
      </Banner>
    </Container>
   
      <SectionOne  >
        <img src={cafeDaManha} height="400px"/>
        <div>
          <h1>We Offer Top Notch</h1>
        <img src={aperitivos} height="400px"/>
        </div>
        <img src={drinks} height="400px"/>
      </SectionOne>
    
    </div>



  );
};

export default Home;

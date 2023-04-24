import { 
  Container,
  TopBarHeader,
  BottomBarHeader,
  MenuHamburger,
  CallContact,
  BurgerButton
} from "./styles";

import {
  TfiLocationPin,
  TfiTime,
  TfiHeadphoneAlt,
  TfiEmail
} from "react-icons/tfi";
import logo from "../../assets/logo.png"

export const Header = () => {
    return (
      <Container>
        <TopBarHeader>
        <div>
            <TfiLocationPin/>
            <span>Restaurante, São Bento do Sul, SC</span>
            <TfiTime/>
            <span>Horário : 8.00 ás 22.00</span>
        </div>

        <div>
            <TfiHeadphoneAlt/>
            <span>(47) 9.9999-9999</span>
            <TfiEmail/>
            <span>seumail@gmail.com</span>
        </div>
        </TopBarHeader>
  
        <BottomBarHeader>
          <div className="main-header"> 
          <MenuHamburger>
            <BurgerButton>
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
            </BurgerButton>

          </MenuHamburger>


          <img alt="logo" src={logo}/>
          
          <CallContact>CONTATO</CallContact>

          </div>
        </BottomBarHeader>
        
      </Container>
    )
}


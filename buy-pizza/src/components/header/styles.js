import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 9;
  color: var(--white-color);
  width: 100%;
 
  
`;

export const TopBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
    font-size: 0.9em;
    div {
      display: flex;
      justify-content: center;
    }
    span {
      padding: 0px 10px 0px 5px;
    }
`;

export const BottomBarHeader = styled.div`
  
  
  .main-header {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px 10px 50px;
  }

  img {
    //apenas para controlar a disparidade de tamanho dos outros componentes inline
    margin-left: 60px;
  }

  &:before {
    content: "";
    position: absolute;
    background-color: var(--white-color-opacity);
    width: 100%;
    height: 1px;
    
  }
`;

export const MenuHamburger = styled.div`
  
  
`;

export const CallContact = styled.button`
  width: 150px;
  background-color: var(--main-color);
  border: none;
  color: var(--bg-default-color);
  transition: 0.5s;
  border: 2px solid var(--main-color);

  &:hover {
    background-color: rgba(0,0,0,0.5);
    color: var(--white-color);
    transition: 0.5s;
  }
`;

export const BurgerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 20px;
  gap: 5px;

  .first {
    display: block;
    background-color: var(--white-color);
    height: 2px;
    width: 100%;
  }

  .second {
    display: block;
    background-color: var(--white-color);
    height: 2px;
    width: 80%;
  }

  .third {
    display: block;
    background-color: var(--white-color);
    height: 2px;
    width: 100%;
  }
  
`;




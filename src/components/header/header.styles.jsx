import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
   

    
  @media screen and (max-width: 800px) {
    height: 60px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    margin: -1px;
 
  }

    
 
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    
    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }

`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
    }

 
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    // margin-bottom: 10px;

    

   ::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #FF030D;
        transition: width .3s;
   }

   :hover::after {
     width: 100%;
   }

   :focus {
        color:red;
    }

    @media screen and (max-width: 800px) {
        font-size: 18px;
        padding: 12px;
    }
   

`


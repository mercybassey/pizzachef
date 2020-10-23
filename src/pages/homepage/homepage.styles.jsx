import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    @media screen and (max-width: 800px) {
       margin: -15px;
      margin-top: 7px;
    }
    @media screen and (max-width: 375px) {
        margin: -35px;
      margin-top: 7px;
     }
` 
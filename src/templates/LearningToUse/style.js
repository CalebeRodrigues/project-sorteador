import styled from 'styled-components';

export const InstructionsLearning = styled.div`
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 426px) {
    margin-top: 10px;
  }
`;

export const TitleLearning = styled.p`
  font-size: 26px;
  font-weight: 540;
  padding-bottom: 5px;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;

  @media screen and (max-width: 426px) {
    font-size: 22px;
  }
`;

export const TextLearning = styled.p`
  font-size: 20px;
  padding: 10px 5px;
  color: #3c3c3c;
  width: 100%;

  border-bottom: 1px solid #c8c8c8;
  @media screen and (max-width: 426px) {
    padding: 5px;
    font-size: 19px;
  }
`;

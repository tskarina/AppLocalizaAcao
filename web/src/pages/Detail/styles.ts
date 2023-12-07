import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(219, 221, 221, 0.33);
  height: 100vh;
`;
export const DetailContainer = styled.div`
  background-color: white;
  text-align: center;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 736px;
  height: 669px;
`;
export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 36% 36% 36%;
  margin-top: 30px;
  margin-right: 114px;
  margin-left: 60px;
  text-align: left;
`;

export const DetailTitle = styled.h2`
  color: #2192ab;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  margin-top: 94px;
  margin-left: 64px;
  text-align: left;
`;

export const DetailSubTitle = styled.p`
  color: #616161;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 64px;
  margin-top: 40px;
  text-align: left;
`;

export const Span = styled.div`
  color: #3f3f3f;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
`;

export const DetailField = styled.p`
  color: #616161;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 57px;
  margin-left: 5px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -2px;
`;

export const CheckboxInput = styled.input`
  width: 22px;
  height: 22px;
  border: 1px solid #2192ab;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 65px;
  margin-right: 12px;
`;

export const CheckboxText = styled.span`
  color: #616161;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 110px;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  margin-left: 530px;
`;

export const Button = styled.button`
  width: 186px;
  height: 56px;
  background: #2192ab;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
`;

export const BackButtonImage = styled.img`
  width: 12px;
  height: 24px;
  right: 30px;
  margin-bottom: -100px;
  margin-right: 684px;
`;

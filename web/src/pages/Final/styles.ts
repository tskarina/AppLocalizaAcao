import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(219, 221, 221, 0.33);
  height: 100vh;
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

export const FinalContainer = styled.div`
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

export const ImageConfirm = styled.img`
  width: 63px;
  height: 63px;
  margin-bottom: -265px;
  margin-right: 650px;
`;

export const FinalTitle = styled.h2`
  color: #2192ab;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  margin-top: 104px;
  margin-left: 90px;
  text-align: left;
`;

export const Text = styled.p`
  color: #616161;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  padding: 0px 60px 0px 65px;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  margin-left: 455px;
`;

export const Button = styled.button`
  width: 186px;
  height: 56px;
  margin-top: 20px;
  background: #2192ab;
  border-radius: 8px;
  border: none;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
`;

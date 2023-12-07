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
  margin-bottom: -100px;
  margin-right: 684px;
`;

export const RegisterContainer = styled.div`
  background-color: white;
  text-align: center;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 736px;
  height: 820px;
`;

export const RegisterTitle = styled.h2`
  color: #2192ab;
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px;
  margin-top: 104px;
  margin-left: 54px;
  text-align: left;
`;

export const RegisterSubTitle = styled.p`
  color: #616161;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 54px;
  margin-top: 40px;
  margin-bottom: 32px;
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

export const ButtonContainer = styled.div`
  margin-top: 40px;
  margin-left: 507px;
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

export const InputText = styled.div`
  color: #616161;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-left: 54px;
  margin-top: 32px;
`;

export const InputPassword = styled.input`
  width: 292px;
  height: 56px;
  margin-right: 330px;
  margin-top: 8px;
  border: none;
  background: rgba(219, 221, 221, 0.33);
  font-size: 20px;
`;

export const ErrorMsg = styled.div`
  color: #616161;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-left: 55px;
  margin-top: 10px;
`;

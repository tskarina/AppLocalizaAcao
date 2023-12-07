import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url('./home-background.svg') no-repeat 1034px bottom,
    linear-gradient(to bottom, ${props => props.theme.gradient});
  background-size: 970px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  max-width: 500px;
  font-size: 96px;
  font-family: 'Ubuntu';
  font-weight: 500;
  margin-left: 20px;
  margin-bottom: 0px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;

  span {
    color: #616161;
  }

  span.action {
    color: #128aa5; /* Cor para "Ação" */
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;
  text-align: left;
  line-height: 38px;
  max-width: 580px;
  padding-bottom: 16px;
  word-wrap: break-word;
`;

export const SecondSubtitle = styled.p`
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  word-wrap: break-word;
  margin-top: 0px;
  margin-right: 355px;
  color: #ffb145;
  a {
    color: #ffb145;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  width: 350px;
  border: none;
  border-radius: 5px;
  padding: 22px;
  margin-top: 60px;
  margin-right: 230px;
  font-weight: 700;
  &:hover {
    filter: opacity(0.9);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img.attrs(() => ({
  src: 'logo.svg',
}))`
  width: 86px;
  height: 144px;
  margin-left: 12px;
  margin-top: -60px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: end;
  gap: 20px;
  align-items: center;
`;

export const FotosContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Foto1 = styled.img.attrs(() => ({
  src: 'foto1.svg',
}))`
  width: 612px;
  height: 400px;
  margin-left: 120px;
`;

export const Foto2 = styled.img.attrs(() => ({
  src: 'foto2.svg',
}))`
  width: 448px;
  height: 299px;
`;

export const Foto3 = styled.img.attrs(() => ({
  src: 'foto3.svg',
}))`
  width: 286px;
  height: 213px;
  margin-right: 0px;
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 5%;
  right: 2%;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #128aa5;
  font-size: 16px;
  font-weight: 64px;

  span {
    color: #ffb145;
    padding: 7px;
  }
`;

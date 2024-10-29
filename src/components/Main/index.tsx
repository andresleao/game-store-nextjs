import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Imagem de um desenvolvedor de frente para a tela de um computador"
      />
      <h1>React Avançado</h1>
    </S.Wrapper>
  );
};

export default Main;

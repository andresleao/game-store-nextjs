import Heading from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Heading />', () => {
  it('Deve renderizar a logo branca', () => {
    const { getByRole } = renderWithTheme(<Heading>Won Games</Heading>);

    expect(getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  });

  it('Deve renderizar a cor preta', () => {
    const { getByRole } = renderWithTheme(<Heading color='black'>Won Games</Heading>);

    expect(getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  });

  it('Deve renderizar a linha no lado esquerdo', () => {
    const { getByRole } = renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  });

  it('Deve renderizar a linha no fundo do título', () => {
    const { getByRole } = renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    );
  });
});

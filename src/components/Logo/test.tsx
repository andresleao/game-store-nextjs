import { screen } from '@testing-library/react';
import Logo from '.';
import { renderWithTheme } from '@/utils/tests/helpers';
import 'jest-styled-components';

describe('<Logo />', () => {
  it('Deve renderizar a logo branca', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  });

  it('Deve renderizar a logo do tamanho grande', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  });

  it('Deve renderizar a logo do tamanho normal', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  });

  // it('Deve renderizar a logo sem o texto em mobile', () => {
  //   const { container } = renderWithTheme(<Logo hideOnMobile />);

  //   expect(container.firstChild).toHaveStyleRule('width', '5.8rem', {
  //     media: '(max-width: 798px)'
  //   });
  // });
});

import { render } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('Deve renderizar o heading', () => {
    // Renderiza o componente
    const { container, getByRole } = render(<Main />);

    // Busca o elemento e verifica a existência
    expect(
      getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar a cor corretamente', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({'background-color': '#06092b'});
  });
});

import Main from '.';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('<Main />', () => {
  it('Deve renderizar o heading', () => {
    // Renderiza o componente
    //const { container, getByRole } = render(<Main />);
    const { container, getAllByRole } = renderWithTheme(<Main />);

    // Busca o elemento e verifica a existência
    expect(getAllByRole('heading', { name: /react avançado/i })[0]).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Deve renderizar a cor corretamente', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({'background-color': '#06092b'});
  });
});

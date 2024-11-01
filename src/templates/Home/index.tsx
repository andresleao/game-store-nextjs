import Menu from '@/components/Menu';
import { Container } from '@/components/Container';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';

export type HomeProps = {
    data :{
      heading: string;
    }
}

async function getData(): Promise<HomeProps> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            heading: 'Simulated Heading',
          },
        });
      }, 1000);
    });
}

export default async function HomePage() {
    const { data } = await getData();

    return(
        <section>
            <Container>
                <Menu />
            </Container>
            <Container>
                <Heading
                    lineLeft
                    lineColor='secondary'
                    color='black'
                >
                    {data.heading}
                </Heading>
            </Container>
            <Container>
                <Heading
                    lineLeft
                    lineColor='secondary'
                >
                    Most Popular
                </Heading>
            </Container>
            <Container>
                <Heading
                    lineLeft
                    lineColor='secondary'
                >
                    Upcomming
                </Heading>
            </Container>
            <Container>
                <Heading
                    lineLeft
                    lineColor='secondary'
                >
                    Free Games
                </Heading>
            </Container>
            <Container>
                <Footer />
            </Container>
        </section>
    );
};

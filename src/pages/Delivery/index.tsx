import { Container } from '../../components/Container';
import { DeliveryOptions } from '../../components/DeliveryOptions';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { PageTitle } from '../../components/PageTitle';
import { Wrapper } from '../../components/Wrapper';
import { DescriptionStyles } from './styles';

export const Delivery: React.FC = () => {
    return (
        <Wrapper>
            <Header />
            <Main>
                <Container>
                    <PageTitle title="Delivery" url="/" />
                    <DescriptionStyles>
                        Selecione o tipo de estabelecimento:
                    </DescriptionStyles>
                    <DeliveryOptions description="Bares e restaurantes" />
                    <DeliveryOptions description="Comércio local" />
                </Container>
            </Main>
            <Footer />
        </Wrapper>
    );
};

/* eslint-disable react/no-danger */
import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { PageTitle } from '../../components/PageTitle';
import { UnitaryIsLoading } from '../../components/UnitaryIsLoading';
import { useAbout } from '../../hooks/AboutProvider';
import { Banner, MainStyles } from './styles';

export const About: React.FC = () => {
    const { about, isLoading, getAbout } = useAbout();
    useEffect(() => {
        getAbout();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <Main>
                <Container>
                    <div className="container pb-4">
                        <MainStyles className="fs-md text-justify p-4 p-md-5">
                            {isLoading && <UnitaryIsLoading />}
                            {!isLoading && (
                                <>
                                    <PageTitle title="Conheça Maricá" url="/" />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: about,
                                        }}
                                    />
                                </>
                            )}
                        </MainStyles>
                    </div>
                </Container>
            </Main>
            <Footer />
        </>
    );
};
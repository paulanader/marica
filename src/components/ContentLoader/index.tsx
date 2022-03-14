import ContentLoader from 'react-content-loader';
import { TailSpin } from 'react-loader-spinner';
import { IsLoadingCarousel } from '../Carousel/styles';
import { Main } from '../Main';
import { PillLoader } from '../PillLoader';

export const LoadingContent: React.FC = () => (
    <>
        <IsLoadingCarousel className="d-flex justify-content-center align-items-center w-100">
            <TailSpin ariaLabel="loading-indicator" color="#6c757d" />
        </IsLoadingCarousel>
        <Main>
            <div className="container">
                <div className="row row-cols-2">
                    <div className="col-lg-8">
                        <ContentLoader
                            speed={2}
                            width={1200}
                            height={200}
                            viewBox="0 0 1200 200"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect
                                x="25"
                                y="114"
                                rx="24"
                                ry="24"
                                width="458"
                                height="64"
                            />
                            <rect
                                x="26"
                                y="72"
                                rx="11"
                                ry="11"
                                width="238"
                                height="26"
                            />
                        </ContentLoader>
                        <div className="mb-4 mb-md-5">
                            <PillLoader />
                            <ContentLoader
                                speed={2}
                                width={1200}
                                height={200}
                                viewBox="0 0 1200 200"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect
                                    x="25"
                                    y="-1"
                                    rx="0"
                                    ry="0"
                                    width="458"
                                    height="216"
                                />
                            </ContentLoader>
                        </div>

                        <ContentLoader
                            speed={2}
                            width="100%"
                            height="100%"
                            viewBox="0 0 600 500"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect
                                x="3"
                                y="12"
                                rx="4"
                                ry="4"
                                width="500"
                                height="100"
                            />
                        </ContentLoader>
                        <div className="col-lg-4 mb-5">
                            <ContentLoader
                                speed={2}
                                width={1200}
                                height={200}
                                viewBox="0 0 1200 200"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect
                                    x="25"
                                    y="-1"
                                    rx="0"
                                    ry="0"
                                    width="458"
                                    height="216"
                                />
                            </ContentLoader>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    </>
);

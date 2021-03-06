import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useBanners } from '../../hooks/BannersProvider';
import { IsLoadingCarousel } from './styles';

export const Carousel: React.FC = () => {
    const { banners, isLoading, getBanners } = useBanners();

    useEffect(() => {
        getBanners();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                {isLoading && (
                    <IsLoadingCarousel className="d-flex justify-content-center align-items-center w-100">
                        <TailSpin
                            ariaLabel="loading-indicator"
                            color="#6c757d"
                        />
                    </IsLoadingCarousel>
                )}
                {!isLoading &&
                    banners.map((banner, index) => (
                        <div
                            key={banner.id}
                            className={`carousel-item ${
                                index === 0 ? 'active' : ''
                            }`}
                        >
                            <img
                                src={banner.image_l}
                                className="d-block w-100"
                                alt="Carrousel"
                            />
                        </div>
                    ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

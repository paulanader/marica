import Slider from 'react-slick';
import { ImageType } from '../../@types/ImageType';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Cover, Main, StyleSlider } from './styles';

const responsive = [
    {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        },
    },
    {
        breakpoint: 750,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
        },
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
];

interface IEventSliderImageProps {
    images: ImageType[];
}

export const EventSlider: React.FC<IEventSliderImageProps> = ({ images }) => {
    return (
        <Main>
            <div className="slick-slider slick-initialized">
                <div className="slick-list">
                    <StyleSlider className="slick-track">
                        {images.length > 3 ? (
                            <Slider
                                className="mb-4 slick-track"
                                dots
                                infinite
                                speed={500}
                                autoplay
                                autoplaySpeed={3000}
                                slidesToShow={4}
                                slidesToScroll={2}
                                initialSlide={0}
                                responsive={responsive}
                                pauseOnHover
                            >
                                {images.map(img => (
                                    <div key={img.id}>
                                        <Cover
                                            style={{
                                                backgroundImage: `url(${img.src})`,
                                            }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <div className="d-flex">
                                {images.map(img => (
                                    <div
                                        key={img.id}
                                        className="flex-grow-1 align-self-stretch mb-4"
                                    >
                                        <Cover
                                            style={{
                                                backgroundImage: `url(${img.src})`,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </StyleSlider>
                </div>
            </div>
        </Main>
    );
};

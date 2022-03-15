/* eslint-disable @typescript-eslint/no-loss-of-precision */
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { ImLocation } from 'react-icons/im';
import { CategoryType } from '../../@types/CategoryType';
import { EventType } from '../../@types/EventType';
import { EventCard } from '../EventCard';
import { PageTitle } from '../PageTitle';
import {
    WrapperMarker,
    StylesMarker,
    CardStyles,
    PageTitleStyles,
} from './styles';

interface IMarkerProps {
    lat: number;
    lng: number;
    item: EventType;
    showCard: boolean;
    onPinClick: () => void;
}

export const Marker: React.FC<IMarkerProps> = ({
    item,
    showCard,
    onPinClick,
}) => {
    return (
        <WrapperMarker>
            {showCard && (
                <CardStyles>
                    <EventCard item={item} />
                </CardStyles>
            )}
            <StylesMarker type="button" onClick={onPinClick}>
                <ImLocation color="red" className="fs-2" />
            </StylesMarker>
        </WrapperMarker>
    );
};

interface ILocationInBigMapProps {
    items: EventType[];
    title: string;
    url: string;
    _setCategory: (category: CategoryType) => void;
}

export const EventBigMap: React.FC<ILocationInBigMapProps> = ({
    items,
    title,
    url,
}) => {
    const [activeAddress, setActiveAddress] = useState<number | null>(null);

    return (
        <div>
            <PageTitleStyles className="align-items-center">
                <PageTitle title2={title} url={url} />
            </PageTitleStyles>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: `${process.env.REACT_APP_GOOGLE_KEY}`,
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    defaultZoom={13}
                    defaultCenter={{
                        lat: -22.92016437953923713166659581474959850311279296875,
                        lng: -42.81936358437220491168773151002824306488037109375,
                    }}
                    onClick={() => setActiveAddress(null)}
                >
                    {items?.map(item =>
                        item?.enderecos.map(address => (
                            <Marker
                                lat={address.lat}
                                lng={address.lng}
                                key={address.id}
                                item={item}
                                showCard={address.id === activeAddress}
                                onPinClick={() =>
                                    setActiveAddress(
                                        address.id === activeAddress
                                            ? null
                                            : address.id
                                    )
                                }
                            />
                        ))
                    )}
                </GoogleMapReact>
            </div>
        </div>
    );
};

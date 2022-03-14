import GoogleMapReact from 'google-map-react';
import { ImLocation } from 'react-icons/im';
import { AddressType } from '../../@types/AddressType';
import { StylesMarker } from './styles';

interface IGoogleMapProps {
    addresses: AddressType[];
}

interface IMarkerProps {
    lat: number;
    lng: number;
}
const Marker: React.FC<IMarkerProps> = () => (
    <StylesMarker>
        <ImLocation color="red" className="fs-2" />
    </StylesMarker>
);

export const LocationInMap: React.FC<IGoogleMapProps> = ({ addresses }) => {
    return (
        <div className="mb-4">
            <div className="mt-3">
                <h2 className="ms-3 fs-5 fw-bold mb-3">Localização</h2>
                <div style={{ height: '35vh', width: '100%' }} className="px-3">
                    {addresses.map(address => (
                        <GoogleMapReact
                            key={address.id}
                            bootstrapURLKeys={{
                                key: `${process.env.REACT_APP_GOOGLE_KEY}`,
                            }}
                            defaultCenter={{
                                lat: address.lat,
                                lng: address.lng,
                            }}
                            defaultZoom={15}
                        >
                            <Marker lat={address.lat} lng={address.lng} />
                        </GoogleMapReact>
                    ))}
                </div>
            </div>
        </div>
    );
};

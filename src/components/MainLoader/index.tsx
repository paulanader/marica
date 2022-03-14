import { Loader } from '../Loader';
import { PillLoader } from '../PillLoader';

export const MainLoader: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="row row-cols-3">
                    {[...Array(3)].map(() => (
                        <div className="col">
                            <PillLoader />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-3">
                    {[...Array(12)].map(() => (
                        <div className="col">
                            <Loader />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

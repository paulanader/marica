import ContentLoader from 'react-content-loader';

export const Loader: React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 600 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="3" y="12" rx="4" ry="4" width="585" height="504" />
        </ContentLoader>
    );
};

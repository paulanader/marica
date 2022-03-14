import ContentLoader from 'react-content-loader';

export const PillLoader: React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={200}
            height={150}
            viewBox="0 0 200 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="12" y="31" rx="21" ry="21" width="176" height="40" />
        </ContentLoader>
    );
};

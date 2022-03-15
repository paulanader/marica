import { useCallback, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Radius } from './styles';

interface ISearchProps {
    placeHolderValue: string;
    onSearch(searchText: string): void;
}

export const Search: React.FC<ISearchProps> = ({
    placeHolderValue,
    onSearch,
}) => {
    const [searchText, setSearchText] = useState('');

    const handleInputKeyUp = useCallback(
        ev => {
            if (ev.key === 'Enter') {
                onSearch(searchText);
            }
        },
        [onSearch, searchText]
    );
    return (
        <div className="container">
            <div className="row justify-content-end flex-grow-1">
                <div className="col-9 offset-9 py-4 px-2 w-100">
                    <Radius className="border border-secondary">
                        <div className="input-group w-100">
                            <input
                                className="form-control form-input shadow-none"
                                type="text"
                                value={searchText}
                                onChange={ev => setSearchText(ev.target.value)}
                                onKeyUp={handleInputKeyUp}
                                placeholder={placeHolderValue}
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    onClick={() => onSearch(searchText)}
                                    className="btn btn-light"
                                >
                                    <BsSearch className="text-dark" />
                                </button>
                            </div>
                        </div>
                    </Radius>
                </div>
            </div>
        </div>
    );
};

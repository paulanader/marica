import { BsSearch } from 'react-icons/bs';
import { Radius } from './styles';

interface ISearchProps {
    value: string | number | readonly string[] | undefined;
    onKeyPressValue: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onChangeValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onClickValue: React.MouseEventHandler<HTMLButtonElement> | undefined;
    placeHolderValue: string;
}

export const Search: React.FC<ISearchProps> = ({
    value,
    onKeyPressValue,
    onChangeValue,
    placeHolderValue,
    onClickValue,
}) => {
    return (
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-9 offset-9 py-4 px-2 w-100">
                    <Radius className="border border-secondary">
                        <div className="input-group w-100">
                            <input
                                className="form-control form-input shadow-none"
                                type="text"
                                value={value}
                                onKeyPress={onKeyPressValue}
                                onChange={onChangeValue}
                                placeholder={placeHolderValue}
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    onClick={onClickValue}
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

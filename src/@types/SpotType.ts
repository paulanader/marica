/* eslint-disable camelcase */
import { AddressType } from './AddressType';
import { CategoryType } from './CategoryType';
import { PhoneType } from './PhoneType';

export type SpotType = {
    id: number;
    nome: string;
    capa?: string;
    lat?: number;
    lng?: number;
    categorias: CategoryType[];
    enderecos: AddressType[];
    search: string;
    descricao_t: string;
    phones: PhoneType[];
    addresses: AddressType[];
};

import { AddressType } from './AddressType';
import { StructureType } from './StructureType';
import { CategoryType } from './CategoryType';
import { ImageType } from './ImageType';
import { OpeningHourType } from './OpeningHourType';
import { PhoneType } from './PhoneType';
import { PaymentType } from './PaymentType';
import { MediaType } from './MediaType';
import { RestrictionType } from './RestrictionType';

/* eslint-disable camelcase */
export type LocalMarketType = {
    id: number;
    nome?: string;
    is_delivery?: boolean;
    capa?: string;
    lat?: number;
    lng?: number;
    categorias?: CategoryType[];
    enderecos: AddressType[];
    addresses: AddressType[];
    email?: string;
    site?: string;
    images: ImageType[];
    horario_funcionamento?: OpeningHourType[];
    phones?: PhoneType[];
    estruturas?: StructureType[];
    formas_pagamento?: PaymentType[];
    redes?: MediaType[];
    restricoes?: RestrictionType[];
    search: string;
    descricao_t: string;
};

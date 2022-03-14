/* eslint-disable camelcase */
import { AddressType } from './AddressType';
import { CategoryType } from './CategoryType';
import { PhoneType } from './PhoneType';
import { MediaType } from './MediaType';
import { OpeningHourType } from './OpeningHourType';
import { TravalerType } from './TravalerType';
import { StructureType } from './StructureType';
import { PaymentType } from './PaymentType';
import { RestrictionType } from './RestrictionType';
import { ImageType } from './ImageType';

export type SpotType = {
    id: number;
    nome: string;
    email: string;
    site: string;
    capa?: string;
    lat?: number;
    lng?: number;
    categorias: CategoryType[];
    enderecos: AddressType[];
    search: string;
    descricao_t: string;
    phones: PhoneType[];
    addresses: AddressType[];
    redes: MediaType[];
    horario_funcionamento: OpeningHourType[];
    dicas_t: string;
    preco_t: string;
    viajantes: TravalerType[];
    estruturas: StructureType[];
    formas_pagamento: PaymentType[];
    restricoes: RestrictionType[];
    images: ImageType[];
    is_delivery?: boolean;
};

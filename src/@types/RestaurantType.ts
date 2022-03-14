/* eslint-disable camelcase */
import { AddressType } from './AddressType';
import { StructureType } from './StructureType';
import { CategoryType } from './CategoryType';
import { ImageType } from './ImageType';
import { LabelType } from './LabelType';
import { MediaType } from './MediaType';
import { OpeningHourType } from './OpeningHourType';
import { PaymentType } from './PaymentType';
import { PhoneType } from './PhoneType';
import { RestrictionType } from './RestrictionType';

export type RestaurantType = {
    id: number;
    nome: string;
    email: string;
    site: string;
    is_delivery: boolean;
    descricao_t: string;
    addresses: AddressType[];
    images: ImageType[];
    horario_funcionamento: OpeningHourType[];
    phones: PhoneType[];
    faixa_preco: number;
    capa: string;
    lat: number;
    lng: number;
    categorias: CategoryType[];
    enderecos: AddressType[];
    estruturas: StructureType[];
    formas_pagamento: PaymentType[];
    redes: MediaType[];
    restricoes: RestrictionType[];
    cozinhas: LabelType[];
    refeicoes: LabelType[];
};

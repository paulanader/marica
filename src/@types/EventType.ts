/* eslint-disable camelcase */
import { AddressType } from './AddressType';
import { CategoryType } from './CategoryType';
import { ImageType } from './ImageType';
import { MediaType } from './MediaType';
import { PaymentType } from './PaymentType';
import { PhoneType } from './PhoneType';
import { RestrictionType } from './RestrictionType';
import { StructureType } from './StructureType';

export type EventType = {
    id: number;
    nome: string;
    datahora_inicio: string;
    capa: string;
    lat: number;
    lng: number;
    categorias: CategoryType[];
    enderecos: AddressType[];
    email?: string;
    site?: string;
    gratuito: boolean;
    url_ingreso: string;
    datahora_inicio_f: string;
    datahora_fim_f: string;
    descricao_t?: string;
    addresses: AddressType[];
    images: ImageType[];
    phones?: PhoneType[];
    estruturas?: StructureType[];
    formas_pagamento?: PaymentType[];
    redes?: MediaType[];
    restricoes?: RestrictionType[];
};

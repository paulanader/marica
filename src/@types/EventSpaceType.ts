/* eslint-disable camelcase */
import { AddressType } from './AddressType';
import { CategoryType } from './CategoryType';
import { EquipamentType } from './EquipamentType';
import { ImageType } from './ImageType';
import { MediaType } from './MediaType';
import { OpeningHourType } from './OpeningHourType';
import { PaymentType } from './PaymentType';
import { PhoneType } from './PhoneType';
import { RestrictionType } from './RestrictionType';
import { SpaceType } from './SpaceType';
import { StructureType } from './StructureType';

export type EventSpaceType = {
    id: number;
    capa: string;
    lat?: string;
    lng?: string;
    categorias?: CategoryType[];
    enderecos: AddressType[];
    nome?: string;
    email?: string;
    site?: string;
    buffet?: string;
    descricao_t?: string;
    addresses: AddressType[];
    images: ImageType[];
    horario_funcionamento?: OpeningHourType[];
    phones?: PhoneType[];
    estruturas?: StructureType[];
    formas_pagamento?: PaymentType[];
    redes?: MediaType[];
    restricoes?: RestrictionType[];
    equipamentos?: EquipamentType[];
    espacos?: SpaceType[];
    is_delivery?: boolean;
};

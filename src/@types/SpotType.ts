import { AdressType } from "./AdressType";
import { CategoryType } from "./CategoryType";

export type SpotType= {
    id: number;
    nome: string;
    capa?: string;
    lat?: number;
    lng?: number;
    categorias: CategoryType[];
    enderecos: AdressType[];
    search: string;
    descricao_t: string;
};
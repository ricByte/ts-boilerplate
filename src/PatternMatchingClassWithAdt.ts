import {ADT} from "ts-adt";

export type SchrodingerCat = ADT<{
    Dead: {};
    Alive: {};
}>;
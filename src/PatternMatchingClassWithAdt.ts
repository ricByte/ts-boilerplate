import {ADT, matchI} from "ts-adt";
import {SchrodingerCatValues} from "./SchrodingerCatValues";

export type SchrodingerCat = ADT<{
    Dead: {};
    Alive: {};
}>;

export const matcher = (cat: SchrodingerCat) => matchI(cat)({
    Dead: () => SchrodingerCatValues.DEAD,
    Alive: () => SchrodingerCatValues.ALIVE,
});
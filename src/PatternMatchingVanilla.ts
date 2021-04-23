import {SchrodingerCatValues} from "./SchrodingerCatValues";

interface Alive {_type: "Alive", catSay: string}
interface Dead {_type: "Dead", numberOfCatDead: number}
type SchrodingerCat = Dead | Alive;

export type {
    SchrodingerCat,
    Alive,
    Dead
}

export const matcher = (cat: SchrodingerCat) => {
    switch (cat._type) {
        case "Alive":
            return cat.catSay;
        case "Dead":
            return cat.numberOfCatDead;
    }
}

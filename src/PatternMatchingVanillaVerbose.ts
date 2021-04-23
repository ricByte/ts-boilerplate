import {SchrodingerCatValues} from "./SchrodingerCatValues";

export class Alive {
    _type = "Alive" as const
    constructor() {}
}
export class Dead {
    _type = "Dead" as const
    constructor() {}
}

export type SchrodingerCat = Alive | Dead
type SchrodingerCatType = SchrodingerCat["_type"]

type ShapeMap<U> = { [K in SchrodingerCatType]: U extends { _type: K } ? U : never }
type ShapeTypeMap = ShapeMap<SchrodingerCat>

type Pattern<T> = { [K in keyof ShapeTypeMap]: (shape: ShapeTypeMap[K]) => T }

function when<RETURN_TYPE>(pattern: Pattern<RETURN_TYPE>): (shape: SchrodingerCat) => RETURN_TYPE {
    return shape => pattern[shape._type](shape as any)
}

export const matcher = when<SchrodingerCatValues>({
    Dead: ()=> SchrodingerCatValues.DEAD,
    Alive: ()=> SchrodingerCatValues.ALIVE
})
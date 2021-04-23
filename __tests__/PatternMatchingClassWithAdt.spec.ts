import { matchI } from "ts-adt";
import {matcher, SchrodingerCat} from "../src/PatternMatchingClassWithAdt";
import {SchrodingerCatValues} from "../src/SchrodingerCatValues";

describe('pattern matching with library ts-adt', ()=>{
    describe('The SchrodingerCat', function () {

        it('should be dead', function () {
            const deadCat: SchrodingerCat = {_type: "Dead"};

            expect(matcher(deadCat)).toEqual(SchrodingerCatValues.DEAD)
        });

        it('should be alive', function () {
            const aliveCat: SchrodingerCat = {_type: "Alive"};

            expect(matcher(aliveCat)).toEqual(SchrodingerCatValues.ALIVE)
        });
    });
})
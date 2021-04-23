import {Alive, Dead, matcher, SchrodingerCat} from "../src/PatternMatchingVanillaVerbose";
import {SchrodingerCatValues} from "../src/SchrodingerCatValues";

describe('pattern matching with Vanilla Verbose', ()=>{
    describe('The SchrodingerCat', function () {

        it('should be dead', function () {
            const deadCat: SchrodingerCat = new Dead();

            expect(matcher(deadCat)).toEqual(SchrodingerCatValues.DEAD)
        });

        it('should be alive', function () {
            const aliveCat: SchrodingerCat = new Alive();

            expect(matcher(aliveCat)).toEqual(SchrodingerCatValues.ALIVE)
        });
    });
})
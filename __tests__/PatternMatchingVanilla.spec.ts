import {matcher, SchrodingerCat} from "../src/PatternMatchingVanilla";
import {SchrodingerCatValues} from "../src/SchrodingerCatValues";

describe('pattern matching with Vanilla', ()=>{
    describe('The SchrodingerCat', function () {

        it('should be dead', function () {
            const deadCat: SchrodingerCat = {numberOfCatDead: 1, _type: "Dead"};

            expect(matcher(deadCat)).toEqual(SchrodingerCatValues.DEAD)
        });

        it('should be alive', function () {
            const aliveCat: SchrodingerCat = {catSay: SchrodingerCatValues.ALIVE.toString(), _type: "Alive"};

            expect(matcher(aliveCat)).toEqual(SchrodingerCatValues.ALIVE)
        });
    });
})
import { matchI } from "ts-adt";
import {SchrodingerCat} from "../src/PatternMatchingClassWithAdt";

describe('pattern matching with library ts-adt', ()=>{
    describe('The SchrodingerCat', function () {

        it('should be dead', function () {
            const deadCat: SchrodingerCat = {_type: "Dead"};

            const value = matchI(deadCat)({
                Dead: () => "Is DEAD!1!",
                Alive: () => "Oops is along alive...",
            });

            expect(value).toEqual("Is DEAD!1!")
        });

        it('should be alive', function () {
            const deadCat: SchrodingerCat = {_type: "Alive"};

            const value = matchI(deadCat)({
                Dead: () => "Is DEAD!1!",
                Alive: () => "Oops is along alive...",
            });

            expect(value).toEqual("Oops is along alive...")
        });
    });
})
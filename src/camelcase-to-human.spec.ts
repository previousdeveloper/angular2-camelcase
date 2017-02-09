
import "es6-shim";
import "reflect-metadata";
import {CamelCaseHumanPipe} from "./camelcase-to-human.pipe";

describe('LinkyPipe', () => {
    let pipe: CamelCaseHumanPipe;

    beforeAll(() => {
        pipe = new CamelCaseHumanPipe();
    });

    it('should linkify the web urls', () => {
        let result = pipe.transform("helloWorld", false);

        expect(result).toBe('hello World');
    });
});
import {Pipe, PipeTransform} from '@angular/core';
const decamelize = require('decamelize');


@Pipe({name: 'camelCaseToHuman'})
export class CamelCaseHumanPipe implements PipeTransform {
    transform(value: string, args: boolean): string {

        if (typeof(value) !== "string") {
            return value;
        }

        let result = decamelize(value, ' ');

        if (args) {
            result = result.charAt(0).toUpperCase() + result.slice(1);
        }
        return result;

    }
}

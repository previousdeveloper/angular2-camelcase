import {Pipe, PipeTransform} from '@angular/core';
var decamelize = require('decamelize');


@Pipe({name: 'camelCaseToHuman'})
export class CamelCaseHumanPipe implements PipeTransform {
    transform(value: string, args: any[]): string {

        if (typeof(value) === "string") {
            return value;
        }

        var result = decamelize(value, ' ');

        if (args) {
            result = result.charAt(0).toUpperCase() + result.slice(1);
        }
        return result;

    }
}

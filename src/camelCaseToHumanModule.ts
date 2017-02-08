import {NgModule} from '@angular/core';
import {CamelCaseHumanPipe} from './camelCaseToHuman.pipe';

@NgModule({
    declarations: [CamelCaseHumanPipe],
    exports: [CamelCaseHumanPipe]
})
export class CamelCaseHumanModule {
}
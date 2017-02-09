import {NgModule} from '@angular/core';
import {CamelCaseHumanPipe} from './camelcase-to-human.pipe';

@NgModule({
    declarations: [CamelCaseHumanPipe],
    exports: [CamelCaseHumanPipe]
})
export class CamelCaseHumanModule {
}
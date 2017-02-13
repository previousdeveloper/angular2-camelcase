# angular2-camelCase
Angular2 pipe to convert camelCase strings to human readable strings

## Installation

### Npm

`npm install angular2-camelcase`


## Usage

```javascript
import {CamelCaseHumanModule} from 'angular2-camelcase';

@NgModule({
  declarations: [
    AppComponent
  ],
  ....
  
  })
  
  ```
## HTML
  
  ```html
 <h1>
  {{'helloWorldHowAreYouDoingIamUpper' | camelCaseToHuman:true}}
</h1>

<h1>
  {{'helloWorldHowAreYouDoingIamLower' | camelCaseToHuman:false}}
</h1>
  
  ```



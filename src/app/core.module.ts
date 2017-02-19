import {NgModule} from "@angular/core";
import {DropdownDirective} from "./dropdown.directive";
import {HomeComponent} from "./home.component";
/**
 * Created by Henke on 2017-02-18.
 */

@NgModule({
  declarations:[DropdownDirective, HomeComponent],
  exports:[DropdownDirective]
})
export class CoreModule{}

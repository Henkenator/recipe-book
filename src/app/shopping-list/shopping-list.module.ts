import {NgModule} from "@angular/core";
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by Henke on 2017-02-18.
 */

@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports:[
    FormsModule,
    SharedModule
  ]
})
export class ShoppingListModule{}

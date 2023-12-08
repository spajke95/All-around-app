import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "../common/common.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ProductFormComponent } from "./productForm.component";
import { ProductTableComponent } from "./productTable.component";
import { PaProductTableServicesComponent } from "./productTableServices.component";
import { PaProductTableModulesComponent } from "./productTableModules.component";
import { PaToggleViewComponent } from "./toggleView.component";
import { PaIteratorDirective } from "src/app/iterator.directive";
@NgModule({
imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
declarations: [PaDiscountDisplayComponent, PaDiscountEditorComponent,
ProductFormComponent, ProductTableComponent,PaProductTableServicesComponent,PaProductTableModulesComponent,
PaToggleViewComponent,PaDiscountDisplayComponent,PaDiscountEditorComponent,PaIteratorDirective],
exports: [ProductFormComponent, ProductTableComponent,PaProductTableModulesComponent
    ,PaProductTableServicesComponent]
})
export class ComponentsModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './component';
import { FormsModule } from '@angular/forms';
import { CreatingAttrDirectivesComponent } from './creating_attr_directives.component';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoWay.directive';
import { PaStructureDirective } from './structure.directive';
//import { PaIteratorDirective } from './iterator.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { StartComponent } from './component_introduction/components/start.component';
import { ProductFormComponent } from './component_introduction/components/productForm.component';
//import { ProductTableComponent } from './component_introduction/components/productTable.component';
//import { PaToggleViewComponent } from './component_introduction/components/toggleView.component';
//import { PaAddTaxPipe } from './component_introduction/common/addTax.pipe';
//import { PaCategoryFilterPipe } from './component_introduction/common/categoryFilter.pipe';


import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import {  registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);
//import { PaProductTableServicesComponent } from './component_introduction/components/productTableServices.component';
//import { PaDiscountDisplayComponent } from './component_introduction/components/discountDisplay.component';
//import { PaDiscountEditorComponent } from './component_introduction/components/discountEditor.component';
//import { DiscountService } from './component_introduction/common/discount.service';
//import { PaDiscountPipe } from './component_introduction/common/discount.pipe';
//import { PaDicountAmmountDirective } from './component_introduction/common/discountAmount.directive';
///import { SimpleDataSource } from './datasource.model';
//import { Model } from './repository.model';
import { PaProductTableModulesComponent } from './component_introduction/components/productTableModules.component';
import { ModelModule } from './component_introduction/model';
import { CommonModule } from './component_introduction/common/common.module';
import { ComponentsModule } from './component_introduction/components/components.module';


@NgModule({
  declarations: [
    ProductComponent,CreatingAttrDirectivesComponent,PaAttrDirective,PaModel,
    PaStructureDirective
    ,PaCellColor,PaCellColorSwitcher,StartComponent
     
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,ModelModule,CommonModule,ComponentsModule
  ],
  //providers: [{provide:LOCALE_ID,useValue:"fr-FR"}],
  //providers:[DiscountService],
  bootstrap: [PaProductTableModulesComponent,ProductFormComponent]
})
export class AppModule { }

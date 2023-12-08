import { ApplicationRef, Component } from "@angular/core";
import { Model } from "../../repository.model";
import { Product } from "../../product.model";
import {NgModel,ValidationErrors,NgForm}from "@angular/forms"
@Component({
selector: "app",
templateUrl: "../template.html",
//styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]// (/deep/)and (>>>) apply style to all child components
})
export class StartComponent {
//model: Model = new Model();

    constructor(public model:Model){}
    addProduct(p: Product) {
    this.model.saveProduct(p);
    }
   

}
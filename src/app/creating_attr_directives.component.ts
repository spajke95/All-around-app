import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import {NgModel,ValidationErrors,NgForm}from "@angular/forms"
@Component({
selector: "app",
templateUrl: "creating_structural_directives.html"
})
export class CreatingAttrDirectivesComponent {
constructor(public model:Model){}
showTable:boolean=false;
darkColor:boolean=false;
getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
    }
    getProducts(): Product[] {
    return this.model.getProducts();
    }
    newProduct: Product = new Product();
    addProduct(p: Product) {
    this.model.saveProduct(p);
    }
    deleteProduct(key: number) {
        this.model.deleteProduct(key);
        }

    submitForm() {
        this.addProduct(this.newProduct);
        }

}
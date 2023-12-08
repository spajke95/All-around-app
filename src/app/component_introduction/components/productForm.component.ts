import { Component ,Output,EventEmitter,ViewEncapsulation} from "@angular/core";
import { Product ,Model} from "../model"


@Component({
    selector:"pa-productform",
    templateUrl:"productForm.component.html",
    //styles: ["div { background-color: lightgreen }"],
    //styleUrls:["productForm.component.css"],
    //encapsulation:ViewEncapsulation.ShadowDom//default is ViewEncapsulation.Emulated
    //The selectors for components that use the ShadowDom setting 
    //must be all lowercase and contain a hyphen(-)
})
export class ProductFormComponent{
    
    newProduct:Product=new Product();

    constructor(public model:Model){}
    
    // @Output("paNewProduct")
    // newProductEvent=new EventEmitter<Product>();

    submitForm(form:any){
        // this.newProductEvent.emit(this.newProduct);
        this.model.saveProduct(this.newProduct)
        this.newProduct=new Product();
        form.resetForm();
    }

}
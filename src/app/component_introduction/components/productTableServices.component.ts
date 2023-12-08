import { Component, Input ,QueryList,ViewChildren} from "@angular/core";
import { Model } from "../../repository.model";
import { Product } from "../../product.model";
import { Subject } from "rxjs";
import { DiscountService } from "../common/discount.service";
//import { PaCellColor } from "../cellColor.directive";

@Component({
    selector:"paProductTableService",
    // template:`<div>
    //              This is multiline string
    //          </div>`,
    templateUrl:"productTableServices.component.html"
})
export class PaProductTableServicesComponent{

    // discounter:DiscountService=new DiscountService();

    // @Input("model")
    // dataModel:Model|undefined;

    constructor(public dataModel:Model){}

    getProduct(key:number):Product|undefined{
        return this.dataModel?.getProduct(key);
    }

    getProducts():Product[]|undefined{
        return this.dataModel?.getProducts();
    }

    deleteProduct(key:number){
        this.dataModel?.deleteProduct(key);
    }
}
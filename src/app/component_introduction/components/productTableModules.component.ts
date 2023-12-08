
import { Component, Input ,QueryList,ViewChildren} from "@angular/core";
import{Model,Product} from "../model";
import { Subject } from "rxjs";
import { DiscountService } from "../common/discount.service";
//import { PaCellColor } from "../cellColor.directive";

@Component({
    selector:"paProductTableModules",
    // template:`<div>
    //              This is multiline string
    //          </div>`,
    templateUrl:"productTableModules.component.html"
})
export class PaProductTableModulesComponent{
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
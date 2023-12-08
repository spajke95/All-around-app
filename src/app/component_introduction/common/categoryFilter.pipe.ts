import { Pipe } from "@angular/core";
import { Product } from "../../product.model";

@Pipe({
    name:"filter",pure:false//pure:true is default that checks for pipe argument change only
    //pure:false checks for object state changes
})
export class PaCategoryFilterPipe{
    transform(products:Product[]|undefined,category:string|undefined):Product[]{
        if(products==undefined)return [];
        return category==undefined ? products : products.filter(p=>p.category==category);
    }
}
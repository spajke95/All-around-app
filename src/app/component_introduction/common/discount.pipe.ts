import {Pipe}from "@angular/core";
import { DiscountService } from "./discount.service";

@Pipe({
    name:"discount",
    pure:false
})
export class PaDiscountPipe{
    constructor(private discounter:DiscountService){}

    transform(price:number):number{
        return this.discounter.applyDiscount(price);
    }
}
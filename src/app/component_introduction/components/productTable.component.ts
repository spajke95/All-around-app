import { Component, Input ,QueryList,ViewChildren} from "@angular/core";
import { Model } from "../../repository.model";
import { Product } from "../../product.model";
import { Subject } from "rxjs";
//import { PaCellColor } from "../cellColor.directive";

@Component({
    selector:"paProductTable",
    // template:`<div>
    //              This is multiline string
    //          </div>`,
    templateUrl:"productTable.component.html"
})
export class ProductTableComponent{
    //showTable:boolean=true;
    taxRate:number=0;
    categoryFilter:string|undefined;
    itemCount:number=3;

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;

    selectMap={
        "Watersports":"stay dry",
        "Soccer":"score goals",
        "other":"have fun"
    }
    numberMap={
        "=1":"one product","=2":"two products","other":"# products"
    }

    numbers:Subject<number>=new Subject<number>();

    ngOnInit(){
        let counter=100;
        setInterval(()=>{
            this.numbers.next(counter+=10);
        },1000);
    }

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

    // @ViewChildren(PaCellColor)
    // viewChildren:QueryList<PaCellColor>|undefined;

    // ngAfterViewInit(){
    //     this.viewChildren?.changes.subscribe(()=>{this.updateViewChildren()});
    //     this.updateViewChildren();
    // }

    // private updateViewChildren(){
    //     setTimeout(()=>{
    //         this.viewChildren?.forEach((child,index)=>{
    //             child.setColor(index%2?true:false);
    //         });
    //     });
    // }
}
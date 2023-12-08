import{Directive,Input,KeyValueDiffer,KeyValueDiffers,SimpleChange} from "@angular/core"
import { DiscountService } from "./discount.service"

@Directive({
    selector:"td[pa-price]",
    exportAs:"discount"
})
export class PaDicountAmmountDirective{
    private differ?:KeyValueDiffer<any,any>;

    constructor(private keyValueDiffers:KeyValueDiffers,private discounter:DiscountService){}

    @Input("pa-price")
    originalPrice?:number;

    discountAmount?:number;

    ngOnInit(){
        this.differ=this.keyValueDiffers.find(this.discounter).create();
    }

    ngOnChanges(changes:{[property:string]:SimpleChange}){
        if(changes["originalPrice"]!=null)this.updateValue();
    }

    ngDoCheck(){
        if(this.differ?.diff(this.discounter)!=null){
            this.updateValue();
        }
    }

    private updateValue(){
        this.discountAmount=this.discounter.applyDiscount(this.originalPrice??0)
    }
}
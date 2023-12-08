import{Component,Input}from "@angular/core"
import { DiscountService } from "../common/discount.service"

@Component({
    selector:"paDiscountEditor",
    template:`<div class="form-group">
    <label>Discount</label>
    <ng-template [ngIf]="discounter?.discount ?? false">
    <input [(ngModel)]="discounter!.discount"
    class="form-control" type="number" />
    </ng-template>
    </div>`
})
export class PaDiscountEditorComponent{
    constructor(public discounter:DiscountService){}
    // @Input("discounter")
    // discounter?: DiscountService;
}
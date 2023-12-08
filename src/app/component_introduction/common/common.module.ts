import { NgModule } from "@angular/core";
import { ModelModule } from "../model";
import { DiscountService } from "./discount.service";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDicountAmmountDirective } from "./discountAmount.directive";

@NgModule({
    imports:[ModelModule],
    providers:[DiscountService],
    declarations:[PaAddTaxPipe,PaCategoryFilterPipe,PaDiscountPipe,PaDicountAmmountDirective]
    ,exports:[PaAddTaxPipe,PaCategoryFilterPipe,PaDiscountPipe,PaDicountAmmountDirective]
})
export class CommonModule{}
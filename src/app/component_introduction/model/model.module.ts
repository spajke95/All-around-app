import { NgModule } from "@angular/core";
import { Model } from "./repository.model";
import { SimpleDataSource } from "./datasource.model";


@NgModule({
    providers:[SimpleDataSource,Model]
})
export class ModelModule{}
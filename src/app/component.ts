import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import {NgModel,ValidationErrors,NgForm}from "@angular/forms"
@Component({
selector: "app",
templateUrl: "events-and-forms.html"
})
export class ProductComponent {
// model: Model = new Model();
counter:number=1;

get nextProduct(): Product | undefined {
    return this.model.getProducts().shift();
}
getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index)?.price ?? 0);
}

getClasses(key:number):string{//ngClass directive can accept strings separeted with spaces,
    //arrays of class names,
    //map object where property names become class names if value of property is true
    let product=this.model.getProduct(key);
    return "p-2 "+((product?.price??0) < 50 ? "bg-info" : "bg-warning");
}

getClassMap(key:number):Object{
    let product=this.model.getProduct(key);
    return {
        "text-center bg-danger":product?.name=="Kayak",
        "bg-info":(product?.price ?? 0) < 50
    }
}

fontSizeWithUnits="30px";
fontSizeWithoutUnits="30";

getStyles(key:number){
    let product=this.model.getProduct(key);
    return {
        fontSize:"30px",
        "margin.px":100,
        color:(this.model.getProduct(key)?.price??0)>50?"red":"green"
    }
}

getKey(index:number,product:Product){
    return product.id;
}//trackBy method for *ngFor

constructor(public model:Model,ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
    }
    getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
    }
    getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + ((product?.price ?? 0) < 50 ? "bg-info" : "bg-warning");
    }

    getProduct(key: number): Product | undefined {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    getProductCount(): number {
        return this.getProducts().length;
    }
    //events
    selectedProduct:string|undefined;
        targetName: string = "Kayak";
    getSelected(product:Product):boolean{
        return product.name==this.selectedProduct;
    }
    handleInputEvent(ev: Event) {
        if (ev.target instanceof HTMLInputElement) {
        this.selectedProduct = ev.target.value
        }
    }

    //Forms
    newProduct:Product=new Product();

    get jsonProduct(){
        return JSON.stringify(this.newProduct);
    }

    addProduct(product:Product){
        console.log("New product : "+this.jsonProduct);
    }

    getMessages(errs:ValidationErrors|null,name:string){
        let messages:string[]=[];
        for(let errorName in errs){
            switch(errorName){
                case 'required':
                    messages.push(`You must enter a ${name}`);
                    break;
                case 'minlength':
                    messages.push(`a ${name} must be ${errs['minlength'].requiredLength} characters`);
                    break;
                case 'pattern':
                    messages.push(`the ${name} contains illegal chracters`);
                    break;
            }
        }
        return messages;
    }

    getValidationMessages(state: NgModel, thingName?: string) {
        let thing: string = state.path?.[0] ?? thingName;
        return this.getMessages(state.errors, thing)
    }

    formSubmitted:boolean=false;

    submitForm(form:NgForm){
        this.formSubmitted=true;
        if(form.valid){
            this.addProduct(this.newProduct);
            this.newProduct=new Product();
            form.resetForm();
            this.formSubmitted=false;
        }
    }
    

    getFormValidationErrors(form:NgForm):string[]{
        let messages:string[]=[];
        Object.keys(form.controls).forEach(k=>{
            this.getMessages(form.controls[k].errors,k)
            .forEach(m=>messages.push(m));
        });
        return messages;
    }

}
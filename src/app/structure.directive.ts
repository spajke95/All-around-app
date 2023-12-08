import {Directive,ViewContainerRef,TemplateRef,SimpleChanges,Input}from "@angular/core";

@Directive({
    selector:"[paIf]"
})
export class PaStructureDirective{
    constructor(private container:ViewContainerRef,private template:TemplateRef<object>){}
    @Input("paIf")
    expressionResult:boolean|undefined;

    ngOnChanges(changes:SimpleChanges){
        let change=changes['expressionResult'];
        if(!change.isFirstChange()&&!change.currentValue){
            this.container.clear()
        }
        else if(change.currentValue){
            this.container.createEmbeddedView(this.template)
        }
    }
}
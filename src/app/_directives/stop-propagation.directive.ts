import {Directive, HostListener} from "@angular/core";

@Directive({
    selector: '[stopPropagation]',
  })
export class StopPropagation
{
    @HostListener("click", ["$event"])
    public onClick(event: any): void
    {
        event.stopPropagation();
    }
}

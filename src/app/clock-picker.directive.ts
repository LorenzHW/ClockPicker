import { Directive, ElementRef } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Directive({
  selector: '[appClockPicker]'
})
export class ClockPickerDirective {

  constructor(private el: ElementRef) {}

  
  ngOnInit(): void {
    $(this.el.nativeElement).clockpicker({
      placement: 'bottom',
      align: 'left',
      donetext: 'Done',
      afterDone: () => {
        console.log('done');
      }
    });
  }
}

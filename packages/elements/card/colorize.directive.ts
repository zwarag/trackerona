import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import colors from "@lib/elements/colors";

@Directive({
  selector: '[libColorize]',
})
export class ColorizeDirective implements AfterViewInit {

  @Input() red: string
  @Input() green: string
  @Input() blue: string
  @Input() yellow: string
  @Input() orange: string
  textColorHex: string = '#000'
  backgroundColorHex: string = '#fff'

  constructor(
    private el: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    const elem = this.el.nativeElement
    if (this.red === "") {
      this.backgroundColorHex = colors.red
    } else if (this.yellow === "") {
      this.backgroundColorHex = colors.yellow
    } else if (this.blue === "") {
      this.backgroundColorHex = colors.blue
    } else if (this.green === "") {
      this.backgroundColorHex = colors.green
    } else if (this.orange === "") {
      this.backgroundColorHex = colors.orange
    }
    elem.children[ 0 ].style.backgroundColor = this.backgroundColorHex
    elem.children[ 0 ].style.color = this.textColorHex
  }

}

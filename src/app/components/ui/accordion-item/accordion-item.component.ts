import { Component, Input, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";
import { TranslocoService, TranslocoPipe, TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [NgClass, TranslocoPipe, TranslocoDirective],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent implements OnInit{
  @Input() title: string | undefined;
  // @Input() content: string | undefined;
  // @Input() expanded: boolean | undefined;

  expanded: boolean = false;
  // showContent() {
  //   this.expanded = true;
  // }

  ngOnInit() {
    console.log(this.title);
  }
}

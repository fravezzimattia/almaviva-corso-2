import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated // DEFAULT
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.None
})
export class HeroItemComponent {
  @Input()
  public item!: string;

  @Output()
  public selectedItem = new EventEmitter<string>();

  public onSelectedItem(nome: string) {
    this.selectedItem.emit(nome);
  }

  public getItemName() {
    console.log('Nome Eroe:' + this.item);
    return 'Nome Eroe:' + this.item;
  }
}

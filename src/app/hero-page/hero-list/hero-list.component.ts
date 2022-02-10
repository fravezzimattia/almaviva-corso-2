import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent {
  @Input()
  public items: string[] = [];

  public onSelectedItem(item: string) {
    alert(item);
  }

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  public refresh() {
    this.cd.detectChanges();
  }
}

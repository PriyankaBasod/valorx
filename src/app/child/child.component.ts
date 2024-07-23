import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[DataService]
})
export class ChildComponent implements OnChanges,DoCheck{
  @Input() childData: string = '';

  constructor(public dataService: DataService) {}

  ngDoCheck(): void {
    console.log('Child DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child OnChanges:', changes);
  }

  updateChildData() {
    this.childData = 'Updated Child Data';
  }

}

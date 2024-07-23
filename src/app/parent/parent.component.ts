import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[DataService]
})
export class ParentComponent implements OnChanges,DoCheck{
  parentData = 'Parent Data';

  constructor(public dataservice:DataService) {}

  ngDoCheck(): void {
    console.log('Parent DoCheck');
  }


  ngOnChanges(changes: SimpleChanges): void {
     console.log('Child OnChanges:', changes);
  }

  updateParentData() {
    this.parentData = 'Updated Parent Data';
  }

}

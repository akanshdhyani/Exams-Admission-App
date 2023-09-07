import { Component } from '@angular/core';


interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-manage-track-dispatches',
  templateUrl: './manage-track-dispatches.component.html',
  styleUrls: ['./manage-track-dispatches.component.scss']
})
export class ManageTrackDispatchesComponent {
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];
}

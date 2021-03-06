import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  tabActiveId: number;
  id: number;
  durationInSeconds: number = 5;
  constructor(private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, {
      duration: duration
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params.activeTabId;
    if (this.id > 4) {
      this.openSnackBar('URL that you requested is not valid or cannot be found.','Close', 5000);
      this.router.navigateByUrl('/role');
    } else {
      this.tabActiveId = this.route.snapshot.params.activeTabId;
    }
  }

  resource = [
    {value: 'All Devices', disabled: false},
    {value: 'All Camera', disabled: false},
    {value: 'All Sensors', disabled: false},
    {value: 'Device - 1', disabled: false},
    {value: 'Security Calls', disabled: false},
    {value: 'TV', disabled: false}
  ];

  access = [
    {value: 'Emergency Call', disabled: true}
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}

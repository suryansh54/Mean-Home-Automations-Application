import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Roles {
  id: string,
  name: string,
  resources: string,
  status: number
}

const ELEMENT_DATA: Roles[] = [
  { id: 'X6YGH8', name: 'Security guard Gate 01', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id: 'X6YGH8', name: 'Security guard Gate 02', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id: 'X6YGH8', name: 'Security guard Gate 03', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id: 'X6YGH8', name: 'Guest room 01', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id: 'X6YGH8', name: 'Security room', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id: 'X6YGH8', name: 'Guest room 02', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id: 'X6YGH8', name: 'Guest room 03', resources: '5 Devices, 3 Camera, 1 Lock', status: 0 },
  { id: 'X6YGH8', name: 'Guest room 04', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id: 'X6YGH8', name: 'Guest room 05', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 },
  { id: 'X6YGH8', name: 'Guest room 06', resources: '5 Devices, 3 Camera, 1 Lock', status: 1 }
];

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  searchStatus: boolean = false;
  checked: boolean = false;
  constructor(public dialog: MatDialog) { }
  displayedColumns = ['name', 'resources', 'status', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<Roles>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("searchBox", {static: false}) searchElement: ElementRef;
  
  searching(text: string) {
    this.dataSource.filter = text.trim().toLowerCase();
  }

  searchEventHandler(){
    this.searchStatus = !this.searchStatus;   
    let searchedText:string = this.searchElement.nativeElement.value.trim();
    setTimeout(()=>{this.searchElement.nativeElement.focus()}, 100)
    if(searchedText.length > 0) {
      this.searchStatus = true;   
      setTimeout(()=>{this.searchElement.nativeElement.focus()}, 100)
      this.searching(searchedText);
    } 
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createRole(): void {
    const dialogRef = this.dialog.open(CreateRoleModal, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteRole(): void {
    const dialogRef = this.dialog.open(DeleteRoleModal, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'create-role-modal',
  templateUrl: 'modal/create-role.modal.html',
})

export class CreateRoleModal {

  constructor(
    public dialogRef: MatDialogRef<CreateRoleModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addRole(roleName: string) {
    if(roleName) {
      this.dialogRef.close();
    } else {
      alert('Value required');
    }
  }
}

@Component({
  selector: 'delete-role-modal',
  templateUrl: 'modal/delete-role.modal.html',
})

export class DeleteRoleModal {

  constructor(
    public dialogRef: MatDialogRef<DeleteRoleModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
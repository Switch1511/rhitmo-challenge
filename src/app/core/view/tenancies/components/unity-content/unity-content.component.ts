import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateModalService } from 'src/app/core/services/create-modal.service';
import { DialogCreateUnityComponent } from 'src/app/core/shared/dialogs/dialog-create-unity/dialog-create-unity.component';

@Component({
  selector: 'app-unity-content',
  templateUrl: './unity-content.component.html',
  styleUrls: ['./unity-content.component.scss']
})
export class UnityContentComponent implements OnInit {

  dialogRef!: MatDialogRef<DialogCreateUnityComponent>

  constructor(
    public dialog: MatDialog,
    private createModalService: CreateModalService
  ) { }

  ngOnInit(): void {
  }

  openAddCardModal(){
    this.createModalService.setModalState(true);
    this.dialogRef = this.dialog.open(DialogCreateUnityComponent, {
      width: "500px"
    });

    this.dialogRef.afterClosed().subscribe(() => {
      this.createModalService.setModalState(false);
    });
  }
}

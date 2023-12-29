import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription, lastValueFrom, tap } from 'rxjs';
import { TenanciesUnityModel } from 'src/app/core/models/tenancies-unity.model';
import { CreateModalService } from 'src/app/core/services/create-modal.service';
import { TenanciesService } from 'src/app/core/services/tenancies.service';
import { DialogCreateUnityComponent } from 'src/app/core/shared/dialogs/dialog-create-unity/dialog-create-unity.component';

@Component({
  selector: 'app-unity-cards',
  templateUrl: './unity-cards.component.html',
  styleUrls: ['./unity-cards.component.scss']
})
export class UnityCardsComponent implements OnInit {

  cardList: TenanciesUnityModel[] = [];
  dialogRef!: MatDialogRef<DialogCreateUnityComponent>
  isModalAberto:boolean = false;
  modalSubscription!: Subscription;

  constructor(
    private tenanciesService: TenanciesService,
    public dialog: MatDialog,
    private createModalService: CreateModalService
  ) { }

  ngOnInit(): void {
    this.getCards();

    this.modalSubscription = this.createModalService.isModalOpen().subscribe((status: boolean) => {
      if(!status){
        this.getCards();
      }
    });
  }

  async getCards(){
    this.tenanciesService.getAdress().subscribe({
      next: (adress) => {
        this.cardList = adress;
        this.orderByFavorite(this.cardList);
      },
      error:error => {
        console.error('Erro ao realizar solicitação', error);
      }
    })
  }

  openEditDialog(id: number){
    this.dialogRef = this.dialog.open(DialogCreateUnityComponent, {
      width: "500px",
      data: { cardId: id }
    });

    this.dialogRef.afterClosed().subscribe(() => {
      this.onDialogClose();
    });
  }

  deleteCard(id: number) {
    this.tenanciesService.deleteAdress(id).subscribe(
      {
        next: () => {
          this.getCards();
        },
        error:error => {
          console.error('Erro ao excluir o endereço:', error);
        }
      }
    );
  }


  orderByFavorite(lista: any[]) {
    return lista.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) {
        return -1;
      } else if (!a.isFavorite && b.isFavorite) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  onDialogClose() {
    this.getCards();
  }
}

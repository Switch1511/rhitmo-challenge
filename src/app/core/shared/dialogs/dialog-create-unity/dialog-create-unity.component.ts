import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TenanciesUnityModel } from 'src/app/core/models/tenancies-unity.model';
import { TenanciesService } from 'src/app/core/services/tenancies.service';

@Component({
  selector: 'app-dialog-create-unity',
  templateUrl: './dialog-create-unity.component.html',
  styleUrls: ['./dialog-create-unity.component.scss']
})
export class DialogCreateUnityComponent implements OnInit {

  form: FormGroup;
  editId: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogCreateUnityComponent>,
    private tenanciesService: TenanciesService
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      cep: new FormControl(''),
      address: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      number: new FormControl(''),
      isFavorite: new FormControl(false),
    });
  }

  ngOnInit(): void {
    if(this.data){
      this.editId = true;
      this.getAdressId(this.data.cardId);
    } else {
      this.editId = false;
    }
  }

  getAdressId(id: number){
    this.tenanciesService.getAdressId(id).subscribe(
      {
        next: (data) => {
          this.getForm(data);
        },
        error:error => {
          console.error('Erro ao recuperar dados do Endereço:', error);
        }
      }
    )
  }

  getForm(data: any){
    this.form.setValue({
      name: data.name,
      cep: data.postalCode,
      address: data.address,
      state: data.state,
      city: data.city,
      number: data.address,
      isFavorite: data.isFavorite
    });
  }

  saveDialog(){
    this.registerAddress();
  }

  registerAddress() {
    const form = this.form.value;

    const registerPayload: TenanciesUnityModel = {
      name: form.name,
      address: form.address,
      city: form.city,
      state: form.state,
      postalCode: form.cep,
      isFavorite: form.isFavorite
    };

    if (this.editId) {
      this.tenanciesService.putAdress(registerPayload, this.data.cardId).subscribe(
        {
          next: (response) => {
            console.log('Resposta do PUT:', response);
          },
          error: (error) => {
            console.error('Erro no PUT:', error);
          }
        }
      );
    } else {
      this.tenanciesService.postAdress(registerPayload).subscribe(
        {
          next: (response) => {
            console.log('Resposta do POST:', response);
          },
          error: (error) => {
            console.error('Erro no POST:', error);
          }
        }
      );
    }

    this.dialogRef.close(null);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }
}

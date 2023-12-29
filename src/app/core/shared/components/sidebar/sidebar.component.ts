import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigationItens: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navigationItens = [
      {
        name: "Home",
        route: "",
        icon: "home"
      },
      {
        name: "Usuários",
        route: "",
        icon: "person"
      },
      {
        name: "Tenancies",
        route: "/Tenancies",
        icon: "domain"
      },
      {
        name: "Planos de saúde",
        route: "",
        icon: "emergency"
      },
      {
        name: "Comorbidades",
        route: "",
        icon: "sick"
      },
      {
        name: "Condições do paciente",
        route: "",
        icon: "personal_injury"
      },
      {
        name: "Elegibilidade",
        route: "",
        icon: "list"
      },
      {
        name: "Especialidades",
        route: "",
        icon: "medical_information"
      },
      {
        name: "Patologias",
        route: "",
        icon: "healing"
      },
      {
        name: "Medicamentos",
        route: "",
        icon: "medication"
      },
      {
        name: "Sair",
        route: "",
        icon: "logout"
      },
    ]
  }

  redirectTo(url: string): void {
    this.router.navigate([url])
  }

}

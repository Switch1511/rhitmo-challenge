import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarItens } from '../../constants/sidebarItens';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigationItens: any = sidebarItens;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectTo(url: string): void {
    this.router.navigate([url])
  }

}

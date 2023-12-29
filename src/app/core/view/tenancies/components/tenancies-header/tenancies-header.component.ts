import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenancies-header',
  templateUrl: './tenancies-header.component.html',
  styleUrls: ['./tenancies-header.component.scss']
})
export class TenanciesHeaderComponent implements OnInit {

  routes: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.pathFromRoot.forEach(path => {
      const breadcrumb = path.routeConfig?.data?.['breadcrumb']
      if (!!breadcrumb) this.routes.push(breadcrumb)
    })
  }

  ngOnInit(): void {
  }


}

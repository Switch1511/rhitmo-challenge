import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbList: any[] = [];
  title: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.pathFromRoot.forEach(path => {
      const breadcrumb = path.routeConfig?.data?.['breadcrumb']
      const title = path.routeConfig?.data?.['title']
      if (!!breadcrumb) this.breadcrumbList.push(breadcrumb)
      if (!!title) this.title.push(title)
    })
  }

  ngOnInit(): void {
  }

}

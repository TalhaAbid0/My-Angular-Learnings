import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private routerPath = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.routerPath.snapshot.paramMap.get('id');
    console.log('id', id);
    // OR
    this.routerPath.params.subscribe({
      next(value) {
        console.log('Id value From Params Using Second Method', value['id']);
      },
      error(err) {
        console.log('ERROR IN FETCH VALUES FROM PARAM  : ', err);
      },
    });
  }
}

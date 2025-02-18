import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  // standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ValueForParam = '00989998asdf9';
  headerTitle = 'ALPHA & Co.';

  // constructor(private router: Router) {}
  // OR
  private router = inject(Router);

  navigateHandler() {
    this.router.navigateByUrl('/about', { replaceUrl: true });
  }
}

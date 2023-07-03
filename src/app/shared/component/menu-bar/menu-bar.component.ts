import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Category } from '../../models';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  @Input() category: Category[];
  private scroll: number;
  display: string;
  @HostListener('window:scroll', []) onWindowScroll() {
    this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.scroll < 200) {
      this.display = 'none';
    } else {
      this.display = 'inherit';
    }
  }
  ngOnInit(): void {
    console.log(this.category);
  }
}

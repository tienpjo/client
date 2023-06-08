import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
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
  constructor() {}
  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';
import { Product } from '../../models';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.css'],
})
export class ProductContentComponent {
  images = [1, 2].map(n => `https://www.thetahmid.com/themes/xemart-v1.0/images/girl-${n}.png`);
  @Input() product: Product;
  @Input() intervalSlider = 3500;
  constructor(config: NgbCarouselConfig) {
    config.interval = this.intervalSlider;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = false;
  }
}

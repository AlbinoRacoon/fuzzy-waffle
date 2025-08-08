import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gallery-v2',
  templateUrl: './gallery-v2.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './gallery-v2.css' ],
  standalone: false
})

export class GalleryV2Page {
	counter(i: number) {
		return new Array(i);
	}
}

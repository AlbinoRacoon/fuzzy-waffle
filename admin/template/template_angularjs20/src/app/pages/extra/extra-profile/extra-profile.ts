import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../service/app-settings.service';

@Component({
	selector: 'extra-profile',
  templateUrl: './extra-profile.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './extra-profile.css' ],
  standalone: false
})

export class ExtraProfilePage implements OnDestroy {
  constructor(public appSettings: AppSettings) {
    this.appSettings.appContentClass = 'p-0';
  }

  ngOnDestroy() {
    this.appSettings.appContentClass = '';
  }
}

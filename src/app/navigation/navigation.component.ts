import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [],
})
export class NavigationComponent {
  links = [
    { linkName: 'Home', linkUrl: '/' },
    { linkName: 'Test', linkUrl: '/test' },
    { linkName: 'Storage', linkUrl: '/storage' },
  ];
}

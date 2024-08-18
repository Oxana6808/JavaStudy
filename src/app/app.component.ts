import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Делает компонент standalone
  imports: [CommonModule, HeaderComponent]  // Добавьте нужные модули и компоненты
})
export class AppComponent {
  title = 'JavaStudy';
}

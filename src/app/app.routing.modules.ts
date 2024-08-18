import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Здесь добавьте ваши компоненты, которые будут использоваться в маршрутизации
import { HeaderComponent } from './header/header.component';
// import { ContentComponent } from './content/content.component';
// import { MenuComponent } from './menu/menu.component';

// Определите маршруты для вашего приложения
const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' }, // Перенаправление на компонент Header по умолчанию
  { path: 'header', component: HeaderComponent },
  // { path: 'content', component: ContentComponent },
  // { path: 'menu', component: MenuComponent },
  // Добавьте другие маршруты по мере необходимости
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

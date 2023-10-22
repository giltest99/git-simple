import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'test', component: TestComponentComponent, title: 'Test' },
  { path: '**', component: NotFoundComponent, title: 'Not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

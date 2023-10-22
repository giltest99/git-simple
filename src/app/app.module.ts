import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { StorageComponent } from './storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NotFoundComponent,
    HomeComponent,
    NavigationComponent,
    TestComponentComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

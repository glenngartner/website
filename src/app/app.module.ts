import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'game', component: RendererComponent, data: {title: '3D App'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

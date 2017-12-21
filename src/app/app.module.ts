import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
//services
import { ProjectService } from './services/project.service';
import { BlogService } from './services/blog.service';
//directives
import { MousewheelDirective } from './directives/mousewheel.directive';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'project-detail/:id', component: ProjectDetailComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'blog-detail/:link', component: BlogDetailComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectComponent,
    PageNotFoundComponent,
    ContactComponent,
    ProjectDetailComponent,
    MousewheelDirective,
    BlogComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProjectService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

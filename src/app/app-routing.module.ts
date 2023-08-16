import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProjectComponent } from './components/project/project.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: "projects", component: ProjectsComponent },
  { path: "skills", component: SkillsComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "contactForm", component: ContactFormComponent },
  { path: "projects/:routine", component: ProjectComponent },
  { path: "menu", component: MenuComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

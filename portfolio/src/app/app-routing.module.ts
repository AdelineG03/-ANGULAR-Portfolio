import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent as ProfilComponent } from './COMPONENTS/profil/profil.component';
import { SkillCardsComponent } from './COMPONENTS/skill-cards/skill-cards.component';
import { XpCardsComponent } from './COMPONENTS/xp-cards/xp-cards.component';
import { ProjectCardsComponent } from './COMPONENTS/project-cards/project-cards.component';
import { PortfolioComponent } from './COMPONENTS/portfolio/portfolio.component';
import { ExperiencesComponent } from './COMPONENTS/experiences/experiences.component';

const routes: Routes = [
  {
    path:'competences',
    component:SkillCardsComponent
  },
  {
    path:'experiences',
    component:ExperiencesComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path: '',
    redirectTo: 'profil',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

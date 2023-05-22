import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerMenuComponent } from './COMPONENTS/burger-menu/burger-menu.component';
import { DividerComponent } from './COMPONENTS/divider/divider.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { ProfilComponent } from './COMPONENTS/profil/profil.component';
import { ProjectCardsComponent } from './COMPONENTS/project-cards/project-cards.component';
import { SkillCardsComponent } from './COMPONENTS/skill-cards/skill-cards.component';
import { XpCardsComponent } from './COMPONENTS/xp-cards/xp-cards.component';
import { NavBarComponent } from './COMPONENTS/nav-bar/nav-bar.component';
import { PortfolioComponent } from './COMPONENTS/portfolio/portfolio.component';
import { ExperiencesComponent } from './COMPONENTS/experiences/experiences.component';
import { ProfilCardsComponent } from './COMPONENTS/profil-cards/profil-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerMenuComponent,
    DividerComponent,
    FooterComponent,
    ProfilComponent,
    ProjectCardsComponent,
    SkillCardsComponent,
    XpCardsComponent,
    NavBarComponent,
    PortfolioComponent,
    ExperiencesComponent,
    ProfilCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

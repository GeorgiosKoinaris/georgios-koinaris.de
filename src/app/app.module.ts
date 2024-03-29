import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { ProjectSharkieComponent } from './project-sharkie/project-sharkie.component';
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ProjectHomepageComponent } from './project-homepage/project-homepage.component';
import { ProjectDabubbleComponent } from './project-dabubble/project-dabubble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ProjectJoinComponent,
    ProjectSharkieComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    ProjectHomepageComponent,
    ProjectDabubbleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

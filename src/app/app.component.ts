import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./Pages/home/home.component";
import { AboutComponent } from "./Pages/about/about.component";
import { StatsComponent } from "./Pages/Stats/Stats.component";
import { SkillsComponent } from "./Pages/skills/skills.component";
import { ResumeComponent } from "./Pages/resume/resume.component";
import { PortfolioComponent } from "./Pages/portfolio/portfolio.component";
import { ServicesComponent } from "./Pages/services/services.component";
import { ContactComponent } from "./Pages/contact/contact.component";
import { PreLoaderComponent } from "./Pages/pre-loader/pre-loader.component";
import { ScrollTopComponent } from "./Pages/scroll-top/scroll-top.component";
import Aos from 'aos';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule, FooterComponent, CommonModule, HomeComponent, AboutComponent, SkillsComponent, ResumeComponent, PortfolioComponent, ServicesComponent, ContactComponent, PreLoaderComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ABHISHEKJOSHI-PORTFOLIO';

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // 2s preloader
  }

  ngAfterViewInit() {
    Aos.refresh();
  }
}

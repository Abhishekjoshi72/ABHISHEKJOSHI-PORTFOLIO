import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ResumeComponent } from './Pages/resume/resume.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { ServicesComponent } from './Pages/services/services.component';
import { ContactComponent } from './Pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path: 'Resume',
        component: ResumeComponent
    },
    {
        path: 'Portfolio',
        component: PortfolioComponent
    },
    {
        path: 'Services',
        component: ServicesComponent
    },
    {
        path: 'Contact',
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

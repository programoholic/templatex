import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { TemplateManagementComponent } from '../template-management/template-management.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AppAuthGuard } from './app-auth-guard';
import { AuthService } from './auth.service';
import { ScriptGeneratorComponent } from '../script-generator/script-generator.component';

// const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
//   {path: routesNames.home, component: HomePageComponent, pathMatch: 'full'},
//   {path: routesNames.heroes.basePath, loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule)},
//   {path: routesNames.error404, component: Error404PageComponent},
//   {path: 'en', redirectTo: ''}, // because english language is the default one

//   // otherwise redirect to 404
//   {path: '**', redirectTo: RoutesConfig.routes.error404}
{path : 'HOME', component : HomepageComponent,
 children :[
  {path: 'CS_MANAGE_TEMPLATE_E', component: TemplateManagementComponent,canActivate: [AppAuthGuard] },
  {path : 'CS_LANDING_PAGE_E',component: LandingPageComponent},
  {path : 'CS_SCRIPT_GEN_E' , component : ScriptGeneratorComponent},
  {path: '',redirectTo : 'CS_LANDING_PAGE_E',pathMatch: 'full'},
 ]
},
{path : '', redirectTo : 'HOME' , pathMatch : 'full'},
{path: '**', redirectTo: 'HOME', pathMatch : 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
  providers :[
    AppAuthGuard,
    AuthService
  ]
})

export class AppRoutingModule {
}
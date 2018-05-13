import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { MainPageComponent } from './main-page/main-page.component';



const appRoutes: Routes = [
    { path:'', redirectTo: 'main', pathMatch:'full' },
    { path: 'main', component: MainPageComponent},
    { path: 'login', component: LoginPageComponent},
    { path: 'submit', component: SubmitPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'}) ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
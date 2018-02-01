import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginscreenComponent } from './loginscreen/loginscreen.component';

const routes: Routes = [
    { path: '', component: LoginscreenComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class LoginRouting { }


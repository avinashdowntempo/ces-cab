import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadChildren: 'app/login/login.module#LoginModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }

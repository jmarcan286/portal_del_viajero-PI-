import { Routes } from '@angular/router';
import { AuthorizedComponent } from './paginas/authorized/authorized.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PaginaRegistroComponent } from './paginas/pagina-registro/pagina-registro.component';
import { InicioSesionComponent } from './paginas/inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    { path: '', component: MenuComponent, title: 'Inicio'},
    { path: 'registro', component: PaginaRegistroComponent, title: 'Inicio'},
    { path: 'inicio-sesion', component: InicioSesionComponent, title: 'Inicio'},
    { path: 'authorized', component: AuthorizedComponent },
    { path: 'logout', component: LogoutComponent, title: 'Logout'},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

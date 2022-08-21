import { UsuarioService } from './usuario/usuario.service';
import { Usuario } from './usuario/usuario';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private usuarioService:UsuarioService, private router:Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.usuarioService.estaLogado()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}

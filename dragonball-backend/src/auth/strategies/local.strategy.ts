// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy } from 'passport-local';
// // import { UsuarioService } from "src/usuarios/usuario.service"; 
// import { AuthService } from "../auth.service";
// import { UsuariosService } from "src/usuarios/usuarios.service";

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//     constructor(
//         private readonly authService: AuthService,
//         private usuarioService: UsuariosService
//     ) {
//         super();
//     }

//     async validate(username: string, password: string): Promise<any> {
//         const valid = await this.usuarioService.consultaEstatusUsuario(username)
//         const user = await this.authService.validateUser(username, password);

//         if (valid == false) throw new UnauthorizedException({ message: 'Usuario inactivo, consulte con el administrador' });
//         if (!user) throw new UnauthorizedException({ message: 'Contraseña incorrecta.' });

//         return user;
//     }
// }
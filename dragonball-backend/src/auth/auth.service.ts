import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/usuarios/entity/usuarios.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Repository } from 'typeorm';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        private readonly usuarioService: UsuariosService,
        private readonly jwtService: JwtService,
        @InjectRepository(UserEntity)
        private readonly usuarioRepository: Repository<UserEntity>,
        // private configService: ConfigService
    ) {
        0
    }

    // async validateUser(username: string, password: string): Promise<any> {
    //     const user = await this.usuarioService.findUsuario(username);
    //     const isValidPassword = password === user.password;

    //     if (user && isValidPassword) return user;
    //     return null;
    // };

    // async login(usuario: any) {
    //     let hoy = new Date();
    //     if (usuario.fecha_caducidad >= hoy) {
    //         const user = await this.usuarioRepository.findOne({ where: { name: usuario.name } });
    //         const payload = {
    //             username: usuario.username,
    //             iat: Date.now(),
    //             exp: hoy.setDate(hoy.getDate() + 1) // Token valido por 1 dia
    //         }
    //         if (user)
    //             return { token: this.jwtService.sign(payload), user: user.name }
    //         else
    //             return { token: this.jwtService.sign(payload), user: 0 }
    //     } else {
    //         console.log('¡No autorizado! su plan caduco')
    //         return null;
    //     }
    // };



    // Método para iniciar sesión y generar un JWT
  async login(username: string, password: string): Promise<any> {
    const user = await this.usuarioService.findUsuario(username);
    console.log("Usuario found: ", user)
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { name: user.name };
    return {
      access_token: this.jwtService.sign(payload), // Genera el token con el payload
    };
  }

  // Método para verificar si el token es válido
  async validateUser(payload: JwtPayload): Promise<any> {
    const user = await this.usuarioService.findUsuario(payload.name);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

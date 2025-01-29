import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from './entity/usuarios.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuariosService: UsuariosService){}

    @Post('/create')
        async create(@Body() userData): Promise<UserEntity> {
            console.log("Esta entrando aqui")
          return this.usuariosService.createUser(userData);
        }
}

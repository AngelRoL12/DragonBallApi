import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { PersonajesFavoritosEntity } from './entity/personajes-favoritos.entity';
import { JwtAuthGuard } from 'src/auth/guardas/jwt-auth.guard';
import { Params } from './interfaces/interfaces';

@Controller('personajes')
export class PersonajesController {
    constructor(private personajesService: PersonajesService){}

    @UseGuards(JwtAuthGuard)
    @Get('/consulta')
    getCharacters(@Query() query: Params) {
      return this.personajesService.getCharacters(query);
    }

    @Get('/consulta/:id')
    getCharacterById(@Param('id') id: number) {
      return this.personajesService.getCharacterbyId(id);
    }

    // Personajes Favoritos
    @Post('/favorito')
    async create(@Body() userData: Partial<PersonajesFavoritosEntity>): Promise<PersonajesFavoritosEntity> {
      return this.personajesService.createFavoriteCharacter(userData);
    }

    @Get('/favorito')
    async findAll(): Promise<PersonajesFavoritosEntity[]> {
      return this.personajesService.findAllcreateFavoriteCharacters();
    }

    @Delete('/favorito/:id')
    async deleteUser(@Param('id') id: string): Promise<void> {
      await this.personajesService.deleteByIdFavoriteCharacter(Number(id));
    }
}

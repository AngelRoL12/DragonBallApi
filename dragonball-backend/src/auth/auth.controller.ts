import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuarad } from './guardas/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guardas/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}
    
    
    @Get('verifica')
    @UseGuards(JwtAuthGuard)
    async verificaToken(@Req() req) {
        return;
    }

    @Get('usuario')
    @UseGuards(JwtAuthGuard)
    getProfile(@Req() req) {
        return req.usuario.username;
    }
    
    // @UseGuards(LocalAuthGuarad)
    // @Post('login')
    // async login(@Req() req) {
    //     return await this.authService.login(req.user);
    // }

    @Post('login')
    async login(@Body() body: { name: string; password: string }) {
        console.log("Entro aqui a login");
        return this.authService.login(body.name, body.password);
    }
}

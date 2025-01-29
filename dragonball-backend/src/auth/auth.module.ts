import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/usuarios/entity/usuarios.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [ PassportModule, UsuariosModule,
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     secret: config.get<string>('JWT_SECRET'),
    //     signOptions: {
    //       expiresIn: config.get<string>('EXPIRES_IN'),
    //       audience: config.get<string>('APP_URL'),
    //     },
    //   }),
    // }),
    JwtModule.register({
      secret: 'secretKey', // Cambia esto por una clave más segura
      signOptions: { expiresIn: '1h' }, // Tiempo de expiración del token
    }),
    TypeOrmModule.forFeature([UserEntity])
],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

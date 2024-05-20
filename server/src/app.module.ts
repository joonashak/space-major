import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import {
  CloneBayModule,
  CloneBayResolversModule,
  CloneBaySsoModule,
} from '@joonashak/nestjs-clone-bay';
import { EveAuthModule } from '@joonashak/nestjs-eve-auth';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationModule } from './operation/operation.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // FIXME: These settings cannot be used in production.
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({ includeCookies: true }),
      ],
    }),
    EveAuthModule.forRoot({
      clientId: process.env.CLIENT_ID,
      secretKey: process.env.SECRET_KEY,
      callbackUrl: process.env.SSO_CALLBACK_URL,
    }),
    CloneBayModule.forRoot({ afterLoginUrl: process.env.CLIENT_URL }),
    CloneBaySsoModule,
    CloneBayResolversModule,
    OperationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

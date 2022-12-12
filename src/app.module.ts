import { Module } from '@nestjs/common'
import { ApolloDriver } from '@nestjs/apollo'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { CustomerModule } from './invoice/customer.module'
import { join } from 'path'


// Notes
// GraphQLModule is a wrapper over Apollo Server.
// It provides a static method, forRoot(), for configuring the underlying Apollo instance.
@Module({
  imports: [
    CustomerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), '/src/schema.gql'),
      driver: ApolloDriver
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

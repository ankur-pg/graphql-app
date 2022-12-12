import { Module } from '@nestjs/common'
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CustomerService, CustomerResolver],
})
export class CustomerModule {}

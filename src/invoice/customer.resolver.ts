import { Inject } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql"
import { CustomerModel } from "./customer.model"
import { CustomerService } from './customer.service'

@Resolver(of => CustomerModel)
export class CustomerResolver {
  constructor(@Inject(CustomerService) private customerService: CustomerService) {}

  @Query(returns => [CustomerModel])
  async customers() {
    return this.customerService.findAll()
  }
}
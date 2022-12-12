import { Injectable } from "@nestjs/common";
import { CustomerModel } from "./customer.model";

@Injectable()
export class CustomerService {
    findAll = () => {
        const customers: CustomerModel[] = [
            {
                id: '1',
                name: 'Jack',
                email: 'a@a.com'
            },
            {
                id: '2',
                name: 'Sam',
                email: 's@a.com'
            }
        ]
        return customers
    }
}

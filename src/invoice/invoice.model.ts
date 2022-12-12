import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class InvoiceModel {
    @Field()
    id: string

    @Field()
    invoiceNo: string

    @Field()
    description: string
}
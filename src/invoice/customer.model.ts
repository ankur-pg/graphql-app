import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CustomerModel {
    @Field()
    id: string

    @Field()
    name: string

    @Field()
    email: string
}
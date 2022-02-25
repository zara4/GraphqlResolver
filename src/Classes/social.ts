import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Social {
    @Field(() => ID)
    id: string

    @Field(() => String, { nullable: true })
    title?: string | null

    @Field(()=> String)
    link?: string

    @Field(()=> String)
    authorid:string
}
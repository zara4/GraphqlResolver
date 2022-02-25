import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Skill {
    @Field(()=> ID)
    id: string

    @Field(() => String, { nullable: true })
    title?: string | null

    @Field()
    rating?: string

    @Field(()=> ID)
    authorid:string

}
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Education {
    @Field(() => ID)
    id: string

    @Field(() => String)
    name?: string
    
    @Field(() => String)
    degree?: string | null

    @Field(() => String)
    field?: string | null

    @Field(() => String)
    location?: string | null

    @Field(() => String)
    startdate?: string | null

    @Field(() => String)
    enddate?: string | null

    @Field(()=> ID)
    authorid:string
}
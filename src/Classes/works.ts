import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Work{
    @Field(() => ID)
    id: string

    @Field(() => String)
    title?: string
    
    @Field(() => String)
    employer?: string | null

    @Field(() => String)
    city?: string | null

    @Field(() => String)
    state?: string | null

    @Field(() => String)
    summary?: string | null

    @Field(() => String)
    startdate?: string | null

    @Field(() => String)
    enddate?: string | null

    @Field(()=> String)
    authorid?: string
}
import {Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Expertise {
  @Field(() => ID)
  id: string;
  
  @Field()
  title?: string;

  @Field()
  ratings?: number;
  
  @Field(()=> ID)
  authorid:string

}
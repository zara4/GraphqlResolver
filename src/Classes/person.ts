import { ObjectType, Field, ID } from "type-graphql";
import { Education } from "./education";
import { Expertise } from "./expertise";
import { Role, UserRole } from "./role";
import { Skill } from "./skill";
import { Social } from "./social";
import { Work } from "./works";

@ObjectType()
export class Person{
    @Field(() => ID)
    id: string

    @Field(() => String,{nullable:true})
    firstname?: string
    
    @Field(() => String,{nullable:true})
    lastname?: string | null
    
    @Field(() => String,{nullable:true})
    profession?: string | null

    @Field(() => String,{nullable:true})
    zipcode?: string | null

    @Field(() => String,{nullable:true})
    phone?: string | null

    @Field(() => String,{nullable:true})
    email?: string | null

    @Field(() => String,{nullable:true})
    city?: string | null

    @Field(() => String,{nullable:true})
    state?: string | null

    @Field(() => String,{nullable:true})
    summary?: string | null
    
    @Field(() => [Social],{nullable: true})
    social:    Social[] | null;

    @Field(() => [Education],{nullable: true})
    education:    Education[] | null;

    @Field(() => [Work],{nullable: true})
    work:      Work[] | null;

    @Field(() => [Skill],{nullable: true})
    skill:    Skill[] | null;

    @Field(() => [Expertise],{nullable: true})
    expertise:    Expertise[] | null;

    @Field(() => UserRole)
    role: Role;
}
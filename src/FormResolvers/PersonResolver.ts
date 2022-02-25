import { Education } from '../Classes/education';
import { Expertise } from '../Classes/expertise';
import { Person } from '../Classes/person';
import { Role } from '../Classes/role';
import { Skill } from '../Classes/skill';
import { Social } from '../Classes/social';
import { Work } from '../Classes/works';
import { Arg, Mutation, ObjectType } from 'type-graphql';

@ObjectType() 
export class PersonMutation{
 @Mutation(() => Person, {nullable:true})
 async addPerson(
    @Arg("id") id: string,
    @Arg("firstname") firstname: string,
    @Arg("lastname") lastname: string,
    @Arg("profession") profession:string,
    @Arg("zipcode") zipcode: string,
    @Arg("phone") phone: string,
    @Arg("email") email:string,
    @Arg("city") city: string,
    @Arg("state") state: string,
    @Arg("summary") summary:string,
    @Arg("social") social: [Social],
    @Arg("education") education: [Education],
    @Arg("work") work: [Work] ,
    @Arg("skill") skill: [Skill] ,
    @Arg("expertise") expertise: [Expertise],
    @Arg("role") role: Role, 
) : Promise<Person | null>{
     {
    return {id,firstname,lastname,profession,zipcode,phone,email,city,state,summary,social,education,work,skill,expertise,role}; 
     }
}
}
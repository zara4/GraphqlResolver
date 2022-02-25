import { Skill } from 'src/Classes/skill';
import { Arg, Field, Resolver } from 'type-graphql';

@Resolver(Skill) 
export class SkillMutation{
 @Field(() => Skill)
 async addSkill(
    @Arg("id") id: string,
    @Arg("title") title: string,
    @Arg("rating") rating: string,
    @Arg("userid") authorid:string
) : Promise<Skill> {
     {
    return {id,title,rating,authorid}; 
     }
}
}
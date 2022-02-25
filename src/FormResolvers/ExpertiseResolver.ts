import { Expertise } from 'src/Classes/expertise';
import { Arg, Field, Resolver } from 'type-graphql';

@Resolver() 
export class ExpertiseMutation{
 @Field(() => Expertise)
 async addExpertise(
    @Arg("id") id: string,
    @Arg("title") title: string,
    @Arg("rating") ratings: number,
    @Arg("authorid") authorid:string
) : Promise<Expertise> {
     {
    return {id,title,ratings,authorid}; 
     }
}
}
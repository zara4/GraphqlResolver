import { Social } from 'src/Classes/social';
import { Arg, Field, Resolver } from 'type-graphql';

@Resolver()
export class SocialMutation{
 @Field(() => Social)
 async addSocial(
    @Arg("id") id: string,
    @Arg("title") title: string,
    @Arg("link") link: string,
    @Arg("authorid") authorid:string
) : Promise<Social> {
     {
    return {id,title,link,authorid}; 
     }
}
}
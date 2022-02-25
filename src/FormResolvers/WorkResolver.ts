import { Work } from 'src/Classes/works';
import { Arg, Field, Resolver } from 'type-graphql';

@Resolver() 
export class WorkMutation{
 @Field(() => Work)
 async addWork(
    @Arg("id") id: string,
    @Arg("title") title: string,
    @Arg("authorid") authorid: string,
    @Arg("employer") employer:string,
    @Arg("city") city:string,
    @Arg("state") state:string,
    @Arg("summary") summary:string,
    @Arg("startdate") startdate:string,
    @Arg("enddate") enddate:string, 
) : Promise<Work> {
     {
    return {id,title,authorid,employer,city,state,summary,startdate,enddate}; 
     }
}
}
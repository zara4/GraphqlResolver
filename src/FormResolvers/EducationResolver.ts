import { Education } from 'src/Classes/education';
import { Arg, Field, Resolver} from 'type-graphql';

Resolver(Education) 
export class EducationMutation{
 @Field(() => Education)
 async addEducation(
    @Arg("id") id: string,
    @Arg("name") name: string,
    @Arg("degree") degree: string,
    @Arg("feild") field:string,
    @Arg("location") location:string,
    @Arg("authorid") authorid:string,
    @Arg("startdate") startdate:string,
    @Arg("enddate") enddate:string, 
) : Promise<Education> {
     {
    return {id,name,degree,field,location,authorid,startdate,enddate}; 
     }
}
}
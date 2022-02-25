import { Query, Resolver} from 'type-graphql';

@Resolver()
export class UserResolvers {
    @Query(()=> String)
       hello(){
           return 'type-graphql works'
       }
}
/* @ObjectType()
class BookQuery {
  @Field(() => Book)
  async add(@Arg("id") id: string) {
    return ...
  }
}
@ObjectType()
class BookMutation {
  @Field(() => Boolean)
  async add(@Arg('book') book: Book) {
    return ...
  }
}


@Resolver()
export class BookResolver {
  @Query(() => BookQuery, { name: 'book' })
  bookQuery() {
    return {};
  }

  @Mutation(() => BookMutation, { name: 'book' })
  bookMutation() {
    return {};
  }
} */
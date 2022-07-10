import { ProjectProps } from '@qa-framework/performance';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Project implements ProjectProps {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  description!: string;
}

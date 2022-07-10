import { performanceDb } from '@qa-framework/performance';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Project } from './projectObj';

@Resolver(Project)
export class ProjectResolver {
  constructor() {}

  @Query((returns) => [Project])
  async allProjects() {
    return performanceDb.projects.toArray();
  }

  @Mutation((returns) => String)
  async addProject(
    @Arg('name') name: string,
    @Arg('description') description: string
  ): Promise<String> {
    const id = await performanceDb.projects.add({ name, description });
    return `Added new project with id -> ${id}`;
  }
}

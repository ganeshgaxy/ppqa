import Dexie, { Table } from 'dexie';

export interface ProjectProps {
  id?: number;
  name: string;
  description: string;
}

export class PerformanceDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  projects!: Table<ProjectProps>;

  constructor() {
    super('performanceQA');
    this.version(1).stores({
      projects: '++id, name, age', // Primary key and indexed props
    });
  }
}

export const performanceDb = new PerformanceDexie();

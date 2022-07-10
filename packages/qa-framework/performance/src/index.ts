import { getRequestLoad } from './native/addon';

export { performanceDb, ProjectProps } from './db/dbIndex';

export default abstract class QAPerformance {
  static getRequestLoad = getRequestLoad;
}

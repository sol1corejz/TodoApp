import { FilterType } from './filter';
import { ITask } from './todo';

export interface ITodos {
  tasks: ITask[];
  activeFilter: FilterType;
}
import { getMyTasksType, taskDataResponseType, cleanTasksType } from '../../../store/types/tasks.module';
export interface MyTasksProps{
    token: string | null;
    onGetMyTasks: (token: string | null) => getMyTasksType;
    loading: boolean;
    myTasks: taskDataResponseType[];
    onCleanTasks: () => cleanTasksType;
}
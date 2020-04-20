import { getTasksCreatedType, taskDataResponseType, deleteTaskType, cleanTasksType } from '../../../store/types/tasks.module';
export interface CreatedTasksProps{
    token: string | null;
    onGetTasksCreated: (token: string | null) => getTasksCreatedType;
    loading: boolean;
    tasksCreated: taskDataResponseType[];
    onDeleteTask: (token: string | null, task_id: string) => deleteTaskType
    deleteLoading?: boolean;
    onCleanTasks: () => cleanTasksType;
}
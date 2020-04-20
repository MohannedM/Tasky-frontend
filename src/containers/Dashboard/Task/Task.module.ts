import {RouteComponentProps} from 'react-router-dom';
import { taskDataResponseType, getTaskType } from '../../../store/types/tasks.module';

export interface TaskProps extends RouteComponentProps{
    task: taskDataResponseType | null;
    loading: boolean;
    token: string | null;
    onGetTask: (token: string | null, task_id: string) => getTaskType;
}
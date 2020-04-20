import {RouteComponentProps} from 'react-router-dom';
export interface SingleTaskProps extends RouteComponentProps{
    usageIn: "MyTasks" | "CreatedTasks";
    title: string;
    due_date: string;
    task_id: string;
    onDeleteClicked?:  any
}
import { RouteComponentProps } from "react-router-dom";
import { dismissTasksErrorType } from "../../store/types/tasks.module";

export interface DashboardProps extends RouteComponentProps<any>{
    isAuth: boolean;
    error: string | null;
    onDismissError: () => dismissTasksErrorType;
}
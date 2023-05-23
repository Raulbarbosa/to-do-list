export interface ITask {
    id: number;
    content: string;
    status: 'done' | 'pending'
}
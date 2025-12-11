import useLocalStorage from 'use-local-storage'
import { TAKS_KEY, TaskState, type Task } from '../models/task'


export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TAKS_KEY, []);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concluedTasksCount: tasks.filter((task) => task.concluded).length
  }
}
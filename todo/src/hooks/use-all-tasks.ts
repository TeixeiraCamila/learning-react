import useLocalStorage from 'use-local-storage'
import { TAKS_KEY, type Task } from '../models/task'


export default function useTasks () {
  const [tasks] = useLocalStorage<Task[]>(TAKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concluedTasksCount: tasks.filter((task) => task.concluded).length
  }
}
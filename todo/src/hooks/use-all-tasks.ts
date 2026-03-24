import useLocalStorage from 'use-local-storage'
import { TAKS_KEY, TaskState, type Task } from '../models/task'
import React from 'react'
import { delay } from '../helpers/utils'

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TAKS_KEY, [])
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true)

  async function fetchTasks() {
    if (isLoadingTasks) {
      console.time('fetching tasks')
      await delay(2000)
      setIsLoadingTasks(false)
    }
    setTasks(tasksData)
    console.timeEnd('fetching tasks')
  }

  React.useEffect(() => {
    fetchTasks()
  }, [tasksData])

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    concluedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks
  }
}

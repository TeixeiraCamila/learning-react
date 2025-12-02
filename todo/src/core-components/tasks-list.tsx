import Button from "../components/button";
import TaskItem from "./task-item";
import PlusIcon from '../assets/icons/plus.svg?react'
import useTasks from "../hooks/use-all-tasks";
import useTask from "../hooks/use-single-task";
import { TaskState } from "../models/task";

export default function TaksList() {
  const { tasks } = useTasks()
  const { prepareTask } = useTask()

  function handleNewTask() {
    prepareTask()
  }
  return <>
    <section>
      <Button
        icon={PlusIcon}
        className="w-full"
        onClick={handleNewTask}
        disabled={tasks.some((task) => task.state === TaskState.Creating)}
      >
        Nova Tarefa
      </Button>
    </section>
    <section className="space-y-2">
      {tasks.map((task) => <TaskItem task={task} key={task.id} />)}
    </section>
  </>
}
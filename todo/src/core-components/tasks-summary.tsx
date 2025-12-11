import Badge from "../components/badge"
import Text from "../components/text"
import useTasks from "../hooks/use-all-tasks"

export default function TasksSummary() {
  const { createdTasksCount, concluedTasksCount } = useTasks();


  return <>
    <div className="flex items-center gap-2">
      <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
      <Badge variant="secundary">{createdTasksCount}</Badge>
    </div>
    <div className="flex items-center gap-2">
      <Text variant="body-sm-bold" className="!text-gray-300">Tarefas concluídas</Text>
      <Badge variant="primary">{concluedTasksCount} de {createdTasksCount}</Badge>
    </div>
  </>
}
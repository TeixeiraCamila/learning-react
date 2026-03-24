import React from 'react'

import ButtonIcon from '../components/button-icon'
import Card from '../components/card'
import InputCheckbox from '../components/input-checkbox'
import Text from '../components/text'
import TrashIcon from '../assets/icons/trash.svg?react'
import PencilIcon from '../assets/icons/pencil.svg?react'
import XIcon from '../assets/icons/x.svg?react'
import CheckIcon from '../assets/icons/check.svg?react'
import Input from '../components/input'
import { TaskState, type Task } from '../models/task'
import { cx } from 'class-variance-authority'
import useTask from '../hooks/use-single-task'
import Skeleton from '../components/skeleton'

interface TaskItemProps {
  task: Task
  loading?: boolean
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  )

  const [taskTitle, setTaskTitle] = React.useState(task.title || '')

  const { updateTask, updatedTaskStatus, deleteTask, isDeletingTask, isUpdatingTask } = useTask()

  function handleEditTaskt() {
    setIsEditing(true)
  }
  function handleExitEditTaskt() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id)
    }
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '')
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked
    updatedTaskStatus(task.id, checked)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            onChange={handleChangeTaskStatus}
            checked={task?.concluded}
            loading={loading}
          />
          {!loading ? (
            <Text
              className={cx('flex-1', {
                'line-through': task?.concluded,
              })}
            >
              {' '}
              {task?.title}{' '}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              type="button"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTaskt}
              type="button"
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <Input
              className="flex-1"
              value={taskTitle}
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />
            <div className="flex gap-1">
              <ButtonIcon
                icon={XIcon}
                variant="secundary"
                onClick={handleExitEditTaskt}
                type="button"
              />
              <ButtonIcon icon={CheckIcon} variant="primary" type="submit" handling={isUpdatingTask} />
            </div>
          </form>
        </>
      )}
    </Card>
  )
}

import React from "react";

import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from '../assets/icons/trash.svg?react'
import PencilIcon from '../assets/icons/pencil.svg?react'
import XIcon from '../assets/icons/x.svg?react'
import CheckIcon from '../assets/icons/check.svg?react'
import Input from "../components/input";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-single-task";

interface TaskItemProps {
  task: Task
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

  const [taskTitle, setTaskTitle] = React.useState('')

  const { updateTask } = useTask()

  function handleEditTaskt() {
    setIsEditing(true)
  }
  function handleExitEditTaskt() {
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '')
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }

  return (

    <Card size="md">
      {!isEditing ?
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            value={task?.concluded?.toString()}
          />
          <Text className={cx('flex-1', {
            'line-through': task?.concluded
          })}> {task?.title} </Text>
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              type="button"
            />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTaskt}
              type="button"
            />
          </div>
        </div>
        :
        <>
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <Input className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
            <div className="flex gap-1">
              <ButtonIcon
                icon={XIcon}
                variant="secundary"
                onClick={handleExitEditTaskt}
                type="button"
              />
              <ButtonIcon icon={CheckIcon} variant="primary" type="submit" />
            </div>
          </form>
        </>
      }
    </Card>

  )
}
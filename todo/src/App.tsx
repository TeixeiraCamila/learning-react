import Text from "./components/text"
import Icon from "./components/icon"
import TrashIcon from "./assets/icons/trash.svg?react"
import CheckIcon from "./assets/icons/check.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import Badge from "./components/badge"
import Button from "./components/button"
import ButtonIcon from "./components/button-icon"
import InputText from "./components/input"
import InputCheckbox from "./components/input-checkbox"
import Card from "./components/card"
import Container from "./components/container"
import Skeleton from "./components/skeleton"
export default function App() {

  return (

    <Container>
      <div className="grid gap-10">

        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base"> Olá, mundo</Text>
          <Text className="text-green-base"> Olá, mundo</Text>
          <Text variant="body-md-bold" > Olá, mundo</Text>
          <Text> Levar dog para passear</Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} className="fill-pink-base" />
          <Icon svg={PencilIcon} className="fill-green-base" />
          <Icon svg={PlusIcon} className="fill-pink-base" />
          <Icon svg={SpinnerIcon} className="fill-green-base" animate />
        </div>
        <div className="flex gap-2">
          <Badge variant="primary">5</Badge>
          <Badge variant="secundary" >2 de 5</Badge>
          <Badge variant="secundary" loading>5</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>

        </div>
        <div className="flex gap-2">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant={"secundary"} />
          <ButtonIcon icon={TrashIcon} variant={"tertiary" } />
          <ButtonIcon icon={TrashIcon} loading  />
        </div>
        <div>
          <Card size={'md'}>
            <InputText />
          </Card>

        </div>
        <div>
          <Card size={'md'}>
            <InputCheckbox />
            <InputCheckbox loading />
          </Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-5"/>
          <Skeleton className="h-5"/>
          <Skeleton className="w-96 h-5"/>
          <Skeleton className="h-5"/>
        </div>
      </div>
    </Container>
  )
}


import Text from './Text'

export default function List() {
  return (
    <div className="flex flex-1 p-20">
      <div className='flex'>
        <div>
          <Text className="text-2xl text-gray-100" variant={'title-lg'}>
          Sua agenda
        </Text>
        <Text className="text-gray-300" variant={'body-sm'}>
          Consulte os seus cortes de cabelo agendados por dia
        </Text>
        </div>
        <div>
          aqui vai um select com as datas cadastradas
        </div>
      </div>
    </div>
  )
}

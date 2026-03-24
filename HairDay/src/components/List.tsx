import { useState } from 'react'
import Text from './Text'
import { useAppointment, type Appointment } from '../core/hooks/useAppointment'
import DateSelect from './ui/DateSelect'
import PeriodSection from './ui/PeriodSection'

const periods: { key: Appointment['period']; label: string }[] = [
  { key: 'morning', label: 'Manhã' },
  { key: 'afternoon', label: 'Tarde' },
  { key: 'evening', label: 'Noite' },
]

export default function List() {
  const { getAppointmentsByDate, removeAppointment } = useAppointment()
  const [selectedDate, setSelectedDate] = useState('')
  
  const appointmentsForDate = selectedDate ? getAppointmentsByDate(selectedDate) : []

  const getAppointmentsByPeriod = (period: Appointment['period']) => {
    return appointmentsForDate.filter(a => a.period === period)
  }

  return (
    <div className="flex flex-1 p-20">
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <Text className="text-2xl text-gray-100" variant={'title-lg'}>
              Sua agenda
            </Text>
            <Text className="text-gray-300" variant={'body-sm'}>
              Consulte os seus cortes de cabelo agendados por dia
            </Text>
          </div>
          <div className="w-64">
            <DateSelect value={selectedDate} onChange={setSelectedDate} />
          </div>
        </div>

        {!selectedDate ? (
          <div className="text-gray-500 text-center py-8">
            Selecione uma data para ver os agendamentos
          </div>
        ) : (
          periods.map((period) => (
            <PeriodSection
              key={period.key}
              period={period.key}
              label={period.label}
              appointments={getAppointmentsByPeriod(period.key)}
              onDelete={removeAppointment}
            />
          ))
        )}
      </div>
    </div>
  )
}
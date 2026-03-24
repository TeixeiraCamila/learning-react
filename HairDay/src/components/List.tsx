import { JSX, useState } from 'react'
import Text from './Text'
import { useAppointment, type Appointment, formatDateToBR } from '../core/hooks/useAppointment'
import MorningIcon from '../assets/icons/Morning-Icon.svg?react'
import EveningIcon from '../assets/icons/Evening-Icon.svg?react'
import AfternoonIcon from '../assets/icons/Afternoon-Icon.svg?react'
import CalendarIcon from '../assets/icons/Calendar-Icon.svg?react'



interface PeriodInfo {
  key: Appointment['period']
  label: string
  icon: JSX.Element
}

const periods: PeriodInfo[] = [
  { key: 'morning', label: 'Manhã', icon: <MorningIcon /> },
  { key: 'afternoon', label: 'Tarde', icon: <AfternoonIcon /> },
  { key: 'evening', label: 'Noite', icon: <EveningIcon /> },
]

export default function List() {
  const { getAppointmentsByDate, removeAppointment, getUniqueDates } = useAppointment()
  const [selectedDate, setSelectedDate] = useState('')
  
  const uniqueDates = getUniqueDates()
  const appointmentsForDate = selectedDate ? getAppointmentsByDate(selectedDate) : []

  const getAppointmentsByPeriod = (period: Appointment['period']) => {
    return appointmentsForDate
      .filter(a => a.period === period)
      .sort((a, b) => a.time.localeCompare(b.time))
  }

  return (
    <div className="flex flex-1 p-20">
      <div className="flex-1 space-y-6">
        <div className='flex justify-between'>
          <div>
          <Text className="text-2xl text-gray-100" variant={'title-lg'}>
            Sua agenda
          </Text>
          <Text className="text-gray-300" variant={'body-sm'}>
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <div className="relative flex items-center gap-2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <CalendarIcon className="w-5 h-5" />
          </span>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-gray-600 border border-gray-500 rounded-lg pl-10 pr-4 py-3 text-gray-100 outline-none focus:border-orange-500"
          >
            <option value="">Selecione uma data</option>
            {uniqueDates.map(date => (
              <option key={date} value={date}>
                {formatDateToBR(date)}
              </option>
            ))}
          </select>
        </div>
        </div>

        {!selectedDate ? (
          <div className="text-gray-500 text-center py-8">
            Selecione uma data para ver os agendamentos
          </div>
        ) : (
          periods.map((period) => {
            const periodAppointments = getAppointmentsByPeriod(period.key)
            
            return (
              <div key={period.key} className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <span>{period.icon}</span>
                  <span className="text-sm font-medium">{period.label}</span>
                </div>
                
                {periodAppointments.length === 0 ? (
                  <div className="text-gray-500 text-sm py-2">
                    Nenhum agendamento
                  </div>
                ) : (
                  <div className="space-y-2">
                    {periodAppointments.map((apt) => (
                      <div 
                        key={apt.id} 
                        className="flex justify-between items-center bg-gray-600 p-3 rounded-lg border border-gray-500"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-orange-400 font-medium">{apt.time}</span>
                          <span className="text-gray-100">{apt.clientName}</span>
                        </div>
                        <button
                          onClick={() => removeAppointment(apt.id)}
                          className="text-gray-400 hover:text-red-400 text-sm"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
import { useState } from 'react'
import Text from './Text'
import { useAppointment, type Appointment } from '../core/hooks/useAppointment'

interface PeriodInfo {
  key: Appointment['period']
  label: string
  icon: string
}

const periods: PeriodInfo[] = [
  { key: 'morning', label: 'Manhã', icon: '☀️' },
  { key: 'afternoon', label: 'Tarde', icon: '🌤️' },
  { key: 'evening', label: 'Noite', icon: '🌙' },
]

export default function List() {
  const { getAppointmentsByDate, removeAppointment } = useAppointment()
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  
  const appointmentsForDate = getAppointmentsByDate(selectedDate)

  const getAppointmentsByPeriod = (period: Appointment['period']) => {
    return appointmentsForDate
      .filter(a => a.period === period)
      .sort((a, b) => a.time.localeCompare(b.time))
  }

  return (
    <div className="flex flex-1 p-20">
      <div className="flex-1 space-y-6">
        <div>
          <Text className="text-2xl text-gray-100" variant={'title-lg'}>
            Sua agenda
          </Text>
          <Text className="text-gray-300" variant={'body-sm'}>
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-gray-600 border border-gray-500 rounded-lg px-10 py-3 text-gray-100 outline-none focus:border-orange-500"
          />
        </div>

        {periods.map((period) => {
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
        })}
      </div>
    </div>
  )
}
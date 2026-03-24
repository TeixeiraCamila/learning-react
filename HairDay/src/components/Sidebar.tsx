import { useState, FormEvent } from 'react'
import Text from './Text'
import { useAppointment, type Appointment } from '../core/hooks/useAppointment'

interface PeriodOption {
  key: Appointment['period']
  label: string
  icon: string
  hours: string[]
}

const periods: PeriodOption[] = [
  { key: 'morning', label: 'Manhã', icon: '☀️', hours: ['09:00', '10:00', '11:00', '12:00'] },
  { key: 'afternoon', label: 'Tarde', icon: '🌤️', hours: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'] },
  { key: 'evening', label: 'Noite', icon: '🌙', hours: ['19:00', '20:00', '21:00'] },
]

export default function Sidebar() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState<Appointment['period'] | null>(null)
  const [clientName, setClientName] = useState('')
  
  const { createAppointment } = useAppointment()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime || !selectedPeriod || !clientName) {
      alert('Por favor, preencha todos os campos')
      return
    }

    createAppointment({
      date: selectedDate,
      time: selectedTime,
      period: selectedPeriod,
      clientName
    })

    setSelectedDate('')
    setSelectedTime('')
    setSelectedPeriod(null)
    setClientName('')
  }

  return (
    <div className="bg-gray-700 p-20 rounded-xl w-124">
      <Text className="text-2xl text-gray-100" variant={'title-lg'}>
        Agende um atendimento
      </Text>
      <Text className="text-gray-300" variant={'body-sm'}>
        Selecione data, horário e informe o nome do cliente para criar o agendamento
      </Text>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div className="space-y-2">
          <label className="text-gray-300 text-sm">Data</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-gray-600 border border-gray-500 rounded-lg px-10 py-3 text-gray-100 placeholder-gray-400 outline-none focus:border-orange-500"
              placeholder="Selecione uma data"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-gray-300 text-sm">Horário</label>
          {periods.map((period) => (
            <div key={period.key} className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span>{period.icon}</span>
                <span className="text-sm font-medium">{period.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {period.hours.map((hour) => (
                  <button
                    key={hour}
                    type="button"
                    onClick={() => {
                      setSelectedTime(hour)
                      setSelectedPeriod(period.key)
                    }}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedTime === hour && selectedPeriod === period.key
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-600 text-gray-300 border border-gray-500 hover:bg-gray-500'
                    }`}
                  >
                    {hour}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-gray-300 text-sm">Cliente</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">👤</span>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-gray-600 border border-gray-500 rounded-lg px-10 py-3 text-gray-100 placeholder-gray-400 outline-none focus:border-orange-500"
              placeholder="Digite o nome do cliente"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
        >
          Agendar
        </button>
      </form>
    </div>
  )
}
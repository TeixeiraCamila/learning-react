import { useState } from 'react'
import Text from '../components/Text'
import { TimeButton, ButtonProps } from '../components/Button'
import { formatDateToBR } from '../core/hooks/useAppointment'
import DateSelect from '../components/ui/DateSelect'
import PeriodHeader from '../components/ui/PeriodHeader'
import AppointmentCard from '../components/ui/AppointmentCard'
import PeriodSection from '../components/ui/PeriodSection'
import type { Appointment } from '../core/hooks/useAppointment'

import UserIcon from '../assets/icons/User-Icon.svg?react'

const buttonVariants: ButtonProps['variant'][] = ['default', 'selected', 'unavailable']
const textVariants = ['body-sm-bold', 'body-sm', 'body-md', 'body-md-bold', 'title-lg'] as const

const periods: { key: Appointment['period']; label: string }[] = [
  { key: 'morning', label: 'Manhã' },
  { key: 'afternoon', label: 'Tarde' },
  { key: 'evening', label: 'Noite' },
]

const mockAppointment: Appointment = {
  id: '1',
  date: '2026-03-24',
  time: '09:00',
  period: 'morning',
  clientName: 'João Silva',
  createdAt: '2026-03-24T10:00:00.000Z'
}

export default function ComponentsPage() {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-gray-100 mb-4">Componentes</h1>

      <section className="space-y-4">
        <Text variant="title-lg">Text</Text>
        <p className="text-gray-400 text-sm">Componente de texto com variantes</p>
        <div className="flex flex-wrap gap-4 p-6 bg-gray-800 rounded-lg">
          {textVariants.map((variant) => (
            <div key={variant} className="space-y-2 flex flex-col items-start">
              <Text variant={variant}>Exemplo</Text>
              <code className="text-xs text-gray-500">{variant}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">Button (TimeButton)</Text>
        <p className="text-gray-400 text-sm">Botões com variantes de estado</p>
        <div className="flex flex-wrap gap-4 items-center p-6 bg-gray-800 rounded-lg">
          {buttonVariants.map((variant) => (
            <div key={variant} className="space-y-2">
              <TimeButton variant={variant}>09:00</TimeButton>
              <code className="text-xs text-gray-500 block text-center">{variant}</code>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-center p-6 bg-gray-800 rounded-lg">
          {buttonVariants.map((variant) => (
            <div key={variant} className="space-y-2">
              <TimeButton variant={variant} disabled>09:00</TimeButton>
              <code className="text-xs text-gray-500 block text-center">{variant} + disabled</code>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">DateSelect</Text>
        <p className="text-gray-400 text-sm">Select de datas com ícone</p>
        <div className="p-6 bg-gray-800 rounded-lg w-64">
          <DateSelect value={selectedDate} onChange={setSelectedDate} />
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">PeriodHeader</Text>
        <p className="text-gray-400 text-sm">Cabeçalho de período com ícone</p>
        <div className="flex flex-wrap gap-4 p-6 bg-gray-800 rounded-lg">
          {periods.map((period) => (
            <div key={period.key} className="space-y-2">
              <PeriodHeader period={period.key} label={period.label} />
              <code className="text-xs text-gray-500 block text-center">{period.key}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">AppointmentCard</Text>
        <p className="text-gray-400 text-sm">Card de appointment com hora, nome e delete</p>
        <div className="p-6 bg-gray-800 rounded-lg max-w-md">
          <AppointmentCard appointment={mockAppointment} onDelete={() => {}} />
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">PeriodSection</Text>
        <p className="text-gray-400 text-sm">Seção completa de período com header + lista</p>
        <div className="p-6 bg-gray-800 rounded-lg max-w-md space-y-4">
          <PeriodSection
            period="morning"
            label="Manhã"
            appointments={[mockAppointment]}
            onDelete={() => {}}
          />
          <PeriodSection
            period="afternoon"
            label="Tarde"
            appointments={[]}
            onDelete={() => {}}
          />
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">Date Format</Text>
        <p className="text-gray-400 text-sm">Função de formatação de data</p>
        <div className="p-6 bg-gray-800 rounded-lg space-y-2">
          <Text variant="body-md">2026-03-24 → {formatDateToBR('2026-03-24')}</Text>
          <Text variant="body-md">2026-12-25 → {formatDateToBR('2026-12-25')}</Text>
          <Text variant="body-md">'' → '{formatDateToBR('')}'</Text>
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">Input Date</Text>
        <p className="text-gray-400 text-sm">Datepicker nativo</p>
        <div className="p-6 bg-gray-800 rounded-lg">
          <input
            type="date"
            className="bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-gray-100 outline-none focus:border-orange-500"
          />
        </div>
      </section>

      <section className="space-y-4">
        <Text variant="title-lg">Input Text</Text>
        <p className="text-gray-400 text-sm">Input de texto com ícone</p>
        <div className="p-6 bg-gray-800 rounded-lg">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><UserIcon/></span>
            <input
              type="text"
              placeholder="Digite o nome do cliente"
              className="w-full bg-gray-600 border border-gray-500 rounded-lg px-10 py-3 text-gray-100 placeholder-gray-400 outline-none focus:border-orange-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
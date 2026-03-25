import PeriodHeader from './PeriodHeader'
import AppointmentCard from './AppointmentCard'
import type { Appointment } from '../../core/hooks/useAppointment'

interface PeriodSectionProps {
  period: Appointment['period']
  label: string
  appointments: Appointment[]
  onDelete: (id: string) => void
}

export default function PeriodSection({
  period,
  label,
  appointments,
  onDelete,
}: PeriodSectionProps) {
  const sortedAppointments = [...appointments].sort((a, b) =>
    a.time.localeCompare(b.time)
  )

  return (
    <div>
      <PeriodHeader period={period} label={label} />

      {sortedAppointments.length === 0 ? (
        <div className="text-gray-500 text-sm py-2">Nenhum agendamento</div>
      ) : (
        <div className="space-y-2">
          {sortedAppointments.map((apt) => (
            <AppointmentCard
              key={apt.id}
              appointment={apt}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

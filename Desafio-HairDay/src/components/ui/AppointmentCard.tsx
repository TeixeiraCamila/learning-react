import DeleteIcon from '../../assets/icons/Delete-Icon.svg?react'
import type { Appointment } from '../../core/hooks/useAppointment'
import Text from '../Text'
interface AppointmentCardProps {
  appointment: Appointment
  onDelete: (id: string) => void
}

export default function AppointmentCard({
  appointment,
  onDelete,
}: AppointmentCardProps) {
  return (
    <div className=" border border-gray-200 rounded-bl-lg rounded-br-lg p-5 flex items-center justify-between">
      <div className="flex gap-2">
        <Text variant="body-md">{appointment.time}</Text>
        <Text variant="body-md">{appointment.clientName}</Text>
      </div>
      <button onClick={() => onDelete(appointment.id)}>
        <DeleteIcon />
      </button>
    </div>
  )
}

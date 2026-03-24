import DeleteIcon from '../../assets/icons/Delete-Icon.svg?react'
import type { Appointment } from '../../core/hooks/useAppointment'

interface AppointmentCardProps {
  appointment: Appointment
  onDelete: (id: string) => void
}

export default function AppointmentCard({ appointment, onDelete }: AppointmentCardProps) {
  return (
    <div className="flex justify-between items-center bg-gray-600 p-3 rounded-lg border border-gray-500">
      <div className="flex items-center gap-3">
        <span className="text-orange-400 font-medium">{appointment.time}</span>
        <span className="text-gray-100">{appointment.clientName}</span>
      </div>
      <button
        onClick={() => onDelete(appointment.id)}
        className="text-gray-100 hover:text-red-400 text-sm"
      >
        <DeleteIcon />
      </button>
    </div>
  )
}
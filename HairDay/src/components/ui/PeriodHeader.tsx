import MorningIcon from '../../assets/icons/Morning-Icon.svg?react'
import EveningIcon from '../../assets/icons/Evening-Icon.svg?react'
import AfternoonIcon from '../../assets/icons/Afternoon-Icon.svg?react'
import type { Appointment } from '../../core/hooks/useAppointment'

interface PeriodHeaderProps {
  period: Appointment['period']
  label: string
}

const icons = {
  morning: <MorningIcon />,
  afternoon: <AfternoonIcon />,
  evening: <EveningIcon />,
}

export default function PeriodHeader({ period, label }: PeriodHeaderProps) {
  return (
    <div className="flex items-center gap-2 text-gray-300">
      <span>{icons[period]}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
import MorningIcon from '../../assets/icons/Morning-Icon.svg?react'
import EveningIcon from '../../assets/icons/Evening-Icon.svg?react'
import AfternoonIcon from '../../assets/icons/Afternoon-Icon.svg?react'
import type { Appointment } from '../../core/hooks/useAppointment'
import Text from '../Text'
interface PeriodHeaderProps {
  period: Appointment['period']
  label: string
}

const icons = {
  morning: <MorningIcon />,
  afternoon: <AfternoonIcon />,
  evening: <EveningIcon />,
}

const time = {
  morning: '09h-12h',
  afternoon: '13h-18h',
  evening: '19h-21h',
}

export default function PeriodHeader({ period, label }: PeriodHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-2 border border-gray-200 rounded-tl-lg rounded-tr-lg  p-3">
      <div className="flex items-center gap-2">
        <span>{icons[period]}</span>
        <Text variant="body-sm" className="text-gray-300">
          {label}
        </Text>
      </div>
      <Text variant="body-sm" className="text-gray-300">
        ({time[period]})
      </Text>
    </div>
  )
}

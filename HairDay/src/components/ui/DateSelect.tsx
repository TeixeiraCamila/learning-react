import { useMemo } from 'react'
import { useAppointment, formatDateToBR } from '../../core/hooks/useAppointment'
import CalendarIcon from '../../assets/icons/Calendar-Icon.svg?react'
interface DateSelectProps {
  value: string
  onChange: (value: string) => void
}

export default function DateSelect({ value, onChange }: DateSelectProps) {
  const { appointments } = useAppointment()
  const uniqueDates = useMemo(() => {
    const dates = [...new Set(appointments.map(a => a.date))]
    return dates.sort((a, b) => b.localeCompare(a))
  }, [appointments])

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <CalendarIcon />
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
  )
}
import { useAppointment, formatDateToBR } from '../../core/hooks/useAppointment'

interface DateSelectProps {
  value: string
  onChange: (value: string) => void
}

export default function DateSelect({ value, onChange }: DateSelectProps) {
  const { getUniqueDates } = useAppointment()
  const uniqueDates = getUniqueDates()

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
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
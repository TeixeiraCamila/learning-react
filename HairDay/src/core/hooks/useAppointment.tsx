import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface Appointment {
  id: string
  date: string
  time: string
  period: 'morning' | 'afternoon' | 'evening'
  clientName: string
  createdAt: string
}

const STORAGE_KEY = 'hairday_appointments'

const getAppointmentsFromStorage = (): Appointment[] => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

const saveAppointmentsToStorage = (appointments: Appointment[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments))
}

interface AppointmentContextType {
  appointments: Appointment[]
  createAppointment: (data: Omit<Appointment, 'id' | 'createdAt'>) => Appointment
  removeAppointment: (id: string) => void
  getAppointmentsByDate: (date: string) => Appointment[]
  isTimeAvailable: (date: string, time: string, period: Appointment['period']) => boolean
  getUniqueDates: () => string[]
}

const AppointmentContext = createContext<AppointmentContextType | null>(null)

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>(() => getAppointmentsFromStorage())

  const createAppointment = useCallback((data: Omit<Appointment, 'id' | 'createdAt'>) => {
    const newAppointment: Appointment = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    }
    
    const updated = [...appointments, newAppointment]
    saveAppointmentsToStorage(updated)
    setAppointments(updated)
    
    return newAppointment
  }, [appointments])

  const removeAppointment = useCallback((id: string) => {
    const updated = appointments.filter(a => a.id !== id)
    saveAppointmentsToStorage(updated)
    setAppointments(updated)
  }, [appointments])

  const getAppointmentsByDate = useCallback((date: string) => {
    return appointments.filter(a => a.date === date)
  }, [appointments])

  const isTimeAvailable = useCallback((date: string, time: string, period: Appointment['period']) => {
    return !appointments.some(a => 
      a.date === date && 
      a.time === time && 
      a.period === period
    )
  }, [appointments])

  const getUniqueDates = useCallback(() => {
    const dates = [...new Set(appointments.map(a => a.date))]
    return dates.sort().reverse()
  }, [appointments])

  return (
    <AppointmentContext.Provider value={{
      appointments,
      createAppointment,
      removeAppointment,
      getAppointmentsByDate,
      isTimeAvailable,
      getUniqueDates
    }}>
      {children}
    </AppointmentContext.Provider>
  )
}

export function useAppointment() {
  const context = useContext(AppointmentContext)
  if (!context) {
    throw new Error('useAppointment must be used within AppointmentProvider')
  }
  return context
}

export const formatDateToBR = (date: string): string => {
  if (!date) return ''
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
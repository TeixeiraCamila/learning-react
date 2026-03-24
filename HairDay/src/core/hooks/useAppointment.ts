import { useState, useCallback, useEffect } from 'react'

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

export function useAppointment() {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    setAppointments(getAppointmentsFromStorage())
  }, [])

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

  return {
    appointments,
    createAppointment,
    removeAppointment,
    getAppointmentsByDate
  }
}
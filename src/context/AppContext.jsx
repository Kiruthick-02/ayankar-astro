import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [state, setState] = useState({
    isLoading: false,
    notification: null,
    bookingData: null,
    userPreferences: {
      theme: 'dark',
      language: 'en'
    }
  })

  const setLoading = useCallback((isLoading) => {
    setState(prev => ({ ...prev, isLoading }))
  }, [])

  const showNotification = useCallback((message, type = 'info') => {
    setState(prev => ({ ...prev, notification: { message, type } }))
    setTimeout(() => {
      setState(prev => ({ ...prev, notification: null }))
    }, 5000)
  }, [])

  const setBookingData = useCallback((data) => {
    setState(prev => ({ ...prev, bookingData: data }))
  }, [])

  const updateUserPreference = useCallback((key, value) => {
    setState(prev => ({
      ...prev,
      userPreferences: { ...prev.userPreferences, [key]: value }
    }))
  }, [])

  const value = {
    ...state,
    setLoading,
    showNotification,
    setBookingData,
    updateUserPreference
  }

  return (
    <AppContext.Provider value={value}>
      {children}
      {/* Notification Toast */}
      {state.notification && (
        <div className={`fixed bottom-4 right-4 z-50 px-6 py-4 rounded-xl glass shadow-lg transform transition-all duration-300 ${
          state.notification.type === 'error' ? 'border-l-4 border-red-500' :
          state.notification.type === 'success' ? 'border-l-4 border-green-500' :
          'border-l-4 border-amber-400'
        }`}>
          <p className="text-white font-medium">{state.notification.message}</p>
        </div>
      )}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
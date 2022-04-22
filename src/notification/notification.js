import { useState, createContext, useContext } from 'react'

const Notification = ({ message }) => {
    return(
        <div>
          {message}
        </div>
      )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')


    const setNotification = ( msg ) => {
        setMessage(msg)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message}/>
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotification = () => {
    return useContext(NotificationContext)
}
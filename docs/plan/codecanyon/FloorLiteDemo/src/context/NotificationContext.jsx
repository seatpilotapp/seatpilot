import React, { createContext, useContext, useState} from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({children}) => {

  const [notification, setNotification] = useState({content: null, type: '', keyboard: null})

  const notify = ({content, type = "", autoHide = true, keyboard = null }) => {
    setNotification({content, type, autoHide, keyboard})
    if(autoHide) {
      setTimeout(() => setNotification({content: null, type: ''}), 5000)
    }
  }

  const notificationClass = () => {
    switch(notification.type) {
      case "warning": 
        return "bg-yellow-100 text-yellow-700"
      case "error": 
        return "bg-red-100 text-red-800"
      default :
        return "bg-white text-slate-600"
    }
  }

  return(
    <NotificationContext.Provider value={notify}>
      {notification.content && (
        <div className='absolute top-6 left-1/2 -translate-x-1/2'>
        <div className={`p-1 px-3 shadow-md rounded-md ${notificationClass()}`}>
            <div className='flex gap-1 justify-center items-center h-8 rounded'>
              <span className='text-xs '> {notification.content} </span>
              {notification.keyboard && 
              <div className='text-xs bg-gray-50 border rounded-md px-1 py-0.5 font-medium'>
                {notification.keyboard}
              </div>
              } 
            </div>
        </div>
      </div>
      )}
      {children}
    </NotificationContext.Provider>
  )

}
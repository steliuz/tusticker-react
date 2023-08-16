import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notificationTypes = {
	info: 'info',
	success: 'success',
	warning: 'warning',
	error: 'error'
}

export const showNotification = (msg, type = 'error') => {
  const notificationType = notificationTypes[type] || 'error'

	toast[notificationType](`${msg}`, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined
	})
}

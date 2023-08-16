import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp.jsx'
import { ToastContainer } from 'react-toastify'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div>
			<ToastContainer />
			<GifExpertApp />
		</div>
	</React.StrictMode>
)


import { useState } from 'react'

export const useLightBox = () => {
	const [viewUrlLarge, setviewUrlLarge] = useState('')
	const [isLightboxOpen, setIsLightboxOpen] = useState(false)

	const openLightbox = (payload) => {
		setviewUrlLarge(payload)
		setIsLightboxOpen(true)
	}

	const closeLightbox = () => {
		setviewUrlLarge('')
		setIsLightboxOpen(false)
	}
	return { viewUrlLarge, isLightboxOpen, openLightbox, closeLightbox }
}

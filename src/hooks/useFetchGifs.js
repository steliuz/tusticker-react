import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { downloadFile } from '../helpers/downloadFiles'
import { groupDeletionSuccess, searchError } from '../helpers/messages'
import { showNotification } from '../helpers/notification'

export const useFetchGifs = (payload) => {
	const { category, type = 'stickers', currentPage, removeCategory } = payload
	const [images, setImages] = useState({ data: [], pagination: {} })
	const [isLoading, setIsLoading] = useState(true)

	const getImages = async () => {
		let newImages = await getGifs(category, type, currentPage)

		setIsLoading(true)
		setTimeout(async () => {
			newImages = await getGifs(category, type, currentPage)
			if (newImages.data.length > 0) {
				setImages(newImages)
			} else {
				setTimeout(() => {
					removeImages([])
					noFoundCategory()
				}, 1000)
			}
			setIsLoading(false)
		}, 1000)
	}

	const noFoundCategory = () => {
		removeCategory(category)
		showNotification(searchError, 'error')
	}
	const handleRemoveCategory = () => {
		removeCategory(category)
		showNotification(groupDeletionSuccess, 'info')
	}

	useEffect(() => {
		getImages(category, type)
	}, [category, type])

	const removeImg = (id) => {
		const updatedImages = images.filter((image) => image.id !== id)
		setImages(updatedImages)
	}
	const removeImages = () => {
		setImages([])
	}
	const handleDownload = (payload) => {
		downloadFile(payload)
	}

	return {
		images,
		isLoading,
		removeImg,
		handleDownload,
		getImages,
		handleRemoveCategory
	}
}

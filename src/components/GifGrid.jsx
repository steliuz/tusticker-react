import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { LightBox } from './LightBox'
import { useLightBox } from '../hooks/useLightBox'
import Pagination from './Pagination'
import {LoadingComponent} from './LoadingComponent'


export const GifGrid = ({ category, type, removeCategory }) => {
	const [currentPage, setCurrentPage] = useState(0)

	const { viewUrlLarge, isLightboxOpen, openLightbox, closeLightbox } =
		useLightBox()

	const {
		images,
		isLoading,
		removeImg,
		handleDownload,
		getImages,
		handleRemoveCategory
	} = useFetchGifs({
		category,
		type,
		currentPage,
		removeCategory
	})

	useEffect(() => {
		if (images?.data?.length) {
			getImages(category, type, currentPage)
		}
	}, [currentPage])

	return (
		<>
			<div className="box-title">
				<p className="title-category">{category}</p>
				<button className="button-delete" onClick={handleRemoveCategory}>
					Eliminar lista
				</button>
			</div>
			{isLoading && <LoadingComponent />}

			{isLightboxOpen && (
				<LightBox
					dataImage={viewUrlLarge}
					onClose={closeLightbox}
					openWeb={handleDownload}
				></LightBox>
			)}

			<div className="box-cards">
				{images &&
					images.data &&
					images.data.map((image) => (
						<GifGridItem
							key={image.id}
							{...image}
							onRemoveImg={removeImg}
							openWeb={handleDownload}
							openFull={openLightbox}
						/>
					))}
			</div>
			{images && (
				<Pagination
					currentPage={currentPage}
					images={images}
					onPageChange={setCurrentPage}
				/>
			)}
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
	type: PropTypes.string,
	removeCategory: PropTypes.func
}

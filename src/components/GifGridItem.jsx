import PropTypes from 'prop-types'

export const GifGridItem = ({
	title,
	url,
	id,
	url_large,
	onRemoveImg,
	openWeb,
	openFull
}) => {
	const remove = () => {
		onRemoveImg(id)
	}
	const downloadImage = () => {
		openWeb({ title, url_large })
	}
	const fullView = () => {
		openFull({title,url_large})
	}
	return (
		<div className="card">
			<div className="position-delete">
				<div>
					<button className="button-download" onClick={downloadImage}>
						<img src="/img/descargas.png" alt="download" />
					</button>
				</div>
				<button className="button-delete" onClick={remove}>
					X
				</button>
			</div>
			<img className="imgCard" src={url} alt={title} onClick={fullView} />
			<p>{title}</p>
		</div>
	)
}

GifGridItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	url_large: PropTypes.string.isRequired,
	onRemoveImg: PropTypes.func,
	openWeb: PropTypes.func,
	openFull: PropTypes.func
}

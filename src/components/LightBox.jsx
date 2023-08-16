import PropTypes from 'prop-types'

export const LightBox = ({ dataImage, onClose, openWeb }) => {
	const downloadImage = () => {
		openWeb(dataImage)
	}
	return (
		<div className="lightbox">
			<div className="cardImg">
				<button className="close" onClick={onClose}>
					X
				</button>
				<p className='nameImage'>{dataImage.title}</p>

				<img src={dataImage.url_large} alt="img" />
				<button className="download" onClick={downloadImage}>
					Descargar
				</button>
			</div>
		</div>
	)
}

LightBox.defaultProps = {
	title: 'Default Text'
}

LightBox.propTypes = {
	dataImage: PropTypes.object,
	title: PropTypes.string,
	openWeb: PropTypes.func,
	onClose: PropTypes.func
}

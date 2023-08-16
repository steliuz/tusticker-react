import PropTypes from 'prop-types'

const Pagination = ({ currentPage, images, onPageChange }) => {
	const visiblePageRange = 8
	const itemsPerPage = 10
	let totalPages

	if (images) {
		const totalImage = images.pagination.total_count
		totalPages = Math.ceil(totalImage / itemsPerPage)
	}

	let startPage = Math.max(1, currentPage - Math.floor(visiblePageRange / 2))
	let endPage = Math.min(totalPages, startPage + visiblePageRange - 1)
	return (
		<div className="pagination">
			{Array.from({ length: endPage - startPage + 1 }, (_, index) => (
				<button
					key={index + startPage}
					onClick={() => onPageChange(index + startPage - 1)}
					className={currentPage === index + startPage - 1 ? 'active' : ''}
				>
					{index + startPage}
				</button>
			))}
		</div>
	)
}

export default Pagination
Pagination.propTypes = {
	currentPage: PropTypes.number,
	images: PropTypes.any,
	onPageChange: PropTypes.func
}

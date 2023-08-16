export const getGifs = async (category, type, currentPage) => {
	const offset = currentPage * 10
	const url = `https://api.giphy.com/v1/${type}/search?api_key=gjBthaYv8jleeD93uX060Ys8QTCtGRGv&q=${category}&limit=10&offset=${offset}`
	const resp = await fetch(url)

	const { data = [], pagination = {} } = await resp.json()

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
		url_large: img.images.original.url
	}))
	const payload = {
		data: gifs,
		pagination: pagination
	}
	return payload
}

export const downloadFile = async (payload) => {
	const { title, url_large } = payload
	console.log('title: ', title);
	let fixTitle = title.replace(/\s+/g, '_')

	try {
		const response = await fetch(url_large, {
			method: 'GET',
			headers: {}
		})
		const buffer = await response.arrayBuffer()
		const urlFile = window.URL.createObjectURL(new Blob([buffer]))
		const link = document.createElement('a')
		link.href = urlFile
		link.setAttribute('download', `${fixTitle}.gif`)
		document.body.appendChild(link)
		link.click()
	} catch (error) {
		console.log(error)
	}
}

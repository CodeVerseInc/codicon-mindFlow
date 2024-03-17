export async function getData(url: string) {
	const res = await fetch(url)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export async function getFirstTenData(url: string) {
	const data = await getData(url)
	const firstTenData = data.slice(0, 10)
	return firstTenData
}

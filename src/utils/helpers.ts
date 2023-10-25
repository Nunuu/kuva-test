export function convertToDateTime(timestamp: string) {
	const dateObject = new Date(timestamp);
	return dateObject.toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZoneName: 'short',
	});
}

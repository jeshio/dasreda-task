export default function getMonthAgoDate() {
	// a month ago
	const date = new Date();
	date.setMonth(date.getMonth() - 1);
	// format YYYY-MM-DD
	return `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(
		2,
		'0'
	)}-${date
		.getDate()
		.toString()
		.padStart(2, '0')}`;
}

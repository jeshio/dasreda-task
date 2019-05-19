export default function debounce(f, delay) {
	let timer = null;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(f.bind(f, ...args), delay);
	};
}

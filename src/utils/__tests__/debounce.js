import debounce from '../debounce';

describe('debounce', () => {
	it('should runs after delay', () => {
		jest.useFakeTimers();
		let text = '';
		const callback = () => {
			text = 'text';
		};

		debounce(callback, 500)();

		expect(text).toEqual('');

		jest.runAllTimers();

		expect(text).toEqual('text');
	});

	it('should runs in the same context', () => {
		function checkThis() {
			expect(this).not.toEqual(window);
		}

		debounce(checkThis, 500)();

		jest.runAllTimers();
	});

	it('should save arguments', () => {
		let text = '';
		const callback = (newText, secondPart) => {
			text = newText + secondPart;
		};

		debounce(callback, 500)('is', 'new');

		jest.runAllTimers();

		expect(text).toEqual('isnew');
	});
});

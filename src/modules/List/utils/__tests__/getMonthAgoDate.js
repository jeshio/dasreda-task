import getMonthAgoDate from '../getMonthAgoDate';

describe('getMonthAgoDate', () => {
	it('should return "YYYY-MM-DD" format date', () => {
		const date = getMonthAgoDate();
		expect(date).toEqual(expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/));
	});
});

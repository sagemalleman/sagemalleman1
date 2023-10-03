// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 response code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
});
expect(actualstatusCode).toBe(200);

test('Body should contain "ok" : true', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}


	expect(actualResponseBody.ok).toBe(true));
});


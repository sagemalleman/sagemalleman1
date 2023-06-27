// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {  {
	"id": 1,
	"userId": 1,
	"productsList": [
	  {
		"id": 1,
		"quantity": 1
	  }
	],
	"deliveryTime": 1
  }}

test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
});
expect(actualStatusCode).toBe(200);


const config = require('../config');

const requestBody = {  {
	"id": 1,
	"userId": 1,
	"productsList": [
	  {
		"id": 1,
		"quantity": 1
	  }
	],
	"deliveryTime": 1
  }}

test('Response Body should contain "ok" : true'), async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
});
expect(actualResponseBody.courierService).toBe("Order and Go");
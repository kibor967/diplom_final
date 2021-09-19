export const fetchProduct = async ({ keyUser }) => {
	const response = await fetch(
		`https://users-eca7f-default-rtdb.europe-west1.firebasedatabase.app/users/${keyUser}/user/products.json`
	);
	return response.json();
};

export const removeProduct = async ({ key, keyUser }) => {
	const response = await fetch(
		`https://users-eca7f-default-rtdb.europe-west1.firebasedatabase.app/users/${keyUser}/user/products/${key}.json`,
		{
			method: 'DELETE',
		}
	);

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error);
	}

	return response.json();
};

export const createProduct = async ({ product, keyUser }) => {
	const response = await fetch(
		`https://users-eca7f-default-rtdb.europe-west1.firebasedatabase.app/users/${keyUser}/user/products.json`,
		{
			method: 'POST',

			body: JSON.stringify(product),
		}
	);

	return response.json();
};

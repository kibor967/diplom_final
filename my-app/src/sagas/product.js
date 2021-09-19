import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
	addProduct,
	fetchProduct,
	removeProduct,
	setProduct,
} from '../redux/productUser/productActions.js';

import {
	fetchProduct as fetchProductService,
	createProduct,
	removeProduct as removeProductService,
} from '../service/products.js';

import { normalizeProduct } from 'redux/productUser/normalize.js';

export function* addProductWorker({ payload: product }) {
	const keyUser = yield select(state => state.keyUser);
	const key = yield call(createProduct, { product, keyUser });
	yield put(addProduct.receive({ product, key }));
}

export function* fetchProductWorker() {
	const keyUser = yield select(state => state.keyUser);
	if (!keyUser) {
		return;
	}
	const product = yield call(fetchProductService, { keyUser });
	if (!product) {
		console.log('Продуктов нет');
		return;
	}
	yield put(setProduct(normalizeProduct(product)));
}

export function* removeProductWorker({ payload: key }) {
	const keyUser = yield select(state => state.keyUser);
	try {
		yield call(removeProductService, { key, keyUser });
	} catch (e) {
		console.log('smth went wrong');
	}

	yield put(removeProduct.receive(key));
}

export function* productSagaWatcher() {
	yield takeEvery(addProduct.request, addProductWorker);
	yield takeEvery(fetchProduct, fetchProductWorker);
	yield takeEvery(removeProduct.request, removeProductWorker);
}

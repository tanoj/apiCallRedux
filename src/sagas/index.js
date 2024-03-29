import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchItems() {
     const data = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), );
     yield put({ type: "ITEM_RECEIVED", data: data.articles, });
 }

function* actionWatcher() {
  yield takeLatest('GET_ITEMS', fetchItems)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}

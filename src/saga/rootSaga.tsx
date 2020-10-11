
import { call, all } from 'redux-saga/effects';

import { watchLogin } from './userSagas';

export default function* rootSaga() {
    yield all([
        call(watchLogin),
    ])
} 
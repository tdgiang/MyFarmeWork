import { put, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_SUCCEEDED } from '../redux/actions/actionTypes';


function* login(action) {
    console.log("Hello Redux saga")
    yield put({ type: LOGIN_SUCCEEDED });
}


export function* watchLogin() {
    yield takeLatest(LOGIN, login);
}
import { call, put, takeLatest } from 'redux-saga/effects';
import { CREAT_NEW_USER, creatNewUser } from './actions';
import { postUser } from '../../Api/api';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addUser(action) {
    try {
        const response = yield call(postUser, action.payload);
        yield put(creatNewUser(response));
    } catch (e) {

    }
}

function* mySaga() {
    yield takeLatest(CREAT_NEW_USER, addUser);
}

export default mySaga;
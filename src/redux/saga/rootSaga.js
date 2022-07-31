import {all} from 'redux-saga/effects';
import { serviceSaga } from './sagas/serviceSaga';

export default function* rootSaga(){
    yield all ([...serviceSaga])
}


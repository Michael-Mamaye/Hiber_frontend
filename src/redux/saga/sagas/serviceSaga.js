import { takeLatest,put,fork} from "redux-saga/effects"
import { Get_all_services } from "../../constants"

function* onLoadServices(){
    yield takeLatest(Get_all_services,getAllServices)
}

function* getAllServices({payload}){
    try{
        yield put("mike")
    }
    catch(error)
    {
        console.log(error)
    }
}

export const serviceSaga=[fork(onLoadServices)]
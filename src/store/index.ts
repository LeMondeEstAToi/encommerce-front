import createRooterReducer from "./reducers/index";
import {createHashHistory} from 'history';
import {routerMiddleware} from 'connected-react-router'
import {applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";


export const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(createRooterReducer(history), applyMiddleware(routerMiddleware(history),sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
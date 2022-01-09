import { combineReducers } from 'redux'
import loc5daysReducer from './Fetch5days/5daysReducer'
import locIdReducer from './FetchLocId/LocIdReducer'
import locInfoReducer from './FetchLocInfo/LocInfoReducer'
import generalReducer from './General/generalReducer'

const rootReducer = combineReducers({
  loc5days: loc5daysReducer,
  locid: locIdReducer,
  locinfo: locInfoReducer,
  general:generalReducer
})

export default rootReducer

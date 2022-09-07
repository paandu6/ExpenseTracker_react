import { configureStore } from '@reduxjs/toolkit'

import authslicerreducer from './authredux'
import expenseslicerreducer from './expenseredux'
const store=configureStore({
    reducer:{auth:authslicerreducer,expense:expenseslicerreducer}
})
export default store

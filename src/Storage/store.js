import { configureStore } from '@reduxjs/toolkit'

import authslicerreducer from './authredux'

const store=configureStore({
    reducer:{auth:authslicerreducer}
})
export default store

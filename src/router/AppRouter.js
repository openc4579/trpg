import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Classes from '../page/classes/Classes'
import Home from '../page/home/Home'

export default function AppRouter(props){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class">
                <Route index element={<Classes />} />
                <Route path=":class" element={<Classes />} />
            </Route>
        </Routes>
    )
}
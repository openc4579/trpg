import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from '../page/home/Home'
import Classes from '../page/classes/Classes'
import Races from '../page/races/Races'

export default function AppRouter(props){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class">
                <Route index element={<Classes />} />
                <Route path=":class" element={<Classes />} />
            </Route>
            <Route path="/race">
                <Route index element={<Races />} />
                <Route path=":race" element={<Races />} />
            </Route>
        </Routes>
    )
}
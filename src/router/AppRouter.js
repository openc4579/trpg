import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from '../page/home/Home'

import Classesindex from '../page/classes/Classesindex'
import Classes from '../page/classes/Classes'

import Races from '../page/races/Races'
import Racesindex from '../page/races/Racesindex'

import Background from '../page/background/Background'

import Feat from '../page/feat/Feat'

export default function AppRouter(props){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class">
                <Route index element={<Classesindex />} />
                <Route path=":class" element={<Classes />} />
            </Route>
            <Route path="/race">
                <Route index element={<Racesindex />} />
                <Route path=":race">
                    <Route index element={<Races />} />
                    <Route path=":subrace" element={<Races />} />
                </Route>
            </Route>
            <Route path="/background">
                <Route index element={<Background />} />
                <Route path=":background" element={<Background />} />
            </Route>
            <Route path="/feat">
                <Route index element={<Feat />} />
                <Route path=":feat" element={<Feat />} />
            </Route>
        </Routes>
    )
}
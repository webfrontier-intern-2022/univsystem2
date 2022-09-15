//react router v6について
//https://www.webopixel.net/javascript/1773.html

import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import SuperUserPage from './pages/SuperUserPage'
import StudentPage from './pages/StudentPage' 
import ProfesserPage from './pages/ProfesserPage'
import EditStudentPage from './pages/EditStudentPage'
import EditProfesserPage from './pages/EditProfesserPage'

//URLの割り当て
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="SuperUserPage" element={<SuperUserPage />} />
                <Route path="/StudentPage" element={<StudentPage />} />
                <Route path="/ProfesserPage" element={<ProfesserPage />} />
                <Route path="/EditStudentPage" element={<EditStudentPage />} />
                <Route path="/EditProfesserPage" element={<EditProfesserPage />} />
            </Routes>
        </BrowserRouter>
    )
}
 
export default App
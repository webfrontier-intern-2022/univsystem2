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
import StudentListPage from './pages/StudentListPage'
import ProfesserListPage from './pages/ProfesserListPage'
import CourseEditorPage from './pages/CourseEditorPage'
import StudentEditorPage from './pages/StudentEditorPage'
import ProfesserEditorPage from './pages/ProfesserEditorPage'
import CourseJoinPage from './pages/CourseJoinPage'

//URLの割り当て
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="SuperUserPage" element={<SuperUserPage />} />
                <Route path="/StudentPage" element={<StudentPage />} />
                <Route path="/ProfesserPage" element={<ProfesserPage />} />
                <Route path="/StudentListPage" element={<StudentListPage />} />
                <Route path="/ProfesserListPage" element={<ProfesserListPage />} />
                <Route path="/CourseEditorPage" element={<CourseEditorPage />} />
                <Route path="/StudentEditorPage" element={<StudentEditorPage />} />
                <Route path="/ProfesserEditorPage" element={<ProfesserEditorPage />} />
                <Route path="/CourseJoinPage" element={<CourseJoinPage />} />
            </Routes>
        </BrowserRouter>
    )
}
 
export default App
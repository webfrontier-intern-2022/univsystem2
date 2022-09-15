import React from 'react'
import { Link } from 'react-router-dom'

const SuperUserPage: React.FC = () => {
    return (
        <div>
            <Link to="/">ログアウト</Link>
            <h1>管理者ページ</h1>
            
            <Link to="/StudentListPage">学生一覧</Link>
            <p></p>
            <Link to="/ProfesserListPage">教授一覧</Link>
        </div>
    )
}

export default SuperUserPage
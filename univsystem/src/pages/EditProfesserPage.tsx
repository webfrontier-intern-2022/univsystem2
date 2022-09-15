import React from 'react'
import { Link } from 'react-router-dom'

const EditProfesserPage: React.FC = () => {
    return (
        <div>
            <Link to="/LoginPage">ログアウト</Link>
            <h1>教授一覧</h1>
            <Link to="/SuperUserPage">戻る</Link>
        </div>
    )
}
 
export default EditProfesserPage
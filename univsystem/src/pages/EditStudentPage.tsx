import React from 'react'
import { Link } from 'react-router-dom'

const EditStudentPage: React.FC = () => {
    return (
        <div>
            <Link to="/">ログアウト</Link>
            <h1>学生一覧</h1>
            <Link to="/SuperUserPage">戻る</Link>
        </div>
    )
}
 
export default EditStudentPage
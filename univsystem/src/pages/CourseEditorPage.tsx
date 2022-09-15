//遷移先に値を渡す
//https://zenn.dev/lilac/articles/c40b35fe3184da

import React from 'react'
import { useLocation } from "react-router-dom";

const CourseEditorPage: React.FC = () => {
    const location = useLocation();
    const { id } = location.state;
    return (
        <div>
            <h1>講義情報を編集</h1>
        </div>
    )
}
 
export default CourseEditorPage
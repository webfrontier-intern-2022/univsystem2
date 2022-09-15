//遷移先に値を渡す
//https://zenn.dev/lilac/articles/c40b35fe3184da

//こっちのほうがわかりやすい
//https://qiita.com/etou25867873/items/d8c94ba46926d817fce9

import React from 'react'
import { useLocation } from "react-router-dom";

const CourseEditorPage: React.FC = () => {
    const location = useLocation();
    return (
        <div>
            <h1>講義情報を編集</h1>
            <p>{location.state}</p>
        </div>
    )
}
 
export default CourseEditorPage
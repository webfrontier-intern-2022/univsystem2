import React from 'react'
import { Link } from 'react-router-dom'

//同機能をコピペで実装してものが落ちる地獄
//クソコードを一生リファクタリングさせられるらしい
type listItem = {
    id: number;
    name: string;
};

const StudentPage: React.FC = () => {
    //仮置きのリスト
    //TODO:データベースからリストを引っ張ってくる
    const lists: listItem[] = [
        { id: 1, name: "コミュ１" },
        { id: 2, name: "コミュ２" },
    ];

    //リストを表示
    //クリックされたら遷移先にIDを渡す
    return (
        <div>
            <Link to="/">ログアウト</Link>
            <h1>教授ページ</h1>
            <ul className="todo-list">
                {lists.map((item: listItem) => {
                    return (
                        <li key={item.id}>
                            <span>
                                <Link to="/CourseEditorPage" state={item.id}>{item.name}</Link>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
 
export default StudentPage
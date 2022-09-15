// JSXループ
// https://nishinatoshiharu.com/jsx-map-roop/

import React from 'react'
import { Link } from 'react-router-dom'

type listItem = {
    id: number;
    name: string;
};

const ProfesserPage: React.FC = () => {

    //仮置きのリスト
    //TODO:データベースからリストを引っ張ってくる
    const todos: listItem[] = [
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
                {todos.map((item: listItem) => {
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

export default ProfesserPage
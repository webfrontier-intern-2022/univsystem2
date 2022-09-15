// JSXループ
// https://nishinatoshiharu.com/jsx-map-roop/

import React from 'react'
import { Link } from 'react-router-dom'

type listItem = {
    id: number;
    name: string;
};

const ProfesserPage: React.FC = () => {

    const todos: listItem[] = [
        { id: 1, name: "コミュ１" },
        { id: 2, name: "コミュ２" },
    ];

    return (
        <div>
            <Link to="/">ログアウト</Link>
            <h1>教授ページ</h1>
            <ul className="todo-list">
                {todos.map((todo: listItem) => {
                    return (
                        <li className="todo-item" key={todo.id}>
                            <span className="todo-item__text">
                                {todo.name}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ProfesserPage
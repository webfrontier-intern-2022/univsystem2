import React from 'react';
import axios from 'axios';

//useHistoryはv5まで
//https://dev-k.hatenablog.com/entry/react-router-v6-vs-v5-dev-k
import { useNavigate } from 'react-router-dom';


const LoginPage: React.FC = () => {
    const [data, setData] = React.useState();
	const [mailText, setMailText] = React.useState("");
	const [passText, setPassText] = React.useState("");
	const url = "http://localhost:8000";

	//useState(魔法)
	//中学生の頃インスタンス化の概念がわからなかった、あの感覚に近い
	const [errorText, setErrorText] = React.useState("");

	//ページ遷移くん
	const navigate = useNavigate();

    //入力されたパスワードをfastAPIに投げる
    const SendData = () => {
		axios.post(
			url, 
			{
				inputMail:mailText,
				inputPass:passText
			}
		)
		.then(function (response) {
			// 送信成功
			console.log(response);

			//デバッグ用　後で消す
			setErrorText(response.data);

			//ユーザのロールによって飛ばす先を変える
			if(response.data=="SuperUser")
				navigate('/SuperUserPage');
			if(response.data=="Student")
				navigate('/StudentPage');			
			if(response.data=="Professer")
				navigate('/ProfesserPage');
			if(response.data=="Unauthorized")
				setErrorText("メールアドレスまたはパスワードが間違っています")
		})
		.catch(function (error) {
			// 送信失敗
			console.log(error);
			setErrorText("送信に失敗しました")
		});
	}

    return (
        <div>
            <h1>ログイン画面</h1>
			<label>
				mail : 
				<input
					value={mailText}
					onChange={(event) => setMailText(event.target.value)}
				/>
			</label>
			<p></p>
			<label>
				pass: 
				<input
					value={passText}
					onChange={(event) => setPassText(event.target.value)}
				/>
			</label>
			<p></p>
			<button onClick={SendData}>login</button>
			<p></p>
			<a style={{color: "red"}}>{errorText}</a>
        </div>
    )
}
 
export default LoginPage
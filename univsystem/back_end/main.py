# pip install "fastapi[all]"
# pip install uvicorn
# uvicorn main:app --reload で起動

# postとかの解説
# https://blog.jicoman.info/2021/01/how-to-logging-request-and-response-body-by-fastapi/

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel  # リクエストbodyを定義するために必要

import re

# 型ヒントを行えるpydanticをインポート
from pydantic import BaseModel  


# 作成したモデル定義ファイルと設定ファイルをインポート
import db_model as m 
import db_setting as s 

# データクラス定義
# POSTとPUTで使うデータクラス
class Students(BaseModel):
    id : int

class teachers(BaseModel):
    id : int

class KougiBase(BaseModel):
    kougi_id : int

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# リクエストbodyを定義
# ユーザ認証
class User(BaseModel):
    inputMail: str
    inputPass: str

# 入力されたメアド・パスワードを受け取る
@app.post("/")
def create_user(user: User):
    # 照合結果をTypeScriptに返す
    # 管理者：SuperUser
    # 学生：Student
    # 教授：Professer
    # 登録されていないユーザー：Unauthorized
    userType="Unauthorized"

    print(user.inputMail)
    print(user.inputPass)

    #TODO:ここでデータベースに問い合わせる
    #DBからユーザ情報を取得

    result = s.session.query(m.Students).all()
    for i in result:
        print("input:"+user.inputMail)
        print("outpu:"+i.mail)

        #XXX:メアドが合っていればログインできてしまう状況
        if user.inputMail==i.mail:
            userType="Student"
            break
            if i.passwd == user.inputPass:
                userType="Student"
                break
        
    print("UserType:"+userType)


    return {userType}

@app.get("/")
async def root():
    return {"message": "Hello World"}

# GETメソッドで /usersにアクセスしたときの処理
# studentsの全件取得
@app.get("/students/{mail}/{passwd}", tags=["students"])
async def read_Students(mail: str,passwd: str):
    #DBからユーザ情報を取得
    result = s.session.query(m.Students).all()
    for i in result:
        if i.mail == mail:
            if i.passwd == passwd:
                return True
            return True

# POSTメソッドで /usersにアクセスしたときの処理
# ユーザーの新規登録
@app.post("/students/", tags=["students"])
async def create_students(data: Students):
    # kougiモデルを変数に格納
    students = m.Students()
    # セッションを新規作成
    session = s.session()
    s.session.add(students)
    try:
        #リクエストBodyで受け取ったデータを流し込む
        students.id = data.id
        students.mail = data.mail
        students.name = data.name
        #永続的にDBに反映
        session.commit()
    except:
        # DBへの反映は行わない
        session.rollback()
        raise
    finally:
        # 正常・異常どちらでもセッションは終わっておく
        session.close()

# DELETEメソッドで /usersにアクセスしたときの処理
# ユーザーの削除
@app.delete("/students/{id}", tags=["students"])
async def delete_students(id: int):
    # セッションを新規作成
    session = s.session()
    try:
        # 指定されたuser_idのユーザーを削除
        query = s.session.query(m.Students)
        query = query.filter(m.Students.id == id)
        query.delete()
        # 永続的にDBに反映
        session.commit()
    except:
        # DBへの反映は行わない
        session.rollback()
        raise
    finally:
        # 正常・異常どちらでもセッションは終わっておく
        session.close()

# PUTメソッドで /usersにアクセスしたときの処理
# ユーザーの更新
@app.put("/students/{id}", tags=["students"])
async def update_students(id: int, data:Students):
    # セッションを新規作成
    session = s.session()
    try:
        # ユーザー更新
        s.session.query(m.Students).\
        filter(m.Students.id == id).\
        update({"id" : data.id})
        # 永続的にDBに反映
        session.commit()
    except:
        # DBへの反映は行わない
        session.rollback()
        raise
    finally:
        # 正常・異常どちらでもセッションは終わっておく
        session.close()
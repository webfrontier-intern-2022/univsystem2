# pip install "fastapi[all]"
# pip install uvicorn
# uvicorn main:app --reload で起動

# postとかの解説
# https://blog.jicoman.info/2021/01/how-to-logging-request-and-response-body-by-fastapi/

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel  # リクエストbodyを定義するために必要

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
    print(user.inputMail)
    print(user.inputPass)

    #TODO:ここでデータベースに問い合わせる

    # 照合結果をTypeScriptに返す
    # 管理者：SuperUser
    # 学生：Student
    # 教授：Professer
    # 登録されていないユーザー：Unauthorized
    userType="Unauthorized"

    return {userType}
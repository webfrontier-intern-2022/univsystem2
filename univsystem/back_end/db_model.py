# -*- coding: utf-8 -*-

# sqlalchemyライブラリから使用する型などをインポート
from sqlalchemy import Column, Integer, String,DateTime
# CURRENT_TIMESTAMP関数を利用するためにインポート
from sqlalchemy.sql.functions import current_timestamp
# Baseクラス作成用にインポート
from sqlalchemy.ext.declarative import declarative_base

# Baseクラスを作成
Base = declarative_base()

# Baseクラスを継承したモデルを作成
# usersテーブルのモデルUsers

class Kougi(Base):
    __tablename__ = 'kougi'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable = False)
    summary = Column(String(255), nullable = False)
    teacherid = Column(Integer, nullable = False)

class KougiList(Base):
    __tablename__ = 'kougiList'
    student_id = Column(Integer, primary_key=True, autoincrement=True)
    kougi_id = Column(Integer, nullable=True)

class Students(Base):
    __tablename__ = 'students'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable = False)
    mail = Column(String(255), nullable = False)
    passwd = Column(String(64), nullable = False)

class Teachers(Base):
    __tablename__ = 'teachers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable = False)
    tantou = Column(String(50), nullable = False)
    mail = Column(String(255), nullable = False)
    passwd = Column(String(64), nullable = False)

    
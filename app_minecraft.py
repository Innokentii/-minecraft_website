from flask import Flask, render_template, request
import sqlite3 as sql

# База данных SQL
conn = sql.connect("sql_base.db")
# объект запросов
cur = conn.cursor()
# переменная user_open
cur.execute("CREATE TABLE IF NOT EXISTS user_open(ord INT);")
conn.commit()
conn.close
# Удаление данных
cur.execute("DELETE FROM user_open WHERE ord=0;")
cur.execute("DELETE FROM user_open WHERE ord=1;")
# первоначальные данные
cur.execute("INSERT INTO user_open VALUES(0);")
conn.commit()
conn.close

# Карказ сайта
app = Flask(__name__)


@app.route('/') # главная страница

@app.route('/block_main') # информационный блок
def block_main():
    # База данных SQL
    conn = sql.connect("sql_base.db")
    # объект запросов
    cur = conn.cursor()
    # вывод данных
    cur.execute("SELECT * FROM user_open;")
    x = cur.fetchall()[0]
    conn.commit()
    return render_template('block_main.html', data=x)

@app.route('/block_info') # блок закупок
def block_info():
    # База данных SQL
    conn = sql.connect("sql_base.db")
    # объект запросов
    cur = conn.cursor()
    # вывод данных
    cur.execute("SELECT * FROM user_open;")
    x = cur.fetchall()[0]
    conn.commit()
    return render_template('block_info.html', data=x)

@app.route('/block_open_user') # блок регистрации пользователя
def block_open_user():
    # База данных SQL
    conn = sql.connect("sql_base.db")
    # объект запросов
    cur = conn.cursor()
    # удаление данных
    cur.execute("DELETE FROM user_open WHERE ord=1;")
    cur.execute("DELETE FROM user_open WHERE ord=0;")
    # ВВод данных
    cur.execute("INSERT INTO user_open VALUES(1);")
    # вывод данных
    cur.execute("SELECT * FROM user_open;")
    x = cur.fetchall()[0]
    conn.commit()
    conn.close
    return render_template('block_open_user.html', data=x)

@app.route('/Minecraft_JS.js')


def create_app():
    """Функция генерации сайта"""
    return app
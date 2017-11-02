from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello"

@app.route("/login")
def login(): pass

@app.route("/landing")
def landing(): pass 

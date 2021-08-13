import os
from flask import Flask, jsonify, render_template, request, make_response
from flask_pymongo import PyMongo
import requests
import json
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
      

    return render_template("index.html")

@app.route("/about")
def about():
    

    return render_template("about.html")



@app.route("/ourwork")
def ourwork():
    

    return render_template("ourwork.html")

if __name__=="__main__":
    app.run(debug=True)

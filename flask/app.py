import os
from flask import Flask, jsonify, render_template, request, make_response
from flask_pymongo import PyMongo
import requests
import json
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
        # writes raw data t0 a json file when a person accesses the page, so the viz code can use it
    # with open("frontend/static/js/dogs.json", "w+") as f:
    #     f.write(viz_data()) 
    #     f.close() 

    return render_template("index.html")



@app.route("/ourwork")
def ourwork():
    

    return render_template("ourwork.html")

if __name__=="__main__":
    app.run(debug=True)
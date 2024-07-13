import pandas as pd
import csv
import pyttsx3
import speech_recognition as sr

a=pd.read_csv('final.csv')
engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

#front = input("Enter front end")
if len(voices) > 1:
    engine.setProperty('voice', voices[1].id) 
speak("Following are the topics according to your search results :")
for x in a.index :
    if a.loc[x,'DBMS']=='SQL Lite' :
        if a.loc[x,'Front_end']=='React, CSS':
            if a.loc[x,'Back_end']=='Java' : 
              topic = a.loc[x,'Topic']
              description = a.loc[x,'Description']
              print("Topic : \n",topic)
              
              speak(topic)
              print("Description : \n",description)
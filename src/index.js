import app from './app';
var express = require('express');
var server = require('http').Server(app);
const io = require('socket.io')(server);
var NodeMailer = require('nodemailer');
import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCO2wHCURLM4RkYrr7WuPIAgYdx1a9FACg',
  authDomain: 'medcheck-64592.firebaseapp.com',
  databaseURL: 'https://medcheck-64592.firebaseio.com/MedicalRecords/yxpHqBRqyzWwqGJvao1fejN3V243',
  projectId: 'medcheck-64592',
};

firebase.initializeApp(firebaseConfig);


app.use(express.static('dist'));

io.on("connection", (socket) => {
  console.log(socket.handshake.query);
});

server.listen(3001, function(){
    console.log("Servidor corriendo en el puerto 5001.")
});
var transporter = NodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'authorizedmailer@gmail.com',
    pass: 'xazhqaazawegdfcm',
  }
});

var mailOptions = {
  from: 'authorizedmailer@gmail.com',
  to: 'ivan.lorenzana193@tectijuana.edu.mx',
  subject: 'ALERTA',
  html: '<h1>ALERTA</h1><p>Una persona está en peligro.</p>'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
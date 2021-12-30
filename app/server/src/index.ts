import argon2 from 'argon2'
import fs from 'fs'
import path from 'path'
var nodemailer = require('nodemailer');

const { pipeline } = require('stream')
const util = require('util')
const pump = util.promisify(pipeline)

const sendVerifEmail = (email, value) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'duckysquishy@gmail.com', // fill your mail
            pass: 'hspnflejntkyokod' // fill your password
        }
    });

    var mailOptions = {
        from: 'duckysquishy@gmail.com', // fill your mail
        to: email,
        subject: 'Reset Password Link',
        text: 'Your reset password link : http://localhost:3200/reset-pass/' + value
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log('Email sent: ' + info.response);
            return true;
        }
    });
}

const sendUserInfo = (email, username, password) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'duckysquishy@gmail.com', // fill your mail
            pass: 'hspnflejntkyokod' // fill your password
        }
    });

    var mailOptions = {
        from: 'duckysquishy@gmail.com', // fill your mail
        to: email,
        subject: 'Account Information',
        text: 'This is your account information. Please login and change your password to secure your account : \n \n Username: ' + username + '\n Password: ' + password
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log('Email sent: ' + info.response);
            return true;
        }
    });
}

const generateToken = () => {
    //Math.floor(100000 + Math.random() * 900000)
    const mToken = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
    return mToken;
}

const generateLongToken = () => {
    const mToken = Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16);
    return mToken;
}

const formatD = (date) => {
    date = new Date(date);

    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return year + '/' + month + '/' + day;
}

const format = (date) => {
    date = new Date(date);
    const day = ('0' + date.getDate()).slice(-2);
    const monthIndex = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const myFormattedDate = day + "/" + (monthIndex) + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
    return myFormattedDate;
}

const daysDifference = (date1,date2) => {
    var myDate1 = new Date(date1).getTime();
    var myDate2 = new Date(date2).getTime();
    var difference = myDate1 - myDate2;

    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24;

    return daysDifference;
}

const hoursDifference = (date1,date2) => {
    var myDate1 = new Date(date1).getTime();
    var myDate2 = new Date(date2).getTime();
    var difference = myDate1 - myDate2;

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60;

    return hoursDifference;
}

const minutesDifference = (date1,date2) => {
    var myDate1 = new Date(date1).getTime();
    var myDate2 = new Date(date2).getTime();
    var difference = myDate1 - myDate2;

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60;

    return minutesDifference;
}

export const ext = {
    argon2, sendVerifEmail, sendUserInfo, generateToken, generateLongToken, formatD, format, pump, fs, path, daysDifference, hoursDifference, minutesDifference
}
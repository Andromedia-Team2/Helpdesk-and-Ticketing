import argon2 from 'argon2'
import fs from 'fs'
import path from 'path'

const { pipeline } = require('stream')
const util = require('util')
const pump = util.promisify(pipeline)

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
    argon2, formatD, format, pump, fs, path, daysDifference, hoursDifference, minutesDifference
}
import argon2 from 'argon2'
const CryptoJS = require("crypto-js");

// Encrypt
const encrypt = (val) => { return CryptoJS.AES.encrypt(val, 'secret key 123').toString() };

// Decrypt
const decrypt = (val) => {
    var bytes = CryptoJS.AES.decrypt(val, 'secret key 123');
    return bytes.toString(CryptoJS.enc.Utf8);
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

export const ext = {
    encrypt, decrypt, argon2, formatD, format
}
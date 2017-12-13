// ==UserScript==
// @name         企业监管信息
// @namespace    http://114.215.104.68
// @version      0.1
// @description  扩展监管信息页面
// @author       IPE_he
// @match        http://114.215.104.68:89/sitemanage/*
// @grant        none
// ==/UserScript==

var s = document.getElementsByClassName('recordView');    //定位到‘查看’属性
//var s1 = s[0].parentElement.parentElement.parentElement;
//企业列表是页面上第10个表
var allTbody = document.getElementsByTagName('tbody');
var s1 = allTbody[9];

// ==UserScript==
// @name         插入表格
// @namespace    http://114.215.104.68
// @version      0.1
// @description  扩展监管信息页面插入表格
// @author       IPE_he
// @match        http://114.215.104.68:89/sitemanage/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var s = document.getElementsByClassName('recordView');    //定位到‘查看’属性
    //企业列表是页面上第10个表
    var allTbody = document.getElementsByTagName('tbody');
    var s1 = allTbody[9];
    function MyinsertRow(tbodyname) {
        for (let i = 1,l = tbodyname.rows.length; i < l; i=i+1) {
            var newRow = tbodyname.insertRow(i*2);
            newRow.style.height = '100px';
            var newCell = newRow.insertCell(0);
            newCell.colSpan = '11';
        }
    }

    MyinsertRow(s1);
    var recordHtml = '<div><span>fdsfsd</span></div>';
    function getRviewHtml(recordViewVal) {
        var xh = new XMLHttpRequest();
        xh.open('get', recordViewVal.href);
        xh.responseType = 'document';
        xh.onreadystatechange = function () {
                recordHtml = xh.response;
        }
        xh.send();
    }
    getRviewHtml(s[0]);
    if (recordHtml) {
        console.log(recordHtml);
    } else {
        console.log('recordHtml为空');
    }
})();
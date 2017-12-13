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

    // Your code here...
    var s = document.getElementsByClassName('recordView');    //定位到‘查看’属性
    //var s1 = s[0].parentElement.parentElement.parentElement;
    //企业列表是页面上第10个表
    var allTbody = document.getElementsByTagName('tbody');
    var s1 = allTbody[9];
    function MyinsertRow(tbodyname) {
        for (let i = 1,l = tbodyname.rows.length; i < l; i=i+1) {
            var newRow = tbodyname.insertRow(i*2);
            newRow.style.height = '100px';
            var newCell = newRow.insertCell(0); //生成一个单元格，不然会导致无法合并单元格，因为colspan对行不生效
            newCell.colSpan = '11';  //合并的单元格数量的数字必须加引号

        }
    }

    MyinsertRow(s1);
})();
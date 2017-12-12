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
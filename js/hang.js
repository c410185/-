var s = document.getElementsByClassName('recordView');    //定位到‘查看’属性
//var s1 = s[0].parentElement.parentElement.parentElement; 
//企业列表是页面上第10个表
var allTbody = document.getElementsByTagName('tbody');
var s1 = allTbody[9]
//获取到刷新出来的列表
//geturl函数获取‘查看’元素的链接，并且将需要的内容返回
var recordHtml = '';
function getRviewHtml(recordViewVal) {
    var xh = new XMLHttpRequest();
    xh.open('get', recordViewVal.href);
    xh.responseType = 'document';  
    xh.onreadystatechange = function () {
        if (xh.readyState == 4) {
            recordHtml = xh.response;
        }
    }
    xh.send();
}

//格式化HTML文本的函数，在getRviewHtml中引用
function formatHtml(oldrViewhtml) {
    var oldTr = oldrViewhtml.getElementsByTagName('td')
    //直接取2,3(信用代码);4,5（机构代码）;6,7（地址）;12,13（违法事实）；14,15（处罚手段）；18,19监管记录来源；最后是详情17；获取值，然后填入新的单元格中，详情直接填入innerHTML。试试
    //建立第一行，6单元格
    var tab0 = document.createElement('table');
    var tr0_0 = tab0.insertRow();
    var cell_0 = tr0_0.insertCell();
    var cell_1 = tr0_0.insertCell();
    cell_0.innerText = oldTr[2].innerText;
    cell_1.innerText = oldTr[3].innerText;

    var cell_2 = tr0_0.insertCell();
    var cell_3 = tr0_0.insertCell();
    cell_2.innerText = oldTr[4].innerText;
    cell_3.innerText = oldTr[5].innerText;

    var cell_4 = tr0_0.insertCell();
    var cell_5 = tr0_0.insertCell();
    cell_4.innerText = oldTr[6].innerText;
    cell_5.innerText = oldTr[7].innerText;
    //建立第二行，6单元格
    var tr0_1 = tab0.insertRow();
    var cell_6 = tr0_1.insertCell();
    var cell_7 = tr0_1.insertCell();
    cell_6.innerText = oldTr[12].innerText;
    cell_7.innerText = oldTr[13].innerText;

    var cell_8 = tr0_1.insertCell();
    var cell_9 = tr0_1.insertCell();
    cell_8.innerText = oldTr[14].innerText;
    cell_9.innerText = oldTr[15].innerText;

    var cell_10 = tr0_1.insertCell();
    var cell_11 = tr0_1.insertCell();
    cell_10.innerText = oldTr[18].innerText;
    cell_11.innerText = oldTr[19].innerText;
    //建立第二个表格，存放监管详情，为了增加导航条，所以放在div里
    var div0 = document.createElement('div');
    var tab1 = document.createElement('table');
    var tr1_0 = tab1.insertRow();
    var cell_12 = tr1_0.insertCell();
    cell_12.innerHTML = oldTr[17].innerHTML;
    div0.appendChild(tab1);
    //CSS这个改变不知道对不对
    //div0.style.cssText = 'height : 200px; overflow-y: scroll;'
    div0.style.height = '200px';
    div0.style.overflowY = 'scroll';
    var tab0_parent = document.createElement('table');
    var div0_parent = document.createElement('div');
    tab0_parent.appendChild(tab0);
    div0_parent.appendChild(div0);
    return tab0_parent.innerHTML + div0_parent.innerHTML //因为取的是包含的HTML元素，这样会导致最外层的一个标签作为容器本身的元素而不被传递
}

function MyinsertRow(tbodyname) {
    for (let i = 1; i <= tbodyname.rows.length; i=i+1) {
        var newRow = tbodyname.insertRow(i*2);
        newRow.style.height = '100px';
        var newCell = newRow.insertCell(0); //生成一个单元格，不然会导致无法合并单元格，因为colspan对行不生效
        newCell.colSpan = '11';  //合并的单元格数量的数字必须加引号
        //先写到一个函数里，之后再优化
        //在表格中插入表格，只能插入到TD标签中，不能直接插入到tr中
        //为了能够在一屏内完整展示企业的详细信息，所以对企业的详情页进行了删减，同时给监管记录增加了个div，在div上实现滚动条控制详情的高度，现在只能按照DOM把详情表格中的内容一个个赋值了，不知道能不能写出来
        getRviewHtml(s[i-1]);
        formatHtml(recordHtml);
        //newCell.innerHTML = formatHtml(recordHtml);
    }
}

MyinsertRow(s1);   //插入表格

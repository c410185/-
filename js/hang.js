
function MyinsertRow(tbodyname) {
    for (let i = 2; i < tbodyname.rows.length+2; i=i+2) {
        var newRow = tbodyname.insertRow(i);
        newRow.style.height = '100px'
        var newCell = newRow.insertCell(0) //生成一个单元格，不然会导致无法合并单元格，因为colspan对行不生效
        newCell.colSpan = '10'  //合并的单元格数量的数字必须加引号
        //先写到一个函数里，之后再优化
        //在表格中插入表格，只能插入到TD标签中，不能直接插入到tr中
    }
    
}
//'insertRow' on 'HTMLTableSectionElement': The provided index (62 is outside the range [-1, 61].
var s = document.getElementsByClassName('recordView')    //定位到‘查看’属性

var s1 = s[0].parentElement.parentElement.parentElement  //获取到刷新出来的列表
//geturl函数获取‘查看’元素的链接，并且将需要的内容返回

MyinsertRow(s1)

s1.rows[4].innerHTML = '<td colspan="10"><table border="1px" width="100%"><tbody><tr><td>名称</td><td>公司名称</td></tr><tr><td>组织机构代码</td><td>456456464566465</td></tr></tbody></table></td>'

var xh = new XMLHttpRequest();
xh.open('get', s[0].href)
xh.responseType('document')   //指定获取内容为文档类型，之后就可以以此来使用DOM属性
xh.send()
var rViewhtml = xh.response   //获取查看链接的信息详情，对内容进行分析
// var ss1 = rViewhtml.getElementById('lblIndustryName')  //定位企业名称
//定位监管记录违法类型，违法事实，处罚手段
var rViewtbody = rViewhtml.getElementsByTagName('tbody')
//希望把详情页的前八行表格逐行填入新的表格中
//总的目标是在新插入的表格中展示详情页的内容，想想其他办法
function newTable(atbody) {
    for (let i = 0; i < 8; i++) {
        var newtab = []
        newTab[i] = atbody[i];
    }
    return newTab
}
newTable(rViewtbody[0])  //出错，插入的是空值，还需要修改，
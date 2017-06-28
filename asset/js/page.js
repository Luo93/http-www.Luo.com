/**
 * Created by Administrator on 2017/6/13 0013.
 * Author L
 * QQ 1164898318
 * 分页
 */
//current 是当前页，total是总页数
function showPages(current,total){
    var html = "<ul class='clearfix'>";
    if(total<=1){
        html += "<li>1</li>";
    }else{
        var showPage= 5;//总显示显示页面数
        var diff = (showPage-1)/ 2;//中间页数跟头尾数的隔间页数
        var start= 0;//开始页数
        var end=total;//结束页数
        if(current>diff){
            start = current-diff;
            end = total>current+diff?current+diff:total;
        }else{
            start = (current-1)>0?current-1:1;
            end = total>showPage?showPage:total;
        }
        if(current+diff>total){
            start=start-(current+diff-end);
        }
        if(current>1){
            html += "<li data-page='1'>首页</li>";
            html += "<li data-page='"+(parseInt(current)-1)+"'>上一页</li>";
        }else{
            html += "<li class='disabled'>首页</li>";
            html += "<li class='disabled'>上一页</li>";
        }
        for(var i=start;i<=end;i++){
            if(i==current){
                html += "<li class='active'>"+current+"</li>";
            }else{
                html += "<li data-page='"+i+"'>"+i+"</li>";
            }
        }
        if(current<total){
            html += "<li data-page='"+(parseInt(current)+1)+"'>下一页</li>";
            html += "<li data-page='"+(parseInt(total))+"'>尾页</li>";
        }else{
            html += "<li class='disabled'>下一页</li>";
            html += "<li class='disabled'>尾页</li>";
        }
    }
    html += "</ul>";
    return html;
}

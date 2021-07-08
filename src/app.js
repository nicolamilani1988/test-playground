function init(){
    new Vue({
        el:"#myapp",
        data: {
            menu: ['Ideas','Expertise','Services','Insights','About','Contact','Careers'],
            selectors:['5 POSTI','3 POSTI','2 POSTI'],
        },
        methods: {
            prova: function(){
                console.log(this.test);
                console.log('popopopo');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded',init);

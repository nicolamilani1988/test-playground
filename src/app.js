function init(){
    new Vue({
        el:"#myapp",
        data: {
            menu: ['Ideas','Expertise','Services','Insights','About','Contact','Careers'],
            versions:[
                {
                    selector: '5 POSTI',
                    litres: '450',
                    text: '5 POSTI Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quidem laborum quia ab possimus suscipit non sit tempore ex, quod dicta saepe odit aspernatur consequatur voluptatum alias consectetur, sunt exercitationem.',
                    img: 'mini.jpg'
                },
                {
                    selector: '3 POSTI',
                    litres: '300',
                    text: '3 POSTI Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quidem laborum quia ab possimus suscipit non sit tempore ex, quod dicta saepe odit aspernatur consequatur voluptatum alias consectetur, sunt exercitationem.',
                    img: 'mini1.jpg'
                },
                {
                    selector: '2 POSTI',
                    litres: '150',
                    text: '2 POSTI Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quidem laborum quia ab possimus suscipit non sit tempore ex, quod dicta saepe odit aspernatur consequatur voluptatum alias consectetur, sunt exercitationem.',
                    img: 'mini2.jpg'
                },
            ],
            activeIndex: 0,

        },
        methods: {
            prova: function(){
                console.log(this.test);
                console.log('popopopo');
            },
            getVersion: function(index){
                this.activeIndex = index;
            },
        }
    });
}

document.addEventListener('DOMContentLoaded',init);

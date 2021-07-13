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
            partners:['partner (1).png','partner (2).png','partner (3).png','partner (4).png','partner (5).png','partner (6).png','partner (7).png','partner (8).png','partner (9).png','partner (10).png'],
            hiddenPartnerIndex: 9,
            scrollPosition: null,
            isMenuVisible: false,
            contactNumber: null,
            date: null,
            checkin: null
        },
        mounted(){
            this.getDate();
            this.autoSlide();
            window.addEventListener('scroll', this.updateScroll);
            this.generateContactNumber();
        },
        methods: {
            getVersion: function(index){
                this.activeIndex = index;
            },
            autoSlide: function() {
                setInterval(this.nextImg, 2000);
            },
            nextImg: function(){
              let removed = this.partners[0];
              this.partners.splice(0,1);
              this.partners.push(removed);
            },
            updateScroll() { //change header color on scroll
                this.scrollPosition = window.scrollY;
            },
            showMenu: function(){
                this.isMenuVisible = !this.isMenuVisible;
            },
            hideMenu: function(){
                this.isMenuVisible = false;
            },
            generateContactNumber: function(){
                this.contactNumber = Math.random() * 100000 | 0;
            },
            getDate: function (){
                let d = new Date(),
                month = ''+(d.getMonth()+1),
                day = ''+ d.getDate(),
                year = d.getFullYear();
                if(month.length<2){
                    month = '0' + month;
                }
                if(day.length < 2){
                    day = '0'+day;
                }
                this.date = [year,month,day].join('-');
                this.checkin = [year,month,day].join('-');
            }
        },
    });
}

document.addEventListener('DOMContentLoaded',init);

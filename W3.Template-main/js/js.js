    const buyBtns = document.querySelectorAll('.js-plance-buy')
    const modal = document.querySelector('.js-modal')
    const close = document.querySelector('.js-lose')
    const modalcontainer = document.querySelector('.js-modal-container')
    
    
    function Showmodal () {
        modal.classList.add('open')

    }
    function Removemodal () {
        modal.classList.remove('open')
    }
    
    for ( const buyBtn of buyBtns){
        buyBtn.addEventListener('click', Showmodal)
    }

    close.addEventListener('click', Removemodal)
    modal.addEventListener('click', Removemodal)
    modalcontainer.addEventListener('click', function(Event) {
        Event.stopPropagation()
    })


    
    const menu = document.querySelector('.iconmenu')
    var header = document.getElementById('header')
    var headerHeight = header.clientHeight;

    // đóng mở mobi menu
    menu.onclick = function() {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }

    //  tự động đóng menu khi chọn 
    var menuItems = document.querySelectorAll('#nav  li  a[href*="#"]')
    for (var i = 0; i < menuItems.length; i++) {
        var menuItem =  menuItems[i];

        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if (isParentMenu) {
                event.preventDefault();
            }  else {
                
                header.style.height = null;
            }

           
        }
    }
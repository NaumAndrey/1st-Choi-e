(() => {

    const registration = document.querySelector('.registration');
    const section_modal = document.querySelector('.pop-up-box');
    const windowg = document.querySelector('.section-modal');
    const button_close = document.querySelector('.btn-close');

    const soglasie = document.querySelector('.soglasie');
    const agreement = document.querySelector('.container-user-agreement');
    const button_closed = document.querySelector('.button-closed');

    const rules = document.querySelector('.rules');
    const section_rules = document.querySelector('.pop-up-rules');

    const btn_rules = document.querySelector('.btn-rules');
    const container_promotion_rules = document.querySelector('.container-promotion-rules');
    const scroll1 = document.querySelector('.body');

    const btn_reg_conditions = document.querySelector('.btn-reg-conditions');

    if (btn_reg_conditions) {
        btn_reg_conditions.addEventListener('click', () => {
            section_modal.classList.toggle('active');
            windowg.classList.toggle('active_modal');
            console.log(scroll1);
            // scroll1.classList.toggle('scroll');
        });
    } else {
        console.log('no class btn-reg-conditions');
    }

    if (registration) {
        registration.addEventListener('click', () => {
            section_modal.classList.toggle('active');
            windowg.classList.toggle('active_modal');
            console.log(scroll1);
            // scroll1.classList.toggle('scroll');
        });
    } else {
        console.log('no class registration');
    }

    if (button_close) {
        button_close.addEventListener('click', () => {
            section_modal.classList.toggle('active');
            windowg.classList.toggle('active_modal');
            // scroll1.classList.toggle('scroll');
        });
    } else {
        console.log('no button button_close');
    }

    // button_closed.addEventListener('click', ()=> {
    //     agreement.classList.toggle('active_modal');
    // });

    // rules.addEventListener('click', () => {
    //     section_rules.classList.toggle('active');
    //     container_promotion_rules.classList.toggle('active_modal');
    //     scroll1.classList.toggle('scroll');
    // });

    // btn_rules.addEventListener('click', () => {
    //     section_rules.classList.toggle('active');
    //     container_promotion_rules.classList.toggle('active_modal');
    //     scroll1.classList.toggle('scroll');
    // });

    
    let element = document.getElementById('phone');
    let maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    let mask = IMask(element, maskOptions);

})()
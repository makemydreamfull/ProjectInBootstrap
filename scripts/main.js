$(window).ready(() => {
    new WOW({animateClass: 'animate__animated'}).init()
    $('.slick-one').slick({
        prevArrow: `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="right-arrow">
            <path d="M40.3398 20C40.3398 30.771 31.635 39.5 20.9003 39.5C10.1655 39.5 1.46069 30.771 1.46069 20C1.46069 9.22902 10.1655 0.5 20.9003 0.5C31.635 0.5 40.3398 9.22902 40.3398 20Z" fill="white" stroke="#076BFF"/>
            <g clip-path="url(#clip0_3910_124)">
            <path d="M15.3293 19.4774L23.7908 10.1768C23.9865 9.96154 24.2551 9.83548 24.547 9.82194C24.8389 9.80839 25.1179 9.90905 25.3323 10.1053L26.0152 10.7295C26.4596 11.1362 26.4912 11.8293 26.0858 12.2749L18.9805 20.085L26.7758 27.212C26.9903 27.4082 27.116 27.6772 27.1294 27.9697C27.1427 28.2625 27.042 28.5421 26.8463 28.7575L26.2232 29.4421C26.0273 29.6574 25.7589 29.7835 25.467 29.797C25.1751 29.8106 24.8961 29.7099 24.6817 29.5137L15.4001 21.0282C15.1851 20.8313 15.0596 20.561 15.0469 20.268C15.0328 19.9739 15.1332 19.6932 15.3293 19.4774Z" fill="#076BFF"/>
            </g>
            <defs>
            <clipPath id="clip0_3910_124">
            <rect width="19.9396" height="20" fill="white" transform="matrix(-1 0 -2.22607e-08 1 30.87 10)"/>
            </clipPath>
            </defs>
            </svg>`,

        nextArrow: `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="left-arrow">
        <path d="M0.669186 20C0.669186 9.22902 9.374 0.5 20.1088 0.5C30.8435 0.5 39.5483 9.22902 39.5483 20C39.5483 30.771 30.8435 39.5 20.1088 39.5C9.374 39.5 0.669186 30.771 0.669186 20Z" fill="white" stroke="#076BFF"/>
        <g clip-path="url(#clip0_3910_130)">
            <path d="M25.6795 20.5226L17.2181 29.8232C17.0224 30.0385 16.7538 30.1645 16.4619 30.1781C16.1699 30.1916 15.891 30.091 15.6765 29.8947L14.9936 29.2705C14.5493 28.8638 14.5176 28.1707 14.9231 27.7251L22.0284 19.915L14.2331 12.788C14.0186 12.5918 13.8928 12.3228 13.8795 12.0303C13.8661 11.7375 13.9668 11.4579 14.1625 11.2425L14.7856 10.5579C14.9815 10.3426 15.2499 10.2165 15.5419 10.203C15.8338 10.1894 16.1127 10.2901 16.3272 10.4863L25.6087 18.9718C25.8237 19.1687 25.9492 19.439 25.9619 19.732C25.976 20.0261 25.8757 20.3068 25.6795 20.5226Z" fill="#076BFF"/>
        </g>
        <defs>
            <clipPath id="clip0_3910_130">
                <rect width="19.9396" height="20" fill="white" transform="matrix(1 0 2.22607e-08 -1 10.1389 30)"/>
            </clipPath>
        </defs>
    </svg>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });
    const tovars = [{
        src: 'assets/images/1.png',
        title: 'Детокс чай лайм',
        },
        {
            src: 'assets/images/2.png',
            title: 'Ягодный чай',
        },
        {
            src: 'assets/images/3.png',
            title: 'Цветочный чай',
        },
        {
            src: 'assets/images/4.png',
            title: 'Очищающий чай',
        },
        {
            src: 'assets/images/5.png',
            title: 'Кислый чай',
        },
        {
            src: 'assets/images/6.png',
            title: 'Лимонная мята',
        },
    ]
    $(function () {
        $("#accordion").accordion();
    });
    $('.test-popup-link.first').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        items: tovars[0],
    });

    $('.test-popup-link.second').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        items: tovars[1],
    });
    $('.test-popup-link.third').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        items: tovars[2],
    });
    $('.test-popup-link.fourth').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        items: tovars[3],
    });
    $('.test-popup-link.fifth').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        items: tovars[4],
    });
    $('.test-popup-link.sixth').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        items: tovars[5],
    });

    const questions = $('h3')
    const first = $('#first');
    const second = $('#second');
    const third = $('#third')
    const four = $('#four');
    const fifth = $('#fifth');
    for (let i = 0; i < questions.length; i++) {
        questions.eq(i).click(() => {
            if (i === 0) {
                second.css('transform', 'rotate(0deg)')
                third.css('transform', 'rotate(0deg)')
                four.css('transform', 'rotate(0deg)')
                fifth.css('transform', 'rotate(0deg)')
                first.css('transform', 'rotate(0deg)')

            } else if (i === 1) {
                second.css('transform', 'rotate(180deg)')
                first.css('transform', 'rotate(180deg)')
                third.css('transform', 'rotate(0deg)')
                four.css('transform', 'rotate(0deg)')
                fifth.css('transform', 'rotate(0deg)')

            } else if (i === 2) {
                third.css('transform', 'rotate(180deg)')
                second.css('transform', 'rotate(0deg)')
                first.css('transform', 'rotate(180deg)')
                four.css('transform', 'rotate(0deg)')
                fifth.css('transform', 'rotate(0deg)')

            } else if (i === 3) {
                four.css('transform', 'rotate(180deg)')
                second.css('transform', 'rotate(0deg)')
                first.css('transform', 'rotate(180deg)')
                third.css('transform', 'rotate(0deg)')
                fifth.css('transform', 'rotate(0deg)')

            } else if (i === 4) {
                fifth.css('transform', 'rotate(180deg)')
                second.css('transform', 'rotate(0deg)')
                first.css('transform', 'rotate(180deg)')
                third.css('transform', 'rotate(0deg)')
                four.css('transform', 'rotate(0deg)')
            }
        })
    }
    const predform = $('#predform')
    const form = $('#form');
    function check(event) {
        event.preventDefault()
        if (form.children().eq(0).children().eq(0).children().children().eq(1).val() === '') {
            alert('Введите Имя!');
            return false;
        } else if (form.children().eq(0).children().eq(1).children().children().eq(1).val() === '') {
            alert('Введите Фамилию!');
            return false;
        } else if (form.children().eq(0).children().eq(2).children().children().eq(1).val() === '') {
            alert('Введите телефон!');
            return false;
        } else if (form.children().eq(1).children().eq(0).children().children().eq(1).val() === '') {
            alert('Введите страну!');
            return false;
        } else if (form.children().eq(1).children().eq(1).children().children().eq(1).val().length !== 6) {
            alert('Введите правильный индекс!');
            form.children().eq(1).children().eq(1).children().children().eq(1).val('');
            return false;
        } else if (form.children().eq(2).children().eq(0).children().children().eq(1).val() === '') {
            alert('Введите адрес!');
            return false;
        } else {
            form[0].reset()
            predform.before($("<div id='message-order' class='message-css alert alert-success' role='alert'><h3 class='px-3 alert-heading'>Спасибо за заказ!</h3><p>Мы свяжемся с вами в ближайшее время.</p></div>"));
            const messagecss=$('.message-css');
            const messageorder=$('#message-order');
            form.fadeOut()
            messageorder.fadeIn()
            messagecss.css('margin', '30px auto');
            messagecss.css('text-align', 'center');
            messagecss.css('width', '300px');
            setTimeout(() => {
                // $(window).prop("location", location.href);
                form.fadeIn()
                messageorder.fadeOut()
                messagecss.remove()
            },2000)
        }
    }

    $('#submit').on('click', check)
})
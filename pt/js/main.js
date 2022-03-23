window.addEventListener('DOMContentLoaded',
    function () {
        $('#section01').addClass('on');

        $('#bl_banner').addClass('on');

        $('#mh_main').addClass('on');

        $('#nm_banner').addClass('on');

        $('#fe_banner').addClass('on');

        $('#in_banner').addClass('on');

        $('#vm_banner').addClass('on');




        /* scroll event section */
        container.addListener((e) => {

            /*index*/

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)


            if (scrollTop >= 300) {
                $('#section02').addClass('on');
            }

            if (scrollTop >= 1900) $('#section03').addClass('on');



            /*page01*/

            if (scrollTop >= 460) {
                $('#ov_head').addClass('on');
            }

            if (scrollTop >= 580) {
                $('#ov_part_01').addClass('on');
            }

            if (scrollTop >= 1660) {
                $('#ov_part_02').addClass('on');
            }

            if (scrollTop >= 2600) {
                $('#head_02').addClass('on');
            }

            if (scrollTop >= 2700) {
                $('#part_01').addClass('on');
            }

            if (scrollTop >= 4200) {
                $('.page').addClass('on');
            }

            if (scrollTop >= 8600) {
                $('.bg_img').addClass('on');
            }

            if (scrollTop >= 9400) {
                $('.part_02').addClass('on');
            }

            if (scrollTop >= 11400) {
                $('.head_03').addClass('on');
            }

            if (scrollTop >= 17000) {
                $('.head_04').addClass('on');
            }

            if (scrollTop >= 20000) {
                $('.head_05').addClass('on');
            }

            if (scrollTop >= 24000) {
                $('.head_06').addClass('on');
            }

            if (scrollTop >= 11900) {
                $('.top').addClass('on');
            }

            if (scrollTop >= 14500) {
                $('.bottom').addClass('on');
            }

            if (scrollTop >= 17400) {
                $('.top02').addClass('on');
            }

            if (scrollTop >= 18500) {
                $('.bottom02').addClass('on');
            }

            if (scrollTop >= 20100) {
                $('.visual').addClass('on');
            }

            if (scrollTop >= 22300) {
                $('.style_img').addClass('on');
            }

            if (scrollTop >= 24000) {
                $('.about').addClass('on');
            }

            if (scrollTop >= 27500) {
                $('.thanks').addClass('on');
            }




            /*munch*/

            if (scrollTop >= 620) {
                $('#mh_overview').addClass('on');
            }

            if (scrollTop >= 1450) {
                $('#mh_background').addClass('on');
            }

            if (scrollTop >= 2550) {
                $('#mh_research').addClass('on');
            }

            if (scrollTop >= 2600) {
                $('.us_img').addClass('on');
            }

            if (scrollTop >= 3400) {
                $('.persona').addClass('on');
            }

            if (scrollTop >= 3650) {
                $('.pr_img').addClass('on');
            }

            if (scrollTop >= 5200) {
                $('#mh_solution').addClass('on');
            }

            if (scrollTop >= 5400) {
                $('.sl_img').addClass('on');
            }

            if (scrollTop >= 6100) {
                $('#mh_flow').addClass('on');
            }

            if (scrollTop >= 7300) {
                $('#mh_style').addClass('on');
            }

            if (scrollTop >= 7800) {
                $('.font02').addClass('on');
            }

            if (scrollTop >= 7800) {
                $('.color02').addClass('on');
            }

            if (scrollTop >= 8500) {
                $('.logo02').addClass('on');
            }

            if (scrollTop >= 8800) {
                $('.icon02').addClass('on');
            }

            if (scrollTop >= 8900) {
                $('.plus_icon').addClass('on');
            }

            if (scrollTop >= 10300) {
                $('#munch').addClass('on');
            }

            if (scrollTop >= 10700) {
                $('.mu_iphone').addClass('on');
            }

            if (scrollTop >= 12000) {
                $('#mh_on_b').addClass('on');
            }

            if (scrollTop >= 12700) {
                $('.on_img02').addClass('on');
            }

            if (scrollTop >= 13700) {
                $('#mh_login').addClass('on');
            }

            if (scrollTop >= 14250) {
                $('.log_01_page').addClass('on');
            }

            if (scrollTop >= 14350) {
                $('.lo_bg_text').addClass('on');
            }

            if (scrollTop >= 17500) {
                $('#munch_home').addClass('on');
            }

            if (scrollTop >= 16900) {
                $('.mh_text').addClass('on');
            }

            if (scrollTop >= 17200) {
                $('.mh_page').addClass('on');
            }

            if (scrollTop >= 18200) {
                $('.mh_ip_02').addClass('on');
            }

            if (scrollTop >= 17800) {
                $('.mh_ip_03').addClass('on');
            }


            if (scrollTop >= 19400) {
                $('#mh_detail').addClass('on');
            }

            if (scrollTop >= 19300) {
                $('.de_ip_01').addClass('on');
            }

            if (scrollTop >= 19800) {
                $('.de_ip_02').addClass('on');
            }

            if (scrollTop >= 19900) {
                $('.de_page_top').addClass('on');
            }

            if (scrollTop >= 20800) {
                $('.de_bg_text').addClass('on');
            }

            if (scrollTop >= 21800) {
                $('#mh_list ').addClass('on');
            }

            if (scrollTop >= 22500) {
                $('.li_bg').addClass('on');
            }

            if (scrollTop >= 23500) {
                $('#mh_img').addClass('on');
            }

            if (scrollTop >= 24500) {
                $('#mh_story').addClass('on');
            }

            if (scrollTop >= 25500) {
                $('.text_point').addClass('on');
            }

            if (scrollTop >= 25800) {
                $('#mh_life').addClass('on');
            }

            if (scrollTop >= 26500) {
                $('.li_img').addClass('on');
            }

            if (scrollTop >= 28300) {
                $('#th_text').addClass('on');
            }





            /*numbering*/

            if (scrollTop >= 260) {
                $('.gnb_ov').addClass('on');
            }

            if (scrollTop >= 550) {
                $('#nm_overview').addClass('on');
            }

            if (scrollTop >= 550) {
                $('.ov_text').addClass('on');
            }

            if (scrollTop >= 2300) {
                $('#nm_text ').addClass('on');
            }

            if (scrollTop >= 2400) {
                $('.interview_img').addClass('on');
            }

            if (scrollTop >= 3300) {
                $('.solution_01').addClass('on');
            }

            if (scrollTop >= 4000) {
                $('.arr').addClass('on');
            }

            if (scrollTop >= 4600) {
                $('.img_text').addClass('on');
            }

            if (scrollTop >= 6100) {
                $('.gnb_st').addClass('on');
            }

            if (scrollTop >= 6400) {
                $('.nm_font').addClass('on');
            }

            if (scrollTop >= 8200) {
                $('.nm_flow').addClass('on');
            }

            if (scrollTop >= 9750) {
                $('.gnb_in').addClass('on');
            }

            if (scrollTop >= 9900) {
                $('#nm_intro').addClass('on');
            }

            if (scrollTop >= 10400) {
                $('.intro_page').addClass('on');
            }

            if (scrollTop >= 11800) {
                $('.gnb_ma').addClass('on');
            }

            if (scrollTop >= 12300) {
                $('.ma_iphone').addClass('on');
            }

            if (scrollTop >= 13000) {
                $('.ma_page').addClass('on');
            }

            if (scrollTop >= 13500) {
                $('.main_bg').addClass('on');
            }

            if (scrollTop >= 16300) {
                $('.gnb_pa').addClass('on');
            }

            if (scrollTop >= 16600) {
                $('.pt_01').addClass('on');
            }

            if (scrollTop >= 18300) {
                $('.pt_02').addClass('on');
            }

            if (scrollTop >= 20000) {
                $('.pt_03').addClass('on');
            }

            if (scrollTop >= 22700) {
                $('.gnb_ot').addClass('on');
            }

            if (scrollTop >= 23000) {
                $('#nm_other').addClass('on');
            }

            if (scrollTop >= 25800) {
                $('.gnb_ab').addClass('on');
            }

            if (scrollTop >= 26000) {
                $('#nm_about').addClass('on');
            }

            if (scrollTop >= 27900) {
                $('.th_inner').addClass('on');
            }





            /*feev*/

            if (scrollTop >= 460) {
                $('#fe_head').addClass('on');
            }
            if (scrollTop >= 2400) {
                $('#fe_head_02').addClass('on');
            }

            if (scrollTop >= 6580) {
                $('.fe_head_03').addClass('on');
            }

            if (scrollTop >= 14300) {
                $('.fe_head_04').addClass('on');
            }

            if (scrollTop >= 690) {
                $('.ov_part01').addClass('on');
            }

            if (scrollTop >= 1550) {
                $('.ov_part02').addClass('on');
            }

            if (scrollTop >= 2800) {
                $('.ma_inner').addClass('on');
            }

            if (scrollTop >= 5300) {
                $('.fe_img').addClass('on');
            }

            if (scrollTop >= 6900) {
                $('#fe_detail').addClass('on');
            }

            if (scrollTop >= 14550) {
                $('#fe_vari').addClass('on');
            }



            /*injiactive*/

            if (scrollTop >= 460) {
                $('#in_head').addClass('on');
            }
            if (scrollTop >= 2400) {
                $('#in_head_02').addClass('on');
            }

            if (scrollTop >= 6580) {
                $('.in_head_03').addClass('on');
            }

            if (scrollTop >= 14300) {
                $('.in_head_04').addClass('on');
            }

            if (scrollTop >= 690) {
                $('.ov_part03').addClass('on');
            }

            if (scrollTop >= 1550) {
                $('.ov_part04').addClass('on');
            }
            if (scrollTop >= 2800) {
                $('.in_inner').addClass('on');
            }

            if (scrollTop >= 5200) {
                $('.in_img').addClass('on');
            }

            if (scrollTop >= 6900) {
                $('#in_detail').addClass('on');
            }

            if (scrollTop >= 14550) {
                $('#in_vari').addClass('on');
            }



            /*vmd*/

            if (scrollTop >= 426) {
                $('.vm_inner').addClass('on');
            }

            if (scrollTop >= 1925) {
                $('.visual_01').addClass('on');
            }

            if (scrollTop >= 4000) {
                $('.visual_02').addClass('on');
            }

            if (scrollTop >= 6100) {
                $('.visual_03').addClass('on');
            }

            if (scrollTop >= 8100) {
                $('.visual_04').addClass('on');
            }

            if (scrollTop >= 9550) {
                $('.vm_visual').addClass('on');
            }







        });





        /*  slide,click event section */


        $('#text_box03').mouseenter(function () {
            $('#text_box03 .text02').css('width', '74px');
            $('#text_box03 .text04').css('width', '74px');
        });

        $('#text_box03 .contents').mouseleave(function () {
            $('#text_box03 .text02').css('width', '0px');
            $('#text_box03 .text04').css('width', '0px');
        });


        $('#text_box04').mouseenter(function () {
            $('#text_box04 .text02').css('width', '119px');
            $('#text_box04 .text04').css('width', '119px');
        });

        $('#text_box04 .contents').mouseleave(function () {
            $('#text_box04 .text02').css('width', '0px');
            $('#text_box04 .text04').css('width', '0px');
        });


        $('#text_box05').mouseenter(function () {
            $('#text_box05 .text02').css('width', '74px');
            $('#text_box05 .text04').css('width', '119px');
        });

        $('#text_box05 .contents').mouseleave(function () {
            $('#text_box05 .text02').css('width', '0px');
            $('#text_box05 .text04').css('width', '0px');
        });


        $('#text_box01').mouseenter(function () {
            $('#text_box01 .text02').css('width', '119px');
            $('#text_box01 .text04').css('width', '74px');
        });

        $('#text_box01 .contents').mouseleave(function () {
            $('#text_box01 .text02').css('width', '0px');
            $('#text_box01 .text04').css('width', '0px');
        });

        $('#text_box02').mouseenter(function () {
            $('#text_box02 .text02').css('width', '142px');
            $('#text_box02 .text04').css('width', '142px');
        });

        $('#text_box02 .contents').mouseleave(function () {
            $('#text_box02 .text02').css('width', '0px');
            $('#text_box02 .text04').css('width', '0px');
        });

        $('#text_box06').mouseenter(function () {
            $('#text_box06 .text02').css('width', '74px');
            $('#text_box06 .text04').css('width', '119px');
        });

        $('#text_box06 .contents').mouseleave(function () {
            $('#text_box06 .text02').css('width', '0px');
            $('#text_box06 .text04').css('width', '0px');
        });


    })



$(document).ready(function() {

     $(window).on('popstate', function() {
          location.reload(true);
       });
    $('[data-toggle="tooltip"]').tooltip();

    // Search Bar
    $('.headersearch').on('click', '.search-toggle', function(e) {
        var selector = $(this).data('selector');
        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');
        e.preventDefault();
    });

    // Heart Button
    // $(function() {
    //     $(".heart_btn svg").click(function() {
    //         $(".heart_btn svg, .heart_btn .like_text").toggleClass("press", 1000);
    //     });
    // });

    // Desktop  scroll
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $(".header_fix").addClass("menu_scroll");
            $(".smllogo").addClass("smllogo_scroll");
            $(".big-logo").hide();
            $(".small-logo").show();
        } else {
            $(".header_fix").removeClass("menu_scroll");
            $(".smllogo").removeClass("smllogo_scroll");
            $(".small-logo").hide();
            $(".big-logo").show();
            
        }
    });

    // main slider
    $('#web-slider').owlCarousel({
        // navigation: true,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                nav: false,
                dots: true,
                items: 1
            }
        }
    });


    // New Arrival
    $('.new_arrival_slider').owlCarousel({
        loop: false,
        margin: 30,
        dots: false,
        // navText: ["<div class='arrowClass'><i class='fa fa-arrow-left leftArrow'></i>", "<i class='fa fa-arrow-right rightArrow'></i></div>"],
        navText: ["<div class='arrowClass'><img src='public/frontend/images/left.png' alt='Left Arrow' class='leftArrow'>", "<img src='public/frontend/images/right.png' alt='Right Arrow' class='rightArrow'></div>"],
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,

        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })
    // testimonial 
    $('.testimonial_slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: false,

        responsive: {
            0: {
                margin: 30,
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    })
    // responsive - slider

    $('.responsive-slider').owlCarousel({
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: false,
        center: true,
        loop: true,
        margin: 15,

        responsive: {

            0: {
                center: true,
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }

    })
    // facilty Slider
    $('.facility_slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: false,
        responsive: {
            0: {
                margin: 30,
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Login form
    $('#Login-form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {

                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                    }
                },

                password: {
                    validators: {
                        notEmpty: {
                            message: 'Password is required and cannot be empty'
                        },
                    }
                },
            }
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': "{{csrf_token()}}"
                },
                url: BASE_URL + "/custom-login",
                method: "POST",
                data: $('#Login-form').serialize(),

                beforeSend: function() {
                    // $('.loginError').html('');
                    $('#LoginButton').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('#LoginButton').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.loginError').html(data.message);
                        var delay = 1000;
                        if(data.backUrl == false){
                            var URL = BASE_URL + '/my-dashboard';
                        } else {
                            var URL = data.backUrl;
                        }
                        setTimeout(function() { window.location = URL; }, delay);
                    } else {
                        $('.loginError').html(data.message);
                    }
                },
                complete: function(data) {
                    $('#LoginButton').html('Login');
                    $('#LoginButton').attr('disabled', false);
                }
            });
        });

    // register form
    $('#register-form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                first_name: {
                    message: 'First Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'First Name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: ' First Name should only consist of alphabets'
                        },
                    }
                },
                last_name: {
                    message: 'Last Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Last Name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: 'Last Name should only consist of alphabets'
                        },
                    }
                },
                address: {
                    message: 'Address is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Address is required and cannot be empty'
                        },
                    }
                },
                phone: {
                    message: 'Phone is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Phone is required and cannot be empty'
                        },
                        stringLength: {
                            max: 15,
                            min: 10,
                            message: 'Please enter valid phone number'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                    }
                },
                pincode: {
                    message: 'Pincode is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Pincode is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/,
                            message: 'Pincode should only consist of alphabets and numeric'
                        },
                    }
                },
                city: {
                    message: 'City is not valid',
                    validators: {
                        notEmpty: {
                            message: 'City is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: 'City should only consist of alphabets'
                        },
                    }
                },
                state: {
                    message: 'State is not valid',
                    validators: {
                        notEmpty: {
                            message: 'State is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: 'State should only consist of alphabets'
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Password is required and cannot be empty'
                        },
                        stringLength: {
                            min: 8,
                            message: 'Password must have at least 8 characters'
                        },
                    }
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'Confirm Password is required and cannot be empty'
                        },
                        stringLength: {
                            min: 8,
                            message: 'Password must have at least 8 characters'
                        },
                        identical: {
                            field: 'password',
                            message: 'Password and its Confirm Password are not the same'
                        }
                    }
                },
                country: {
                    validators: {
                        notEmpty: {
                            message: 'County is required'
                        }
                    }
                }
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': "{{csrf_token()}}"
                },
                url: BASE_URL + "/custom-signup",
                method: "POST",
                data: $('#register-form').serialize(),

                beforeSend: function() {
                    $('#register_button').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('#register_button').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.registerError').html(data.message);
                        $('#register-form').bootstrapValidator('resetForm', true);

                        var delay = 1000;
                        if(data.backUrl == false){
                            var URL = BASE_URL + '/my-dashboard';
                        } else {
                            var URL = data.backUrl;
                        }
                        setTimeout(function() { window.location = URL; }, delay);
                        // window.location = '';
                    } else {
                        $('.registerError').html(data.message);
                    }
                },
                complete: function(data) {
                    $('#register_button').html('Register');
                    $('#register_button').attr('disabled', false);
                }
            });
        });



    // for phone number validation
    $(function() {
        $('.numeric').on('input', function(event) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });


    // for number with dot validation
    $(function() {
        $('.numericdot').on('input', function(event) {
            this.value = this.value.replace(/[^0-9.]/g, '');
        });
    });

    // forgot_password
    $('#forgot_password').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {

                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                    }
                },
            }
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();
            $.ajax({
                url: BASE_URL + "/forgot-password",
                method: "POST",
                data: $('#forgot_password').serialize(),

                beforeSend: function() {
                    $('#resetPassword').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('#resetPassword').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.registerError').html(data.message);
                        $('#forgot_password').bootstrapValidator('resetForm', true);
                    } else {
                        $('.registerError').html(data.message);
                    }
                },
                complete: function(data) {
                    $('#resetPassword').html('Reset My Password');
                    $('#resetPassword').attr('disabled', false);
                }
            });
        });

    // Reset Password
    $('#reset_password').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Password is required and cannot be empty'
                        },
                        stringLength: {
                            min: 8,
                            message: 'Password must have at least 8 characters'
                        },
                    }
                },
                password_confirmation: {
                    validators: {
                        notEmpty: {
                            message: 'Confirm Password is required and cannot be empty'
                        },
                        stringLength: {
                            min: 8,
                            message: 'Password must have at least 9 characters'
                        },
                        identical: {
                            field: 'password',
                            message: 'Password and its Confirm Password are not the same'
                        }
                    }
                }
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();

            var password                = $('#password').val();
            var passwordConfirmation    = $('#password_confirmation').val();
            if(password != passwordConfirmation){
                $('.registerError').html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>New Password and Confirm password should be same.</div>');
                return false;
            }

            $.ajax({
                url: BASE_URL + "/password/reset",
                method: "POST",
                data: $('#reset_password').serialize(),

                beforeSend: function() {
                    $('#resetPassword').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('#resetPassword').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.registerError').html(data.message);
                        var delay = 1000;
                        var URL = BASE_URL + '/my-dashboard';
                        setTimeout(function() { window.location = URL; }, delay);
                    } else {
                        $('.registerError').html(data.message);
                    }
                },
                complete: function(data) {
                    $('#resetPassword').html('Reset My Password');
                    $('#resetPassword').attr('disabled', false);
                }
            });
        });


    //  newsletter_form
    $('#newsletter_form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {

                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                        // emailAddress: {
                        //     message: ' Please enter a valid email address'
                        // }
                    }
                },
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();
            $.ajax({
                url: BASE_URL + "/newsletter",
                method: "POST",
                data: $('#newsletter_form').serialize(),

                beforeSend: function() {
                    $('#newsletter').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('#newsletter').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.newsletterMsg').html(data.message);
                        $('#newsletter_form').bootstrapValidator('resetForm', true);

                        var delay = 3000;
                        setTimeout(function() { $('.newsletterMsg').html(''); }, delay);
                    } else {
                        $('.newsletterMsg').html(data.message);
                    }
                },
                complete: function(data) {
                    $('#newsletter').html('Subscribe');
                    $('#newsletter').attr('disabled', false);
                }
            });
        });

    // enter code
    $('#discountform').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            entercode: {
                message: 'Enter code is not valid',
                validators: {
                    notEmpty: {
                        message: 'Enter code  is required'
                    },
                }
            },
        }
    })
    .on('error.validator.bv', function(e, data) {
        // $(e.target)    --> The field element
        // data.bv        --> The BootstrapValidator instance
        // data.field     --> The field name
        // data.element   --> The field element
        // data.validator --> The current validator name

        data.element
            .data('bv.messages')
            // Hide all the messages
            .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
            .filter('[data-bv-validator="' + data.validator + '"]').show();
    })
    .on("success.form.bv", function(e) {
        e.preventDefault();
        var couponCode = $('#entercode').val();
        $.ajax({
            url: BASE_URL + "/coupon-apply",
            method: 'POST',
            data: { coupon_code: couponCode , coupon_type: 1 },
            beforeSend: function() {
                $('.couponApply').html('Loading..');
                $('.couponApply').attr('disabled', true);
            },
            success: function(data) {
                if (data.status == false) {
                    $('.show_discount').hide();
                    $('.grand_total').html('$'+data.grand_total);
                    toastr.error(data.message);
                } else {
                    $('.show_discount').show();
                    $('.discount_price').html('$'+data.discount_price);
                    $('.grand_total').html('$'+data.grand_total);
                    $('.applydiscount').html('(Apply)');
                    // $("#applydiscount"+couponCode.toUpperCase()).html("(Remove)");
                    $('.applydiscount'+data.coupon_id).html('(Remove)');
                    toastr.success(data.message);
                }
            },
            complete: function(data) {
                $('.couponApply').html('Apply');
                $('.couponApply').attr('disabled', false);
            }
        });
    });

    // Coupon Apply
    $('.applydiscount').click(function() {
        var couponCode = $(this).attr('couponCode');
        var couponId = $(this).attr('couponId');
        $('.applydiscount'+couponId).html('(Loading...)');

        $.ajax({
            url: BASE_URL + "/coupon-apply",
            method: 'POST',
            data: { coupon_code: couponCode , coupon_type: 2 },
            beforeSend: function() {},
            success: function(data) {
                if (data.status == false) {
                    toastr.error(data.message);
                } else {
                    if(data.couponType == true){
                        $('.applydiscount').html('(Apply)');
                        $('#show_discount').hide();
                        $('.discount_price').html('$'+data.discount_price);
                    } else {
                        $('.applydiscount').html('(Apply)');
                        $('.applydiscount'+couponId).html('(Remove)');
                        $('#show_discount').show();
                        $('.discount_price').html('$'+data.discount_price);    
                    }
                    
                    $('.grand_total').html('$'+data.grand_total);
                    toastr.success(data.message);
                }
            },
            complete: function(data) {}
        });
    });


    // billing form(checkout)
    $('#billing_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            billing_first_name: {
                message: 'First Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'First Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: ' First Name should only consist of alphabets'
                    },
                }
            },
            billing_last_name: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'Last Name should only consist of alphabets'
                    },
                }
            },
            billing_address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    },
                }
            },
            billing_phone: {
                message: 'Phone is not valid',
                validators: {
                    notEmpty: {
                        message: 'Phone is required and cannot be empty'
                    },
                    stringLength: {
                        max: 15,
                        min: 10,
                        message: 'Please enter valid phone number'
                    }
                }
            },
            billing_email: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                        message: 'Please enter a valid email address'
                    },
                }
            },
            billing_pincode: {
                message: 'Pincode is not valid',
                validators: {
                    notEmpty: {
                        message: 'Pincode is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'Pincode should only consist of alphabets and numeric'
                    },
                }
            },
            billing_city: {
                message: 'City is not valid',
                validators: {
                    notEmpty: {
                        message: 'City is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'City should only consist of alphabets'
                    },
                }
            },
            billing_state: {
                message: 'State is not valid',
                validators: {
                    notEmpty: {
                        message: 'State is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'State should only consist of alphabets'
                    },
                }
            },
            billing_country: {
                validators: {
                    notEmpty: {
                        message: 'County is required'
                    }
                }
            },
            shipping_first_name: {
                message: 'First Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'First Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: ' First Name should only consist of alphabets'
                    },
                }
            },
            shipping_last_name: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'Last Name should only consist of alphabets'
                    },
                }
            },
            shipping_address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    },
                }
            },
            shipping_phone: {
                message: 'Phone is not valid',
                validators: {
                    notEmpty: {
                        message: 'Phone is required and cannot be empty'
                    },
                    stringLength: {
                        max: 15,
                        min: 10,
                        message: 'Please enter valid phone number'
                    }
                }
            },
            shipping_email: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                        message: 'Please enter a valid email address'
                    },
                }
            },
            shipping_pincode: {
                message: 'Pincode is not valid',
                validators: {
                    notEmpty: {
                        message: 'Pincode is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'Pincode should only consist of alphabets and numeric'
                    },
                }
            },
            shipping_city: {
                message: 'City is not valid',
                validators: {
                    notEmpty: {
                        message: 'City is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'City should only consist of alphabets'
                    },
                }
            },
            shipping_state: {
                message: 'State is not valid',
                validators: {
                    notEmpty: {
                        message: 'State is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'State should only consist of alphabets'
                    },
                }
            },
            shipping_country: {
                validators: {
                    notEmpty: {
                        message: 'County is required'
                    }
                }
            }
        }
    })
    .on('error.validator.bv', function(e, data) {
        // $(e.target)    --> The field element
        // data.bv        --> The BootstrapValidator instance
        // data.field     --> The field name
        // data.element   --> The field element
        // data.validator --> The current validator name

        data.element
            .data('bv.messages')
            // Hide all the messages
            .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
            .filter('[data-bv-validator="' + data.validator + '"]').show();
    })
    .on("success.form.bv", function() {
        $('#product-loading').modal('toggle');
    });    

    // Get Shipping Value
    $('.getShipping').on('change', function() {
        var countryId = this.value;
        $.ajax({
            url: BASE_URL + "/change-shipping-value",
            method: 'POST',
            data: { country_id: countryId },
            beforeSend: function() {},
            success: function(data) {
                if (data.status == false) {
                } else {
                    $('.shippingPrice').html('$'+data.shipping_price);
                    $('.grand_total').html('$'+data.grand_total);
                }
            },
            complete: function(data) {}
        });
    });

    // enquiry form
    $('#enquiry-form').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                f_name: {
                    message: 'First Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'First Name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: 'First Name should only consist of alphabets'
                        },
                        stringLength: {
                            max: 50,
                            message: 'Max 50 characters allowed'
                        }
                    }
                },
                l_name: {
                    message: 'Last Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Last Name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: 'Last Name should only consist of alphabets'
                        },
                        stringLength: {
                            max: 50,
                            message: 'Max 50 characters allowed'
                        }
                    }
                },
                phone: {
                    message: 'Phone is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Phone is required and cannot be empty'
                        },
                        stringLength: {
                            max: 15,
                            min: 10,
                            message: 'Please enter valid phone number'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                        stringLength: {
                            max: 50,
                            message: 'Max 50 characters allowed'
                        }
                    }
                },
                comment: {
                    message: 'Comment is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Comment is required and cannot be empty'
                        },
                        stringLength: {
                            max: 1000,
                            message: 'Max 1000 characters allowed'
                        }
                    }
                },

            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();
            $.ajax({
                url: BASE_URL + "/product-enquiry",
                method: "POST",
                data: $('#enquiry-form').serialize(),

                beforeSend: function() {
                    $('.productEnquiryButton').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('.productEnquiryButton').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.registerError').html(data.message);
                        $('#enquiry-form').bootstrapValidator('resetForm', true);
                        var delay = 5000;
                        setTimeout(function() { 
                            $('.registerError').html('');
                            $('#enquiry').modal('toggle');
                        }, delay);
                    } else {
                        $('.registerError').html(data.message);
                    }
                },
                complete: function(data) {
                    $('.productEnquiryButton').html('Send');
                    $('.productEnquiryButton').attr('disabled', false);
                }
            });
        });


    // personal_information
    $('#personal_information').bootstrapValidator({
            // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                f_name: {
                    message: 'First Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'First Name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: ' First Name should only consist of alphabets'
                        },
                    }
                },
                l_name: {
                    message: 'Last Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Last Name is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z]+$/,
                            message: 'Last Name should only consist of alphabets'
                        },
                    }
                },
                address: {
                    message: 'Address is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Address is required and cannot be empty'
                        },
                    }
                },
                phone: {
                    message: 'Phone is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Phone is required and cannot be empty'
                        },
                        stringLength: {
                            max: 15,
                            min: 10,
                            message: 'Please enter valid phone number'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email address is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Please enter a valid email address'
                        },
                    }
                },
                pincode: {
                    message: 'Pincode is not valid',
                    validators: {
                        notEmpty: {
                            message: 'Pincode is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/,
                            message: 'Pincode should only consist of alphabets and numeric'
                        },
                    }
                },
                city: {
                    message: 'City is not valid',
                    validators: {
                        notEmpty: {
                            message: 'City is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: 'City should only consist of alphabets'
                        },
                    }
                },
                state: {
                    message: 'State is not valid',
                    validators: {
                        notEmpty: {
                            message: 'State is required and cannot be empty'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z ]+$/,
                            message: 'State should only consist of alphabets'
                        },
                    }
                },
                country: {
                    validators: {
                        notEmpty: {
                            message: 'County is required'
                        }
                    }
                }
            }
        })
        .on('error.validator.bv', function(e, data) {
            // $(e.target)    --> The field element
            // data.bv        --> The BootstrapValidator instance
            // data.field     --> The field name
            // data.element   --> The field element
            // data.validator --> The current validator name

            data.element
                .data('bv.messages')
                // Hide all the messages
                .find('.help-block[data-bv-for="' + data.field + '"]').hide()
                // Show only message associated with current validator
                .filter('[data-bv-validator="' + data.validator + '"]').show();
        })
        .on("success.form.bv", function(e) {
            e.preventDefault();
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': "{{csrf_token()}}"
                },
                url: BASE_URL + "/update-userinfo",
                method: "POST",
                data: $('#personal_information').serialize(),

                beforeSend: function() {
                    $('#updateInfo').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                    $('#updateInfo').attr('disabled', true);
                },
                success: function(data) {
                    if (data.status == true) {
                        $('.registerError').html(data.message);
                    } else {
                        $('.registerError').html(data.message);
                    }
                },
                complete: function(data) {
                    $('#updateInfo').html('Update');
                    $('#updateInfo').attr('disabled', false);
                }
            });
        });

    // change_password
    $('#change_password').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3 .1 .0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            currentpassword: {
                validators: {
                    notEmpty: {
                        message: 'Current Password is required and cannot be empty'
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 8,
                        message: 'Password must have at least 8 characters'
                    },
                    // identical: {
                    //     field: 'confirmPassword',
                    //     message: 'password and its confirm are not the same'
                    // }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'Confirm Password is required and cannot be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'Password and its Confirm Password are not the same'
                    }
                }
            }
        }
    })
    .on('error.validator.bv', function(e, data) {
        // $(e.target)    --> The field element
        // data.bv        --> The BootstrapValidator instance
        // data.field     --> The field name
        // data.element   --> The field element
        // data.validator --> The current validator name

        data.element
            .data('bv.messages')
            // Hide all the messages
            .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
            .filter('[data-bv-validator="' + data.validator + '"]').show();
    })
    .on("success.form.bv", function(e) {
        e.preventDefault();

        var password           = $('#password').val();
        var confirmPassword    = $('#confirmPassword').val();
        if(password != confirmPassword){
            $('.registerError').html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>New Password and Confirm password should be same.</div>');
            return false;
        }

        $.ajax({
            url: BASE_URL + "/change-password",
            method: "POST",
            data: $('#change_password').serialize(),

            beforeSend: function() {
                $('.passwordUpdate').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                $('.passwordUpdate').attr('disabled', true);
            },
            success: function(data) {
                if (data.status == true) {
                    $('.registerError').html(data.message);
                    $('#change_password').bootstrapValidator('resetForm', true);
                } else {
                    $('.registerError').html(data.message);
                    $('.passwordUpdate').attr('disabled', false);
                }
            },
            complete: function(data) {
                $('.passwordUpdate').html('Update');
                $('.passwordUpdate').attr('disabled', false);
            }
        });
    });


    // contact form

    $('#contact-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            f_name: {
                // message: 'The First Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'First Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'First Name should only consist of alphabets'
                    },
                }
            },
            l_name: {
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'Last Name should only consist of alphabets'
                    },
                }
            },
            phone: {
                message: ' Phone is not valid',
                validators: {
                    notEmpty: {
                        message: ' Phone is required and cannot be empty'
                    },
                    stringLength: {
                        max: 15,
                        min: 10,
                        message: 'Please enter valid phone number'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                        message: 'Please enter a valid email address'
                    },
                }
            },
            question: {
                validators: {
                    notEmpty: {
                        message: 'Message is required and cannot be empty'
                    },
                }
            }
        }
    })
    .on('error.validator.bv', function(e, data) {
        // $(e.target)    --> The field element
        // data.bv        --> The BootstrapValidator instance
        // data.field     --> The field name
        // data.element   --> The field element
        // data.validator --> The current validator name

        data.element
            .data('bv.messages')
            // Hide all the messages
            .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
            .filter('[data-bv-validator="' + data.validator + '"]').show();
    })
    .on("success.form.bv", function(e) {
        e.preventDefault();

        var response = grecaptcha.getResponse(enquiryRecaptcha);
        if(response.length == 0) {
            $('#google_captcha_enq').html('Please verify human check.');
            $('#send_enquiry').attr('disabled', !1);
            return false;
        } else {
            $('#google_captcha_enq').html('');
            $('#send_enquiry').attr('disabled', !1);
        }

        $.ajax({
            headers: { 'X-CSRF-TOKEN': "{{csrf_token()}}" },
            url: BASE_URL + "/contact-form-submit",
            datatType: 'json',
            type: 'POST',
            data: $('#contact-form').serialize(),
            beforeSend: function() {
                $('#send_enquiry').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                $('#send_enquiry').attr('disabled', !0)
            },
            success: function(data) {
                if (data.status == true) {
                    $('#send_enquiry').html('Submit');
                    $('#send_enquiry').attr('disabled', !1);
                    $('#contact-form').bootstrapValidator('resetForm', !0);
                    $('.registerError').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> Thank you for contacting us. Our representative will contact you soon.</div>');
                    grecaptcha.reset(enquiryRecaptcha);
                } else {
                    $('#send_enquiry').html('Submit');
                    $('#send_enquiry').attr('disabled', !1);
                    $('.registerError').html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> Oops , Something went wrong please try again after sometime !!</div>');
                }
            },
            complete: function(data) {
                $('#send_enquiry').html('Submit');
                $('#send_enquiry').attr('disabled', !1)
            }
        });
    });


    var enquiryRecaptcha;
    var onloadCallback = function() {
        if ( $('#enquiry_recaptcha').length ) {
            enquiryRecaptcha = grecaptcha.render('enquiry_recaptcha', {
                'sitekey' : '6Lcd1eMUAAAAAHbipiruDddcpJamL2YdmpAtlWPw'
            });
        }
    };

    

    // review form
    $('#write-review-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'First Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Name is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z ]+$/,
                        message: 'Name should only consist of alphabets'
                    },
                    stringLength: {
                        max: 50,
                        message: 'Max 50 characters allowed'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                        message: 'Please enter a valid email address'
                    },
                    stringLength: {
                        max: 50,
                        message: 'Max 50 characters allowed'
                    }
                }
            },
            review_title: {
                message: 'Review is not valid',
                validators: {
                    // notEmpty: {
                    //     message: 'Title is required and cannot be empty'
                    // },
                    stringLength: {
                        max: 100,
                        message: 'Max 100 characters allowed'
                    }
                }
            },
            comment: {
                message: 'Review is not valid',
                validators: {
                    // notEmpty: {
                    //     message: 'Review is required and cannot be empty'
                    // },
                    stringLength: {
                        max: 1000,
                        message: 'Max 1000 characters allowed'
                    }
                }
            },
        }
    })
    .on('error.validator.bv', function(e, data) {
        // $(e.target)    --> The field element
        // data.bv        --> The BootstrapValidator instance
        // data.field     --> The field name
        // data.element   --> The field element
        // data.validator --> The current validator name

        data.element
            .data('bv.messages')
            // Hide all the messages
            .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
            .filter('[data-bv-validator="' + data.validator + '"]').show();
    })
    .on("success.form.bv", function(e) {
        e.preventDefault();

        $('.loginError').html('');
        var rating = $("input:radio[name=rating]:checked").val();

        if(rating == undefined) {
            $('#google_captcha_enq').html('Please select rating to continue');
            $('#reviewButton').attr('disabled', !1);
            return false;
        } else {
            $('#google_captcha_enq').html('');
            $('#reviewButton').attr('disabled', !1);
        }
        
        $.ajax({
            url: BASE_URL + "/submit-review",
            method: "POST",
            data: $('#write-review-form').serialize(),

            beforeSend: function() {
                $('#reviewButton').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                $('#reviewButton').attr('disabled', true);
            },
            success: function(data) {
                if (data.status == true) {
                    $('.loginError').html(data.message);
                    $('#write-review-form').bootstrapValidator('resetForm', true);
                    $("input:radio[name=rating]:checked").prop('checked', false);
                    var delay = 5000;
                    setTimeout(function() { 
                        $('.loginError').html('');
                        $('#write_review').modal('toggle');
                    }, delay);

                } else {
                    $('.loginError').html(data.message);
                    var delay = 5000;
                    setTimeout(function() { 
                        $('.loginError').html('');
                    }, delay);
                }
            },
            complete: function(data) {
                $('#reviewButton').html('Send');
                $('#reviewButton').attr('disabled', false);
            }
        });
    });

    // Reset Dorm
    $('.resetReviews').click(function() {
        $('.loginError').html('');
        $("input:radio[name=rating]:checked").prop('checked', false);
        $('#write-review-form').bootstrapValidator('resetForm', !0);
        $("#write-review-form").find('.has-error').removeClass("has-error");
        $("#write-review-form").find('.has-success').removeClass("has-success");
        $('#write-review-form').find('.help-block').css("display", "none");
    });

    // track-form
    $('#track-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email_address: {
                validators: {
                    notEmpty: {
                        message: 'Email address is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                        message: 'Please enter a valid email address'
                    },
                }
            },
            orderno: {
                validators: {
                    notEmpty: {
                        message: 'Order Number is required and cannot be empty'
                    }
                }
            },
        }
    })
    .on('error.validator.bv', function(e, data) {
        // $(e.target)    --> The field element
        // data.bv        --> The BootstrapValidator instance
        // data.field     --> The field name
        // data.element   --> The field element
        // data.validator --> The current validator name

        data.element
            .data('bv.messages')
            // Hide all the messages
            .find('.help-block[data-bv-for="' + data.field + '"]').hide()
            // Show only message associated with current validator
            .filter('[data-bv-validator="' + data.validator + '"]').show();
    })
    .on("success.form.bv", function(e) {
        e.preventDefault();

        $.ajax({
            headers: { 'X-CSRF-TOKEN': "{{csrf_token()}}" },
            url: BASE_URL + "/track-order",
            datatType: 'json',
            type: 'POST',
            data: $('#track-form').serialize(),
            beforeSend: function() {
                $('#track_status').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
                $('#track_status').attr('disabled', !0)
            },
            success: function(data) {
                if (data.status == true) {
                    $('#track-form').bootstrapValidator('resetForm', !0);
                    $('.registerError').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+data.message+'</div>');

                    var delay = 3000;
                    if(data.dhl_tracking != null){
                        var URL = 'https://www.dhl.com/en/express/tracking.html?AWB='+data.dhl_tracking+'&brand=DHL';
                    } else {
                        var URL = BASE_URL + '/track-order-successfull';
                    }
                    
                    setTimeout(function() { window.location = URL; }, delay);
                } else {
                    $('.registerError').html('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>'+data.message+'</div>');
                }
            },
            complete: function(data) {
                $('#track_status').html('Submit');
                $('#track_status').attr('disabled', !1)
            }
        });
    });

    // product listing Page more Category
    $('.moreless-button-category').click(function() {
        $('.moreoptioncategory').slideToggle();
        if ($('.moreless-button-category').text() == "View More") {
            $(this).text("View Less")
        } else {
            $(this).text("View More")
        }
    });

    // product listing Page more Color
    $('.moreless-button-color').click(function() {
        $('.moreoptioncolor').slideToggle();
        if ($('.moreless-button-color').text() == "View More") {
            $(this).text("View Less")
        } else {
            $(this).text("View More")
        }
    });

    // product listing Page more Fabric
    $('.moreless-button-fabric').click(function() {
        $('.moreoptionfabric').slideToggle();
        if ($('.moreless-button-fabric').text() == "View More") {
            $(this).text("View Less")
        } else {
            $(this).text("View More")
        }
    });

    // product listing Page more Occassion
    $('.moreless-button-occasion').click(function() {
        $('.moreoptionoccasion').slideToggle();
        if ($('.moreless-button-occasion').text() == "View More") {
            $(this).text("View Less")
        } else {
            $(this).text("View More")
        }
    });

    // product listing Page more Size
    $('.moreless-button-size').click(function() {
        $('.moreoptionsize').slideToggle();
        if ($('.moreless-button-size').text() == "View More") {
            $(this).text("View Less")
        } else {
            $(this).text("View More")
        }
    });

    // sort by drop down listing page
    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function() {
            var obj = this;

            obj.dd.on('click', function(event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function() {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function() {
            return this.val;
        },
        getIndex: function() {
            return this.index;
        }
    }

    $(function() {

        var dd = new DropDown($('#standrd-size'));
        var dd = new DropDown($('#customMeasure'));
        var dd = new DropDown($('#sortBy'));
        var dd = new DropDown($('#p_quantity'));

        $(document).click(function() {
            // all dropdowns
            $('.wrapper-dropdown-3').removeClass('active');
        });

    });
    // login Register page responsive
    $("#createNewAccount").click(function() {
        $('#register-page').show();
        $('#login-page').hide();
    });
    $("#alreadyAccount").click(function() {
        $('#login-page').show();
        $('#register-page').hide();
    });


    $('#show-hidden-menu').click(function() {
        $('.shipping_adresspanel').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });

    window.prettyPrint && prettyPrint();
});

// Numeric Validation
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$('.spaceValidation').keypress(function(e) {
    if (e.which === 32)
        return false;
});



// Add to cart
function addToCart(product_id, event) {

    var productId = '#' + event.id;
    $.ajax({
        url: BASE_URL + "/add-to-cart",
        method: 'POST',
        data: { product_id: product_id },
        beforeSend: function() {
            $(productId).find('.cartShow').hide();
            $(productId).find('.cartHide').show();
        },
        success: function(data) {
            if (data.status == false) {
                toastr.error(data.message);
            } else {
                $('.cartcount').html(data.cartCount);
                toastr.success(data.message);
            }
        },
        complete: function(data) {
            $(productId).find('.cartShow').show();
            $(productId).find('.cartHide').hide();
        }
    });
}


// Add product to cart
function productCart(product_id) {

    var accessories             = $('#accessories_form').serialize();    
    var sareeMeasurmentPrice    = $('#saree_measurment_price').serialize();
    var chooseSize              = $('#choose_size').val();

    if(chooseSize != undefined && chooseSize == 'red'){
        var productSize = $('#product_size').val();
        if(productSize == ''){
            $('#sizeError').html('Please select size');
            return false;
        }
    }
    
    if ($('#salwar_kameez_measurement').is(":checked")) {
        var salwarMeasurementId      = $("#salwar_kameez_measurement").val();
    } else {
        var salwarMeasurementId      = '';
    }

    var productQuantity = $('#product_quantity').val();
    $.ajax({
        url: BASE_URL + "/add-to-cart",
        method: 'POST',
        data: { product_id: product_id, product_quantity: productQuantity, product_size: productSize, saree_measurment_price: sareeMeasurmentPrice , salwar_kameez_measurement_price: salwarMeasurementId , accessories: accessories  },
        beforeSend: function() {},
        success: function(data) {
            if (data.status == false) {
                toastr.error(data.message);
            } else {
                $('.cartcount').html(data.cartCount);
                toastr.success(data.message);
            }
        },
        complete: function(data) {}
    });
}

$('.productmeasure').change(function() {
    $('#sizeError').html('');

    var measurementPrice    = 0;
    var productPrice        = $('#hidden_product_price').val();
    var measurementPrice    = $('#measurement_price').val();
    if(measurementPrice == ''){
        var measurementPrice    = 0;
    }

    if (this.value != 'orange') {
        $('#hidden_product_price').val(parseFloat(parseInt(productPrice)-parseInt(measurementPrice)).toFixed(2));
        $('.showProductPrice').html(parseFloat(parseInt(productPrice)-parseInt(measurementPrice)).toFixed(2));
    } else {
        $('#hidden_product_price').val(parseFloat(parseInt(productPrice)+parseInt(measurementPrice)).toFixed(2));
        $('.showProductPrice').html(parseFloat(parseInt(productPrice)+parseInt(measurementPrice)).toFixed(2));
    }
});

// Custom Measurement
$('#custom_measurment').bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
       
    }
})
.on('error.validator.bv', function(e, data) {
    // $(e.target)    --> The field element
    // data.bv        --> The BootstrapValidator instance
    // data.field     --> The field name
    // data.element   --> The field element
    // data.validator --> The current validator name
    data.element
    .data('bv.messages')
    // Hide all the messages
    .find('.help-block[data-bv-for="' + data.field + '"]').hide()
    // Show only message associated with current validator
    .filter('[data-bv-validator="' + data.validator + '"]').show();
})
.on("success.form.bv", function(e) {
    e.preventDefault();

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': "{{csrf_token()}}"
        },
        url: BASE_URL + "/measurement-details-save",
        method: "POST",
        data: $('#custom_measurment').serialize(),

        beforeSend: function() {
            $('#custom_measurment_btn').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
            $('#custom_measurment_btn').attr('disabled', true);
        },
        success: function(data) {
            if (data.status == true) {
                $('.custom_measurment_msg').html('<div class="alert alert-success">'+data.message+'</div>');
                $('#custom_measurment').bootstrapValidator('resetForm', true);
                $('#other').val('');
                var delay = 5000;
                setTimeout(function() { 
                    $('.custom_measurment_msg').html('');
                    $('#product-size').modal('hide');
                }, delay);
            } else {
                $('.custom_measurment_msg').html('<div class="alert alert-success">'+data.message+'</div>');
            }
        },
        complete: function(data) {
            $('#custom_measurment_btn').html('Send');
            $('#custom_measurment_btn').attr('disabled', false);
        }
    });
});

// Reset Form
$('.product-size').click(function() {
    $('.custom_measurment_msg').html('');
    $('#other').val('');
    $('#custom_measurment').bootstrapValidator('resetForm', !0);
    $("#custom_measurment").find('.has-error').removeClass("has-error");
    $("#custom_measurment").find('.has-success').removeClass("has-success");
    $('#custom_measurment').find('.help-block').css("display", "none");
});

$('.resetmeasurement').click(function() {
    $('.custom_measurment_msg').html('');
    $('#other').val('');
    $('#custom_measurment').bootstrapValidator('resetForm', !0);
    $("#custom_measurment").find('.has-error').removeClass("has-error");
    $("#custom_measurment").find('.has-success').removeClass("has-success");
    $('#custom_measurment').find('.help-block').css("display", "none");
    $('#product-size').modal('toggle');
});


// Salwar Kameez Measurement
$('#salwar_measurment_form').bootstrapValidator({
    // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
       
    }
})
.on('error.validator.bv', function(e, data) {
    // $(e.target)    --> The field element
    // data.bv        --> The BootstrapValidator instance
    // data.field     --> The field name
    // data.element   --> The field element
    // data.validator --> The current validator name
    data.element
    .data('bv.messages')
    // Hide all the messages
    .find('.help-block[data-bv-for="' + data.field + '"]').hide()
    // Show only message associated with current validator
    .filter('[data-bv-validator="' + data.validator + '"]').show();
})
.on("success.form.bv", function(e) {
    e.preventDefault();

    $.ajax({
        headers: {
            'X-CSRF-TOKEN': "{{csrf_token()}}"
        },
        url: BASE_URL + "/salwar-measurement-details-save",
        method: "POST",
        data: $('#salwar_measurment_form').serialize(),

        beforeSend: function() {
            $('#salwar_measurment_btn').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
            $('#salwar_measurment_btn').attr('disabled', true);
        },
        success: function(data) {
            if (data.status == true) {
                $('.salwar_measurment_msg').html('<div class="alert alert-success">'+data.message+'</div>');
                $('#salwar_measurment_form').bootstrapValidator('resetForm', true);
                $('#other').val('');
                var delay = 5000;
                setTimeout(function() { 
                    $('.salwar_measurment_msg').html('');
                    $('#product-size-salwar').modal('hide');
                }, delay);
            } else {
                $('.salwar_measurment_msg').html('<div class="alert alert-success">'+data.message+'</div>');
            }
        },
        complete: function(data) {
            $('#salwar_measurment_btn').html('Send');
            $('#salwar_measurment_btn').attr('disabled', false);
        }
    });
});

// Reset Form
$('.salwarreset').click(function() {
    $('.salwar_measurment_msg').html('');
    $('#other').val('');
    $('#salwar_measurment_form').bootstrapValidator('resetForm', !0);
    $("#salwar_measurment_form").find('.has-error').removeClass("has-error");
    $("#salwar_measurment_form").find('.has-success').removeClass("has-success");
    $('#salwar_measurment_form').find('.help-block').css("display", "none");
});

$('.resetsalwarmeasurement').click(function() {
    $('.salwar_measurment_msg').html('');
    $('#other').val('');
    $('#salwar_measurment_form').bootstrapValidator('resetForm', !0);
    $("#salwar_measurment_form").find('.has-error').removeClass("has-error");
    $("#salwar_measurment_form").find('.has-success').removeClass("has-success");
    $('#salwar_measurment_form').find('.help-block').css("display", "none");
    $('#product-size-salwar').modal('toggle');
});


function saree_measurement(saree_measurement_id,product_id){
    $.ajax({
        url: BASE_URL + "/saree-measurement",
        method: 'POST',
        data: { saree_measurement_id: saree_measurement_id,product_id: product_id },
        beforeSend: function() {},
        success: function(data) {
            $("#product-size"+saree_measurement_id).html(data.measurementData);
            $('#product-size'+saree_measurement_id).modal('toggle');
        },
        complete: function(data) {}
    });
}

$('.wishlist_tooltip').click(function() {
    toastr.error('Please login to continue !!');
});

// Add To Wishlist
$('.productclass').click(function() {
    var productId = $(this).attr('id');

    $.ajax({
        url: BASE_URL + "/add-to-wishlist",
        method: 'POST',
        data: { product_id: productId },
        beforeSend: function() {},
        success: function(data) {
            if (data.status == false) {
                toastr.error(data.message);
            } else {
                $('.wishlistcount').html(data.wishlistCount);
                if (data.add == true) {
                    $('#'+productId).attr('title','Remove from Wishlist');
                    $('.wishlistShow' + productId).hide();
                    $('.wishlistHide' + productId).show();
                } else {
                    $('#'+productId).attr('title','Add to Wishlist');
                    $('.wishlistShow' + productId).show();
                    $('.wishlistHide' + productId).hide();
                }
                toastr.success(data.message);
            }
        },
        complete: function(data) {}
    });
});

// Reset Dorm
$('.needEarlier').click(function() {
    $('#enquiry-form').bootstrapValidator('resetForm', !0);
    $("#enquiry-form").find('.has-error').removeClass("has-error");
    $("#enquiry-form").find('.has-success').removeClass("has-success");
    $('#enquiry-form').find('.help-block').css("display", "none");
});

// Buy Now
function buyNow(product_id) {

    var sareeMeasurmentPrice = $('#saree_measurment_price').serialize();
    var chooseSize = $('#choose_size').val();
    if(chooseSize != undefined && chooseSize == 'red'){
        var productSize = $('#product_size').val();
        if(productSize == ''){
            $('#sizeError').html('Please select size');
            return false;
        }
    }

    var productQuantity = $('#product_quantity').val();

    if ($('#salwar_kameez_measurement').is(":checked")) {
        var salwarMeasurementId      = $("#salwar_kameez_measurement").val();
    } else {
        var salwarMeasurementId      = '';
    }

    $.ajax({
        url: BASE_URL + "/buy-now",
        method: 'POST',
        data: { product_id: product_id, product_size: productSize, saree_measurment_price: sareeMeasurmentPrice , salwar_kameez_measurement_price: salwarMeasurementId,product_quantity: productQuantity },
        beforeSend: function() {},
        success: function(data) {
            var delay = 10;
            var URL = BASE_URL + '/cart';
            setTimeout(function() { window.location = URL; }, delay);
        },
        complete: function(data) {}
    });
}

// saree measurement

$(function () {
    $("#blouse_stiched").click(function () {
        if ($(this).is(":checked")) {
            $("#blouse_stich").show();
        } else {
            $("#blouse_stich").hide();
        }
    });
});
$(function () {
    $("#peticoat").click(function () {
        if ($(this).is(":checked")) {
            $("#peticoat2").show();
        } else {
            $("#peticoat2").hide();
        }
    });
});

$(".accessories_price").click(function () {
    var accessoriesPrice    = $(this).attr('accessories_price');
    var accessoriesId       = $(this).attr('accessory_id');
    var productPrice        = $('#hidden_product_price').val();
    
    if(accessoriesId != ''){
        if ($('#accessories'+accessoriesId).is(":checked")) {
            $('#hidden_product_price').val(parseFloat(parseInt(productPrice)-parseInt(accessoriesPrice)).toFixed(2));
            $('.showProductPrice').html(parseFloat(parseInt(productPrice)-parseInt(accessoriesPrice)).toFixed(2));
        } else {
            $('#hidden_product_price').val(parseFloat(parseInt(productPrice)+parseInt(accessoriesPrice)).toFixed(2));
            $('.showProductPrice').html(parseFloat(parseInt(productPrice)+parseInt(accessoriesPrice)).toFixed(2));
        }
    }
});

$(".saree_measurement").click(function () {
    var sareeMeasurementPrice   = $(this).attr('saree_measurement_price');
    var sareeCustomId           = $(this).attr('saree_custom_id');
    var sareeMeasurementId      = $(this).attr('id');
    var productPrice            = $('#hidden_product_price').val();
    
    if(sareeCustomId != ''){
        if ($('#saree_measurement'+sareeMeasurementId).is(":checked")) {
            $("#blouse_stich"+sareeMeasurementId).hide();
        } else {
            $("#blouse_stich"+sareeMeasurementId).show();
        }
    }
    if ($('#saree_measurement'+sareeMeasurementId).is(":checked")) {
        $('#hidden_product_price').val(parseFloat(parseInt(productPrice)-parseInt(sareeMeasurementPrice)).toFixed(2));
        $('.showProductPrice').html(parseFloat(parseInt(productPrice)-parseInt(sareeMeasurementPrice)).toFixed(2));
    } else {
        $('#hidden_product_price').val(parseFloat(parseInt(productPrice)+parseInt(sareeMeasurementPrice)).toFixed(2));
        $('.showProductPrice').html(parseFloat(parseInt(productPrice)+parseInt(sareeMeasurementPrice)).toFixed(2));
    }
});

$(".salwar_measurement").click(function () {
    var salwarMeasurementPrice   = $(this).attr('salwar_measurement_price');
    var salwarMeasurementId      = $(this).attr('id');
    var productPrice             = $('#hidden_product_price').val();
    
    if ($('#salwar_kameez_measurement').is(":checked")) {
        $("#blouse_stich"+salwarMeasurementId).hide();
        $('#hidden_product_price').val(parseFloat(parseInt(productPrice)-parseInt(salwarMeasurementPrice)).toFixed(2));
        $('.showProductPrice').html(parseFloat(parseInt(productPrice)-parseInt(salwarMeasurementPrice)).toFixed(2));
    } else {
        $("#blouse_stich"+salwarMeasurementId).show();
        $('#hidden_product_price').val(parseFloat(parseInt(productPrice)+parseInt(salwarMeasurementPrice)).toFixed(2));
        $('.showProductPrice').html(parseFloat(parseInt(productPrice)+parseInt(salwarMeasurementPrice)).toFixed(2));
    }
});


// Add To Wishlist
function filterProduct(value) {
    $('#product-loading').modal('toggle');
    if (value != undefined) { $('#sort_by').val(value) }
    var data = $('#filterForm').serialize();

    $.ajax({
        url: BASE_URL + "/filter-form",
        method: 'POST',
        data: data,
        beforeSend: function() {},
        success: function(data) {
            if(data.status = true){
                var delay = 100;
                var URL = data.currentUrl + data.filterUrl;
                setTimeout(function() { window.location = URL; }, delay);    
            }
        },
        complete: function(data) {}
    });
}


$(".removeProductsTable").click(function () {
    var productData = $(this);
    var productSlug = productData.attr("data-productSlug");
    $('#wishlist-confirmation').modal('toggle');
    $('#product_slug').val(productSlug);
});

$(".resetwishlist").click(function () {
    $('#wishlist-confirmation').modal('toggle');
});

$(".wishlist_btn").click(function () {
    $('#wishlist_btn').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
    var productSlug = $('#product_slug').val();
    $.ajax({
        url: BASE_URL + "/remove-wishlist/"+productSlug,
        method: "GET",
        success: function(data) {
            toastr.success(data.message);
            $('#wishlist-confirmation').modal('toggle');
            var delay = 10;
            var URL = BASE_URL + '/wishlist';
            setTimeout(function() { window.location = URL; }, delay);
        }
    })
});

//Remove Cart
$(".removeCart").click(function () {
    var productData = $(this);
    var productSlug = productData.attr("data-productSlug");
    var productSize = productData.attr("data-productSize");

    $('#cart-confirmation').modal('toggle');
    $('#product_slug').val(productSlug);
    $('#product_size').val(productSize);
});

$(".resetcart").click(function () {
    $('#cart-confirmation').modal('toggle');
});

$(".cart_btn").click(function () {
    $('.cart_btn').html('<i class="fa fa-spinner fa-spin"></i> Loading...');
    var productSlug = $('#product_slug').val();
    var productSize = $('#product_size').val();
    $.ajax({
        url: BASE_URL + "/remove-cart/"+productSlug+"/"+productSize,
        method: "GET",
        success: function(data) {
            toastr.success('Product successfully removed from cart !!');
            $('#cart-confirmation').modal('toggle');
            var delay = 1000;
            var URL = BASE_URL + '/cart';
            setTimeout(function() { window.location = URL; }, delay);
        }
    })
});
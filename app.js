$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The first name can only consist of alphabetical'
                    },
                    notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            last_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'The first last name can only consist of alphabetical'
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            phone1: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    regexp: {
                        // To valid a phone number like XXX-XXX-XXXX || XXX.XXX.XXXX || XXX XXX XXXX || XXXXXXXXXX
                        regexp: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                        message: 'Please supply a vaild phone number'
                    },
                }
            },
            phone2: {
                validators: {
                    regexp: {
                        regexp: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                        message: 'Please supply a vaild phone number'
                    },
                }
            },
            phone3: {
                validators: {
                    regexp: {
                        regexp: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                        message: 'Please supply a vaild phone number'
                    },
                }
            },
            occupation: {
                validators: {
                    notEmpty: {
                        message: 'Please select your occupation'
                    }
                }
            },
        }
    })
        .on('success.form.bv', function (e) {
            $('#contact_form').data('bootstrapValidator').resetForm();
            // Prevent form submission
            e.preventDefault();
            // Get the form instance
            var $form = $(e.target);
            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
        });
});


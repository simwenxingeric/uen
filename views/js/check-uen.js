$(function(){
    let uencheck = (input) => {
        let uen_format_1 = '^[0-9]{8}[$a-zA-Z]{1}$'
        let uen_format_2 = '^(19|20){1}[0-9\d]{7}[$a-zA-Z]$'
        let uen_format_3 = '^(T|S){1}[0-9\d]{2}(LP|LL|FC|PF|RF|MQ|MM|NB|CC|CS|MB|FM|GS|DP|CP|NR|CM|CD|MD|HS|VH|CH|MH|CL|XL|CX|RP|TU|FB|FN|PA|PB|SS|MC|SM|GA|GB){1}[0-9\d]{4}[$a-zA-Z]$'
        
        let regex_type1 = new RegExp(uen_format_1) 
        let regex_type2 = new RegExp(uen_format_2)
        let regex_type3 = new RegExp(uen_format_3)

        if (regex_type1.test(input)) {
            return "Valid UEN. Business registered with ACRA."
        } else if (regex_type2.test(input)) {
            return "Valid UEN. Local company registered with ACRA."
        } else if (regex_type3.test(input)) {
            return "Valid UEN. Will be issued new UEN."
        } else {
            return "Invalid UEN!"
        }
    }

    $("#validate").click((event) => {
        event.preventDefault();
        let uen = $('#uen').val()
        let validate = uencheck(uen)
        $('#uen-validation').html(`${validate}`)
        $("#uen-validation").show()
    })

    $("#clear").click((event) => {
        event.preventDefault();
        $('#uen').val('');
        $("#uen-validation").html("Please enter a UEN")
    })

    $("input[name='uen']").change((event) => {
        event.preventDefault();
        if ($('#uen').val() == '') {
            $("#uen-validation").html("Please enter a UEN")
            $("#uen-validation").show()
        } else {
            $("#uen-validation").hide()
        }
    })
})

function getData(type) {
    let box = $('#container');
    $.ajax({ 
        type: 'GET', 
        url: `${type}`, 
        success: function(response, status, request) { 
            if(status=='success') {
                $(box).html(response);
            } else {
                alert('Ошибка запроса');
            }    
        }
    });
}
function getDataProducts(type, showall) {
    let box = $('#container');
    let link = `${type}${(showall)? `?showall=true`:''}`; 
    $.ajax({ 
        type: 'GET', 
        url: `${link}`, 
        success: function(response, status, request) { 
            if(status=='success') {
                $(box).html(response);
            } else {
                alert('Ошибка запроса');
            }    
        }
    });
}

function camel_to_snake() {
    let box = $('#camel_result');
    let name = $('#camelid').val();
    $.ajax({ 
        type: 'GET', 
        url: `camel_to_snake?name=${name}`, 
        success: function(response, status, request) { 
            if(status=='success') {
                $(box).html($(box).html()+response);
            } else {
                alert('Ошибка запроса');
            }    
        }
    });
}
function snake_to_camel() {
    let box = $('#snake_result');
    let name = $('#snakeid').val();
    $.ajax({ 
        type: 'GET', 
        url: `snake_to_camel?name=${name}`, 
        success: function(response, status, request) { 
            if(status=='success') {
                $(box).html($(box).html()+response);
            } else {
                alert('Ошибка запроса');
            }    
        }
    });
}
function converter_test() {
    $('#camelid').val('CamelCase');
    camel_to_snake();    
    $('#camelid').val('getUserId');
    camel_to_snake();
    $('#snakeid').val('snake_case');
    snake_to_camel();
    $('#snakeid').val('set_repository');
    snake_to_camel();
}
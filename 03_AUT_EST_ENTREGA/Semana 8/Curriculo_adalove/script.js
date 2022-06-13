

$(document).ready(() => {
    users.list();
});
api = 'http://127.0.0.1:3071'

var user = {

    insert() {
        var nm = document.querySelector("#nome").value;
        var telefone = document.querySelector("#tel").value;
        var em = document.querySelector("#email").value;
        if (nm) {
            if (nm.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {nome: nm, telef: telefone, email: em}
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
    }
}
}
var users = {
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                    tx += '<div class="col-xs-12 col-md-12">>';
                        tx += '<h1> '+data[i].Nome+'</h1></div>';
                        tx += '<div class="col-xs-12 col-md-12">';
                        tx += '<p>'+ data[i].telefone+'</p>';
                        tx += '<p>'+data[i].email+'</p>'
                        tx += '<button onclick="next()">Próximo</button>'
                    tx += '</div>'
                $('#cont').html(tx);
            }
        });
        
    }
    
};

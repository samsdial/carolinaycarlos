// Bind as an event handler
$(document).on('click', '[data-lightbox]', lity);
// escondo el tab con hide

$(document).ready(function(){
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
    e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
    
    })
});

$(document).ready(function(){
    $('.stconfrim').click(function(){
        var name        = $('#name').val();
        var  escort     = $('#escort').val();
        if (name == ''){
            $('.name').addClass('error');
            $('#name').focus();
            return false;
        }else{
            $('.name').removeClass('error');
            var datos = '&name=' + name +
            '&escort=' + escort;
            $.ajax({
                method: 'Post',
                url: 'confrim.php',
                dataType: 'json',
                data:datos,
            }).done(function(msg){
                if (msg.success){
                    $('.alerta p').fadeIn('slow');
                    $('.alerta p').html('Gracias');
                    $('#name').val('');
                    $('#escort').val('');
                }else{
                    $('.alerta p').fadeIn('slow');
                    $('.alerta p').html('Error, intent luego');
                }
            });
            return false;
        }
    });
});
$(document).ready(function(){
    $('.stmessage').click(function(){
        var nameMessage        = $('#nameMessage').val();
        var dataMessage        = $('#dataMessage').val();
        if(nameMessage == '' || dataMessage == ''){
            if(nameMessage == ''){
                $('.name--message').addClass('error');
                $('#nameMessage').focus();
                return false;
            }else{
                $('.name--message').removeClass('error');
            }
            if(dataMessage == ''){
                $('.data--message').addClass('error');
                $('#dataMessage').focus();
                return false;
                }else{
                    $('.data--message').removeClass('error'); 
                }
            }else{
                 $('.data--message').removeClass('error');
                var datos = '&nameMessage=' + nameMessage +
                '&dataMessage='+ dataMessage;
                $.ajax({
                    method:'Post',
                    url:'message.php',
                    dataType: 'json',
                    data:datos,
                }).done(function(msg){
                    if(msg.success){
                        $('.alerta p').fadeIn('slow');
                        $('.alerta p').html('Gracias por sus deseos.');
                        $('#nameMessage').val('');
                        $('#dataMessage').val('');
                    }else{
                        $('.alerta p').fadeIn('slow');
                        $('.alerta p').html('Error, intente más tarde.');
                    }
                });
                return false;
            }
        });
    });

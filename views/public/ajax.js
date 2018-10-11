
<script>
            $(document).ready(function(){

                $('#th').click(function(event) {

                    var formData = {
                        'question'      : $('input[name=question]').val(),
                        'a'             : $('input[name=a]').val(),
                        'b'             : $('input[name=b]').val(),
                        'c'             : $('input[name=c]').val(),
                        'd'             : $('input[name=d]').val(),
                    };

                    $.ajax({
                        method        : 'POST', 
                        url         : '/questions/theory', 
                        data        : formData, 
                        dataType    : 'json', 
                        encode      : true,
                        success     : function(){
                            alert('DONE');
                        }
                    });

                    event.preventDefault();
            })});
</script>

<script>
            $(document).ready(function() {

                $('projectform').submit(function(event) {

                    var formData = {
                        'question'      : $('input[name=question]').val(),
                        'a'             : $('input[name=a]').val(),
                        'b'             : $('input[name=b]').val(),
                        'c'             : $('input[name=c]').val(),
                        'd'             : $('input[name=d]').val(),
                    };

                    $.ajax({
                        method        : 'POST', 
                        url         : '/questions/project', 
                        data        : formData, 
                        dataType    : 'json', 
                        encode      : true
                    }).done(function(data) {
                        console.log(data); 
                        });

                    event.preventDefault();
                });
            });
</script>

<script>
            $(document).ready(function() {

                $('labform').submit(function(event) {

                    var formData = {
                        'question'      : $('input[name=question]').val(),
                        'a'             : $('input[name=a]').val(),
                        'b'             : $('input[name=b]').val(),
                        'c'             : $('input[name=c]').val(),
                        'd'             : $('input[name=d]').val(),
                    };

                    $.ajax({
                        method        : 'POST', 
                        url         : '/questions/lab', 
                        data        : formData, 
                        dataType    : 'json', 
                        encode      : true
                    }).done(function(data) {
                        console.log(data); 
                        });

                    event.preventDefault();
                });
            });
</script>
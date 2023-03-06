$('.button-wow').on('click', function () {
    var text = $('input').val()
    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?apikey=7c5596fe&t=' + text
    }).then(function (response) {
        $('.film_name').text('Film name : ' + response.Title)
        $('.film_genre').text('Film genre :' + response.Genre)
        $('.film_year').text('Film year : ' + response.Year)
        $('img').attr('src', response.Poster)
        $('img').show()
        // $('img').hide(border)
        $('.header-text').hide()
        console.log(response);
    }).catch(function (error) {
        console.log('Error' + error);
    })
})




//Enter-i basanda 

// $('#pressEnter').keypress( function (e) {
//     var keycode = (e.keyCode ? e.keyCode : e.which);
//     if(keycode=='13'){
//         $.ajax({
//             method: 'GET',
//             url: 'http://www.omdbapi.com/?apikey=7c5596fe&t=' + text
//         }).then(function (response) {
//             $('.film_name').text('Film name : ' + response.Title)
//             $('.film_genre').text('Film genre :' + response.Genre)
//             $('.film_year').text('Film year : ' + response.Year)
//             $('img').attr('src', response.Poster)
//             $('img').show()
//             console.log(response);
//         }).catch(function (error) {
//             console.log('Error' + error);
//         })
//     }
// })

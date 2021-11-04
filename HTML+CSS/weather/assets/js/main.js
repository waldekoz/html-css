$('.weather-form').on('submit', function (event) {
    let city = $('.city').val();

    if (city == '') {
        alert('wpisz miasto i nacisnij ENTER');
    } else {
        let API_URL = 'http://api.weatherapi.com/v1/current.json?key=%2047af0b6704204deb85e91459210901&q=' + city;

        $.ajax({
            url: API_URL,
            beforeSend: function () {
                $('.loader').css('display', 'block');

            }
        }).done(function (allDataFromApi) {
            //console.log(allDataFromApi.current.temp_c);
            $('.loader').css('display', 'none');

            $('.data-from-api').html(`
            <div class="info">
            temperatura w ${allDataFromApi.location.name} is ${allDataFromApi.current.temp_c} <sup>o</sup>C

            </div>
            <div class="icon">
            <img src="${allDataFromApi.current.condition.icon}" alt="${allDataFromApi.current.condition.text}">

            </div>
            
            `)


        }).fail(function () {
            $('.loader').css('display', 'none');
            $('.data-from-api').html(`
                <div class="error">wystąpił bład w API lub miejscowosc nie została znaleziona</div>
            `)
        })
        event.preventDefault();

    }
})
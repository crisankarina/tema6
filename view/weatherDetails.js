document.addEventListener("DOMContentLoaded", onHtmlLoaded);
function onHtmlLoaded(){
    console.log("domloaded");

    var containerEl = document.getElementById("weatherDetails");
    
    var weather = new Weather();

    weather.getWeatherInfo().then(function(){
        pageInfoLocalStorage(weather);
        // pageInfoCookies(weather);
    });
    

    function displayTemp(weather, weatherProp){
        if(weather !== undefined){
            if(weather[weatherProp] !== undefined){
                var weatherPropContainer = document.createElement("p");
                weatherPropContainer.innerHTML = weather[weatherProp]; 
                containerEl.appendChild(weatherPropContainer);
            }
        }
    }

    var buttonCelsius = document.getElementById("celsiusButtonId");
    buttonCelsius.addEventListener("click", function(){
        displayTemp(weather, "city");
        displayTemp(weather, "temp_c"); 
        
        saveCookie("weatherType", "temp_c");
        saveLocalStorage("weatherType", "temp_c");

    });

    
    var buttonFahrenheit = document.getElementById("fahrenheitButtonId");
    buttonFahrenheit.addEventListener("click", function(){
        displayTemp(weather, "city");
        displayTemp(weather, "temp_f");
        
        saveCookie("weatherType", "temp_f");
        saveLocalStorage("weatherType", "temp_f");
    });


    //LOCAL STORAGE
    function pageInfoLocalStorage(weather){
        var weatherType = getLocalStorage("weatherType");
        console.log(weatherType);
        //if weartherType key is founded in local storage, displayTemp
        if(weatherType != null) {
            displayTemp(weather, "city");
            displayTemp(weather, weatherType);
        } 
    }

    //COOKIES
    function pageInfoCookies(weather){
        var weatherType = getCookie("weatherType");
        if(weatherType != null) {
            displayTemp(weather, "city");
            displayTemp(weather, weatherType);
        } 
    }
}
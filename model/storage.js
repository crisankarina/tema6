     //LOCAL STORAGE
     
     function saveLocalStorage(key, value){
        localStorage.setItem(key, value);
    }


    function getLocalStorage(key){
        return localStorage.getItem(key);
    }


    //COOKIE

    function saveCookie(key, value){
        let cookie = key + "=" + value + "; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
        document.cookie = cookie;
        
    }

    function getCookie(key)  {
        var cookies = document.cookie.split('; '); // Array with key=value
        var response;
        //   console.log("cookies as key=value", cookies);
        // Parse cookies to get value
        cookies.forEach(function(value) {
            //console.log("Cookie elem ", value);  
            // value = "name=Karina";
            var cookie = value.split('=');
            //cookie = ["name", "Karina"];
            if (cookie[0] === key) {
                //console.log("FOUND MY COOKIE ", cookie[1]);
                response = cookie[1];
            }
        });
        return response;
    }























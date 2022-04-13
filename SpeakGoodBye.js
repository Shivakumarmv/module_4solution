(function (window) {  
    var helloSpeaker = {};
    var speakWord = "Hello";
    
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact

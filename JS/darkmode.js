var subs = document.getElementById("converter")

var changeBodyColor={
    setBodyColor: function(bodyColor){
        document.querySelector("body").style.color=bodyColor;
    },
    setBodyBackColor: function(bodyBackColor){
        document.querySelector("body").style.backgroundColor=bodyBackColor;
},
};
//changeBodyColor 객체 생성

function convertDayNight(Self){
    if(self.value=="night"){
        self.value="day";
        changeBodyColor.setBodyBackColor("#282828");
        changeBodyColor.setBodyColor("white");
        if(subs.innerText === 'Veiw Dark Mode') {
        subs.innerText = 'Veiw Light Mode';
          } else subs.innerText ='Veiw Dark Mode';

    }
    else {
        self.value="night";
        changeBodyColor.setBodyBackColor("white");
        changeBodyColor.setBodyColor("black");
        if(subs.innerText === 'Veiw Light Mode') {
        subs.innerText = 'Veiw Dark Mode';
         } else subs.innerText ='Veiw Light Mode';
    }
}

var changeBodyColor={
    setBodyColor: function(_bodyColor){
        document.querySelector("body").style.color=_bodyColor;
    },
    setBodyBackColor: function(_bodyBackColor){
        document.querySelector("body").style.backgroundColor=_bodyBackColor;
},
};


function convertDayNight(Self){
    if(self.value=="day"){
        self.value="night";
        changeBodyColor.setBodyBackColor("#282828");
        changeBodyColor.setBodyColor("white");
       
        
    }
    else {
        self.value="day";
        changeBodyColor.setBodyBackColor("white");
        changeBodyColor.setBodyColor("black");
        
     
        
    }
}

const subs = document.getElementById("converter")

subs.addEventListener("click", function() {
    if(subs.innerText === 'Veiw Dark Mode') {
        subs.innerText = 'Veiw Light Mode';
    } else subs.innerText ='Veiw Dark Mode';
});
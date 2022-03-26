function changeBody(color){
    document.querySelector('body').style.color = color
}

function changeBackColor(color){
    document.querySelector('body').style.backgroundColor = color
}

function dayNight(self){
    if(self.value == 'day'){
    changeBody('white')
    changeBackColor('black')
    self.value = 'night'
    }
    else {
    changeBody('black')
    changeBackColor('white')
    self.value = 'day'
    }
}

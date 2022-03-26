function changeBody(color){
    document.querySelector('body').style.color = color
}

function changeBackColor(color){
    document.querySelector('body').style.backgroundColor = color
}

function dayNight(self){
    if(self.value == 'Veiw Dark Mode'){
    changeBody('white')
    changeBackColor('black')
    self.value = 'Veiw Day Mode'
    }
    else {
    changeBody('black')
    changeBackColor('white')
    self.value = 'Veiw Dark Mode'
    }
}

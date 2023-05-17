const days = document.querySelector(".day")
const hours = document.querySelector(".hour")
const minutes = document.querySelector(".minute")
const seconds = document.querySelector(".second")
const counter = document.querySelector(".counter")
const heading = document.querySelector("h1")

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const counterTimer = () =>{

    let now = new Date()
    let dd = String(now.getDate()).padStart(2, "0")
    let mm = String(now.getMonth()+1).padStart(2, "0")
    let yyyy = now.getFullYear()

    let enterDays;
    let enterMonths;
    let isNumber = false;

    while (!isNumber) {
        enterDays = prompt("please Enter Day:");
        enterMonths = prompt("please Enter Months:");


        if(isNaN(enterDays) || isNaN(enterMonths)){
            alert("invalid Input..! enter Only Number for Day and Month");
        }
        else if(enterDays < 1 || enterDays > 32){
            alert("Please input day less than 31 and geater than 0")

        }
        else if(enterMonths < 0 || enterMonths > 13){
            alert("please input Month less tha 13 and greater than 0")
        }
        else{
            isNumber = true
        }
    }

    let newDays = String(enterDays).padStart(2, "0")
    let newMonths = String(enterMonths).padStart(2, "0")
  
    let targetDate = `${newMonths}/${newDays}/${yyyy}`
    let todayDate = `${mm}/${dd}/${yyyy}`

    if(todayDate > targetDate){
        targetDate = `${newMonths}/${newDays}/${yyyy+1}`
    }


setInterval(() => {
    const today = new Date().getTime()
    const target = new Date(targetDate).getTime()
    
    const difference = target - today;

    const leftDay = Math.floor(difference / day)
    const leftHour = Math.floor((difference % day) /hour)
    const leftMinute = Math.floor((difference % hour)/minute)
    const leftSecond = Math.floor((difference %minute) / second)

    days.innerText = leftDay
    hours.innerText = leftHour
    minutes.innerText = leftMinute
    seconds.innerText = leftSecond

    if(difference < 0){
        counter.style.display = "none"
        heading.innerText = "Happy BirthDay Bro"
        heading.setAttribute("class", "head")
        heading.style.fontSize = "6rem"
        
    }

}, 1000);

}

counterTimer()
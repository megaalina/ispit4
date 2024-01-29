'use strict'

class Weather{
    constructor(){
        this.wrapper = document.querySelector('.container');
        this.content = this.wrapper.querySelector('.content')
        this.section1Days = this.wrapper.querySelector('.section1_days');
        this.containerDayName = this.wrapper.querySelector('.container_day--name');
        this.containerDayName2 = this.wrapper.querySelector('.container_day--name2');
        this.borderLi = document.querySelector('.border_li');
        this.descriptionDays1 = this.wrapper.querySelector('.description_days1');
        this.descriptionDays3 = this.wrapper.querySelector('.description_days3');
        this.descriptionDays2 = this.wrapper.querySelector('.description_days2');
        this.descriptionDays4 = this.wrapper.querySelector('.description_days4');
        this.descriptionDays5 = this.wrapper.querySelector('.description_days5');
        this.descriptionDays6 = this.wrapper.querySelector('.description_days6');
        this.description3Days1 = this.wrapper.querySelector('.description3_days1');
        this.description3Days3 = this.wrapper.querySelector('.description3_days3');
        this.description3Days2 = this.wrapper.querySelector('.description3_days2');
        this.description3Days4 = this.wrapper.querySelector('.description3_days4');
        this.description3Days5 = this.wrapper.querySelector('.description3_days5');
        this.lat = 49.0629553;
        this.lon = 33.403516;
    }

    createsSmollUl1(weatherTitle){
      let str = `<li class="description3_day--p1">${weatherTitle}</li>`;
      this.description3Days1.insertAdjacentHTML('beforeend', str)
    }

    createsSmollUl2(time){
      let str = `<li class="description3_day--p2">${time}</li>`;
      this.description3Days2.insertAdjacentHTML('beforeend', str)
    }

    createsSmollUl3(weatherTitle){
      let str = `<li><img src="image/${weatherTitle}.png" alt="" class="description3_day--img"></li>`;
      this.description3Days3.insertAdjacentHTML('beforeend', str)
    }

    createsSmollUl4(deg){
      let str = `<li class="description3_day--p3">${deg}°</li>`;
      this.description3Days4.insertAdjacentHTML('beforeend', str)
    }

    createsSmollUl5(deg){
      let str = `<li class="description3_day--p4">${deg}°</li>`;
      this.description3Days5.insertAdjacentHTML('beforeend', str)
    }

    Page1(){
      let str = `<section class="section1">
      <form class="search_city2">
          <input class="search_city--input2" type="text" placeholder="Кременчук">
          <img class="search_city2--img1" src="image/ellipse.svg"/>
          <div class="position_img2">
            <img class="search_city2--img2" src="image/search.svg" />
          </div>
          <img class="search_city2--img3" src="image/location_outline.svg" />
        </form>
        <ul class="section1_days"></ul>
        </section>
    <section class="section2">
        <div class="container_day--name">
            <div class="container_name--position1"> </div>
            </div>
            <div class="conteiner_flex">
              <div class="description">
                  <ul class="border_li"></ul>
                  </div>
                  <div class="discription2">
                    <ul class="description_days1"></ul>
                    <ul class="description_days3"></ul>
                    <ul class="description_days2"></ul>
                    <ul class="description_days4"></ul>
                    <ul class="description_days5"></ul>
                    <ul class="description_days6"></ul>
                    </div>
                </div>
                <div class="container_day--name2"></div>
                </div>
                <div class="discription3">
                    <ul class="description3_days1"></ul>
                    <ul class="description3_days2"></ul>
                    <ul class="description3_days3"></ul>
                    <ul class="description3_days4"> </ul>
                    <ul class="description3_days5"></ul>
                    </div>
              </section>
              </div>`;
    this.content.insertAdjacentHTML('beforeend', str)
    }

  Page3(){
      let str = `<div class="conteiner2">
      <img src="image/404img.png" alt="" class="circle">
      <h1 class="message_h1">OOPS!</h1>
      <p class="message_p">QWERTY не знайдено.<br/>Будь ласка введіть інше місце розташування</p>
      <form class="section1_dector2_form2" action="">
        <input class="section1_dector2_input2" type="button" value="Повернутися на головну">
    </form>
    </div>`;
    this.content.insertAdjacentHTML('beforeend', str)
  }
  
    createUl6(elem){
      let str = `<li><img src="image/short_right.png" alt="" class="arrow">
      <p class="description_day--p5">${elem}</p>
    </li>`;
    this.descriptionDays6.insertAdjacentHTML('beforeend', str)
    }
    
    createUl5(elem){
      let str = `<li class="description_day--p4">${elem}°</li>`;
      this.descriptionDays5.insertAdjacentHTML('beforeend', str)
    }

    createUl4(elem){
        let str = ` <li class="description_day--p3">${elem}°</li>`;
        this.descriptionDays4.insertAdjacentHTML('beforeend', str)
    }
    createUl3(elem){
        let str = `<li class="description_day--p1">${elem}</li>`;
        this.descriptionDays2.insertAdjacentHTML('beforeend', str)
    }
    createUl2(elem){
        let str = `<li><img src="image/${elem}.png" alt="" class="description_day--img"></li>`;
        this.descriptionDays3.insertAdjacentHTML('beforeend', str)
    }

    createUl1(elem){
        let str = `<li class="description_day--p2">${elem}</li>`;
        this.descriptionDays1.insertAdjacentHTML('beforeend', str)
    }

    createBorderLi(day){
        let str = `<li class=" border_li--p1">${day}</li>
          <li class=" border_li--p2">Погода</li>
          <!-- <img src="image/Overcast3.png" alt="" class="description_day--img"> -->
          <li class=" border_li--p3">Темпетура</li>
          <li class="border_li--p4" >Відчувається</li>
          <li class="border_li--p5" >Вітер м/сек</li>`
        this.borderLi.insertAdjacentHTML('beforeend', str)
    }

    createcontainerDayName(day, month, year){
        let str = `<div class="container_name--position1">
        <div class="container_name--position2">
          <p class="container_name--p">${day}.${month}.${year}</p>
          <img src="image/calendar.png" alt="" class="container_name--img">
        </div>
      </div>`;
    this.containerDayName.insertAdjacentHTML('beforeend', str)
    }

        createliForSection1Days(day, img, weatherTitle, date, deg){

        let str = `<li class="section1_day">
        <p class="section1_day-p4">${day}</p>
        <img src="image/${img}.png" alt="" class="section1_day--img">
        <p class="section1_day-p3">${weatherTitle}</p>
        <div class="section_day--flex">
            <p class="section1_day-p1">${date}</p>
            <p class="section1_day-p2">${deg}</p>
        </div>
    </li>`;
    this.section1Days.insertAdjacentHTML('beforeend', str)
    }
    fetch1(){
        let input = document.querySelector('.search_city--input2');
        input.addEventListener('change', () => {
            let city = input.value
        let str = `http://api.openweathermap.org/geo/1.0/direct?appid=b6f3d76a2e34d2b71c33936fd4ab7ea6&q=${city}&`;
        console.log(str)
        fetch(str)
                .then(response => response.json())
                .then(response => {
                    console.dir(response)
                    
                     this.lat = response.map(x => x.lat);
                     this.lon = response.map(x => x.lon);
                     console.log(this.lat)
                     console.log(this.lon)
                    return response;
                })
                .then(response => {
                    this.print()
                    return response;
                })
                .catch(() => {
                  this.content.innerHTML = ' ';
                  this.Page3();
                  let btn = document.querySelector('.section1_dector2_input2');
                  btn.addEventListener('click', () => {
                      this.content.innerHTML = ' ';
                      this.Page1();
                        })
        })
    })
  }

    getWeekDay(date) {
        let days = [
                
                'Понедiлок',
                'Вівторок',
                'Середа',
                'Четвер',
                "П'ятница",
                'Суббота',
                'Неділя'
              ];
      
        return days[date.getDay()];
      }
      
    print(){
        let str2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&appid=b6f3d76a2e34d2b71c33936fd4ab7ea6&`
        fetch(str2)
        .then(response => response.json())
        .then(response => {
            console.dir(response);
                let step;
for (step = 0; step < 40; step++) {
            
            let main1 = response.list[0].weather.map(x => x.main);
            let main2 = response.list[7].weather.map(x => x.main);
            let main3 = response.list[14].weather.map(x => x.main);
            let main4 = response.list[21].weather.map(x => x.main);
            let main5 = response.list[28].weather.map(x => x.main);
            let main6 = response.list[35].weather.map(x => x.main);
            let arrMain = [main1, main2, main3, main4, main5, main6];
            let tempMin = response.list[step].main.temp_min;
            let tempMax = response.list[step].main.temp_max;

            let speed1 = response.list[0].wind.speed;
            let speed2 = response.list[7].wind.speed;
            let speed3 = response.list[14].wind.speed;
            let speed4 = response.list[21].wind.speed;
            let speed5 = response.list[28].wind.speed;
            let speed6 = response.list[35].wind.speed;
            let speedArr = [speed1, speed2, speed3, speed4, speed5, speed6]
           
            let time1 = response.list[0].dt_txt.split(' ')[1].slice(0, 5);
            let time2 = response.list[1].dt_txt.split(' ')[1].slice(0, 5);
            let time3 = response.list[2].dt_txt.split(' ')[1].slice(0, 5);
            let time4 = response.list[3].dt_txt.split(' ')[1].slice(0, 5);
            let time5 = response.list[4].dt_txt.split(' ')[1].slice(0, 5);
            let time6 = response.list[5].dt_txt.split(' ')[1].slice(0, 5);
            let time = [time1, time2, time3, time4, time5, time6]

    this.descriptionDays1.innerHTML = ' ';
    this.description3Days2.innerHTML = ' ';
    let c;
    for (c = 0; c < time.length; c++) {
    this.createUl1(time[c])
    this.createsSmollUl2(time[c])
    }

            let dateArr1 = response.list[step].dt_txt.split('-')[0];
            let dateArr2 = response.list[step].dt_txt.split('-')[1];
            let dateArr3 = response.list[step].dt_txt.split('-')[2]
            let dateArr4 = dateArr3.slice(0, 2)
            
            let date = new Date(dateArr1, dateArr2, dateArr4);
             let days = [
                'Понедiлок',
                'Вівторок',
                'Середа',
                'Четвер',
                "П'ятница",
                'Суббота',
                'Неділя'
              ];
              
              
              let i;
              for (i = 0; i < days.length; i++) {
                this.borderLi.innerHTML = ' '
                let start = days.indexOf(this.getWeekDay(date));
                let month = dateArr2 - 1;
                let arr1 = days.slice(start, 7);
                let arr2 = days.slice(0, start - 1);
                this.containerDayName.innerHTML = ' ';
                this.createcontainerDayName(response.list[0].dt_txt.split('-')[2].slice(0, 2), response.list[0].dt_txt.split('-')[1], dateArr1);
                this.createBorderLi(arr1[0])
                this.section1Days.addEventListener('click', (e) => {
                    if(e.target.matches('.section1_day')){
                        e.target.classList.add('section1_day--active');
                        let borderLiP1 = this.wrapper.querySelector('.border_li--p1');
                        let section1DayP4 = e.target.querySelector('.section1_day-p4');
                        borderLiP1.innerHTML = ' ';
                        this.containerDayName.innerHTML = ' ';
                        let text = section1DayP4.innerHTML;
                        let section1DayP1 = e.target.querySelector('.section1_day-p1');
                        let date2 = section1DayP1.innerHTML;
                        this.containerDayName.innerHTML = `${date2}.${dateArr1}`;
                        this.containerDayName.style.margin = '10px';
                        this.containerDayName.style.color = 'white'
                        borderLiP1.innerHTML = text;
                        let allLi = [...this.section1Days.children].indexOf(e.target);
                        console.dir(allLi);
                        
                        if(allLi === 0){
                          this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' ';
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                          let t;
                          for (t = 0; t < 6; t++) {
                            this.createUl2(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl1(response.list[t].weather.map(x => x.main));
                            this.createUl3(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl3(response.list[t].weather.map(x => x.main));
                            this.createUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createsSmollUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createUl5(response.list[t].main.temp_max.toFixed(2));
                            this.createsSmollUl5(response.list[t].main.temp_max.toFixed(2))
                            this.createUl6(response.list[t].wind.speed);
                          }
                          

                          if(allLi === 1){
                            this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' '
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                            let t;
                            for (t = 6; t < 12; t++) {
                              this.createUl2(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl1(response.list[t].weather.map(x => x.main));
                            this.createUl3(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl3(response.list[t].weather.map(x => x.main));
                            this.createUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createsSmollUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createUl5(response.list[t].main.temp_max.toFixed(2));
                            this.createsSmollUl5(response.list[t].main.temp_max.toFixed(2))
                            this.createUl6(response.list[t].wind.speed);
                            }
                        }

                        if(allLi === 2){
                          this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' '
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                          let t;
                          for (t = 12; t < 18; t++) {
                            this.createUl2(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl1(response.list[t].weather.map(x => x.main));
                            this.createUl3(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl3(response.list[t].weather.map(x => x.main));
                            this.createUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createsSmollUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createUl5(response.list[t].main.temp_max.toFixed(2));
                            this.createsSmollUl5(response.list[t].main.temp_max.toFixed(2))
                            this.createUl6(response.list[t].wind.speed);
                          }

                      }

                      if(allLi === 3){
                        this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' '
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                        let t;
                        for (t = 18; t < 24; t++) {
                          this.createUl2(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl1(response.list[t].weather.map(x => x.main));
                            this.createUl3(response.list[t].weather.map(x => x.main));
                            this.createsSmollUl3(response.list[t].weather.map(x => x.main));
                            this.createUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createsSmollUl4(response.list[t].main.temp_min.toFixed(2));
                            this.createUl5(response.list[t].main.temp_max.toFixed(2));
                            this.createsSmollUl5(response.list[t].main.temp_max.toFixed(2))
                            this.createUl6(response.list[t].wind.speed);
                        }
                      }

                      if(allLi === 4){
                        this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' '
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                        let t;
                        for (t = 24; t < 30; t++) {
                          this.createUl2(response.list[t].weather.map(x => x.main));
                          this.createsSmollUl1(response.list[t].weather.map(x => x.main));
                          this.createUl3(response.list[t].weather.map(x => x.main));
                          this.createsSmollUl3(response.list[t].weather.map(x => x.main));
                          this.createUl4(response.list[t].main.temp_min.toFixed(2));
                          this.createsSmollUl4(response.list[t].main.temp_min.toFixed(2));
                          this.createUl5(response.list[t].main.temp_max.toFixed(2));
                          this.createsSmollUl5(response.list[t].main.temp_max.toFixed(2))
                          this.createUl6(response.list[t].wind.speed);
                        }
                      }

                      if(allLi === 5){
                        this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' '
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                        let t;
                        for (t = 30; t < 36; t++) {
                          this.createUl2(response.list[t].weather.map(x => x.main));
                          this.createsSmollUl1(response.list[t].weather.map(x => x.main));
                          this.createUl3(response.list[t].weather.map(x => x.main));
                          this.createsSmollUl3(response.list[t].weather.map(x => x.main));
                          this.createUl4(response.list[t].main.temp_min.toFixed(2));
                          this.createsSmollUl4(response.list[t].main.temp_min.toFixed(2));
                          this.createUl5(response.list[t].main.temp_max.toFixed(2));
                          this.createsSmollUl5(response.list[t].main.temp_max.toFixed(2))
                          this.createUl6(response.list[t].wind.speed);
                        }
                      }
                    }

                    if(e.target.matches('.section1_day--img')){
                        e.target.parentElement.classList.remove('section1_day--active');
                        this.descriptionDays3.innerHTML = ' ';
                          this.description3Days1.innerHTML = ' ';
                          this.descriptionDays2.innerHTML = ' ';
                          this.description3Days3.innerHTML = ' '
                          this.descriptionDays4.innerHTML = ' ';
                          this.description3Days4.innerHTML = ' ';
                          this.descriptionDays5.innerHTML = ' ';
                          this.description3Days5.innerHTML = ' ';
                          this.descriptionDays6.innerHTML = ' ';
                    }
                  }
                })
                let array3 = arr1.concat(arr2);
                this.section1Days.innerHTML = ' ';
                this.descriptionDays3.innerHTML = ' ';
                this.description3Days1.innerHTML = ' ';
                this.descriptionDays2.innerHTML = ' ';
                this.description3Days3.innerHTML = ' '
                this.descriptionDays4.innerHTML = ' ';
                this.description3Days4.innerHTML = ' ';
                this.descriptionDays5.innerHTML = ' ';
                this.description3Days5.innerHTML = ' ';
                this.descriptionDays6.innerHTML = ' ';

                
                let a;
              for (a = 0; a < array3.length; a++) {
            let arr = [];
            const count = arr.push(response.list[0].dt_txt.split('-')[2].slice(0, 2), response.list[6].dt_txt.split('-')[2].slice(0, 2),
            response.list[12].dt_txt.split('-')[2].slice(0, 2), response.list[18].dt_txt.split('-')[2].slice(0, 2),
            response.list[30].dt_txt.split('-')[2].slice(0, 2), response.list[36].dt_txt.split('-')[2].slice(0, 2));
          
          let monthArr = [response.list[0].dt_txt.split('-')[1], response.list[6].dt_txt.split('-')[1],
          response.list[12].dt_txt.split('-')[1], response.list[18].dt_txt.split('-')[1], 
          response.list[30].dt_txt.split('-')[1], response.list[36].dt_txt.split('-')[1]];
              let arrTempMin = [];
              const count1 = arrTempMin.push(tempMin - 5, tempMin - 4, tempMin - 3, tempMin - 2, tempMin - 1, tempMin - 0);
            
              let arrTempMax = [];
              const count2 = arrTempMax.push(tempMax - 5,  tempMax- 4, tempMax - 3, tempMax - 2, tempMax - 1, tempMax - 0);

            this.createUl3(arrMain[a])
            this.createsSmollUl1(arrMain[a])
            this.createUl2(arrMain[a])
            this.createsSmollUl3(arrMain[a])
            this.createUl4(arrTempMin[a].toFixed(2))
            this.createsSmollUl4(arrTempMin[a].toFixed(2))
            this.createsSmollUl5(arrTempMax[a].toFixed(2))
            this.createUl5(arrTempMax[a].toFixed(2))
            this.createUl6(speedArr[a])
           
            this.createliForSection1Days(array3[a], arrMain[a], arrMain[a], `${arr[a]}.${monthArr[a]}`, `${arrTempMin[a].toFixed(2)}°-${arrTempMax[a].toFixed(2)}°`);
            
              }
            }    
}
            return response
        })
    }

    init(){
        console.dir(this);
        this.fetch1();
        
    }
}
'use strict'

class Weather{
    constructor(){
        this.wrapper = document.querySelector('.container');
        this.content = this.wrapper.querySelector('.content')
        this.section1Item1 = this.wrapper.querySelector('.section1_item1');
        this.flexContaiter1 = this.wrapper.querySelector('.flex_contaiter1');
        this.littleScreen2Position1 = this.wrapper.querySelector('.little_screen2--position1');
        this.littleScreenItem = this.wrapper.querySelector('.little_screen--item')
        this.section1Days2 = this.wrapper.querySelector('.section1_days2')
        this.hours = this.wrapper.querySelector('.hours');
        this.hour1 = document.querySelector('.hour1');
        this.hour2 = document.querySelector('.hour');
        this.lat = 49.0629553;
        this.lon = 33.403516;
    }

    createSection1Days2(city, weatherTitle, description, day, month, tempMin, tempMax){
        let str = `<li class="section1_day2">
        <p class="section1_day-p4">${city}</p>
        <img src="image/${weatherTitle}.png" alt="" class="section1_day--img">
        <p class="section1_day-p3">${description}</p>
        <div class="section_day--flex">
            <p class="section1_day-p1">${day}.${month}</p>
            <p class="section1_day-p2">${tempMin}°-${tempMax}°</p>
        </div>
    </li>`;
    this.section1Days2.insertAdjacentHTML('beforeend', str)
    }

    Page2(){
        let str = `<form class="search_city">
              <input class="search_city--input" type="text" placeholder="Кременчук">
              <img class="search_city--img1" src="image/ellipse.svg"/>
              <div class="position_img">
                <img class="search_city--img2" src="image/search.svg" />
              </div>
              <img class="search_city--img3" src="image/location_outline.svg" />
            </form>
            <section class="section3">
              <img src="image/frogg_bg.png" alt="" class="section3_img1">
              <div class="section3_item1"></div>
        <img src="image/sun_bg.png" alt="" class="section3_img2">
        <div class="section3_item2"></div>
        <div class="little_screen">
          <div class="little_screen1"></div>
          <div class="little_screen2">
            <div class="little_screen2--position1">
            </div>
            <div class="little_screen2--position2">
              <img src="image/deg.svg" alt="" class="little_screen2--img2">
              <p class="little_screen2--p2">12%</p>
            </div>
            <div class="little_screen2--position3">
              <img src="image/icons2.svg" alt="" class="little_screen2--img3">
              <p class="little_screen2--p3">6%</p>
            </div>
          </div>
        </div>
        </section>
        <section class="section4"></section>
        <ul class="section1_days2"></ul>
        <form action="" class="search_for_nearby_cities">
          <input class="search_for_nearby_cities--input" type="text" placeholder="Міста поруч">
          <img class="search_for_nearby_cities--img" src="image/search.svg" alt="">
        </form>
        <section class="section2">
          <div class="section2_position">
            <ul class="hours">
              <li class="hour1"></li>
              </ul>
              </div>
            </section>
        </div>`;
      this.content.insertAdjacentHTML('beforeend', str)
    }

    Page3(){
        let str = `<section class="section1_dector2">
          <img src="image/bg_img.png" alt="" class="section1_dector2--bg">
         <img src="image/404(2).png" alt="" class="section1_dector2--img404">
         <form class="section1_dector2_form2" action="">
          <input class="section1_dector2_input2" type="button" value="Повернутися на головну">
      </form>
          <div class="message">
            <p class="message_p">QWERTY не знайдено.<br/>Будь ласка введіть інше місце розташування</p>
            <h1 class="message_h1">OOPS!</h1>
          </div>
      </section>`;
      this.content.insertAdjacentHTML('beforeend', str)
    }

    createHours(time, timeTitle, img, weatherTitle, minTemp, maxTemp){
      let str = `<li class="hour">
      <p class="hour_time">${time}</p>
      <p class="hour_time--title">${timeTitle}</p>
      <img src="image/${img}.png" alt="" class="contaiter_item1--img">
      <p class="hour_weather">${weatherTitle}</p>
      <p class="hour_deg">${minTemp}-${maxTemp}°C</p>
    </li>`;
    this.hours.insertAdjacentHTML('beforeend', str)
    }

    createPagination2(){
      const screenWidth = window.screen.width;
      if(screenWidth <= 428){
        let str = `<li class="next hour">&raquo;</li>`;
        this.hours.insertAdjacentHTML('beforeend', str)
      }
    }

    createPagination1(){
      const screenWidth = window.screen.width;
      if(screenWidth <= 428){
        let str = ` <li class="prev hour">&laquo;</li>`;
        this.hours.insertAdjacentHTML('beforeend', str)
      }
    }

    createHour1(day, month, year){
      let str = `<div class="container_flex2">
      <div class="container_data--item1">Сьогодні</div>
<div class="container_data--item2">${day}.${month}.${year}</div>
  </div>
<div class="container_data--item3"></div>`;
      this.hours.insertAdjacentHTML('afterbegin', str)
    }

    createSection4(elem){
      let str = `<img src="image/icons1.png" alt="" class="little_screen--img2">
      <p class="little_screen--p3">${elem} km/h</p>`;
      this.littleScreenItem.insertAdjacentHTML('beforeend', str);
    }

    createLittleScreen2Position1(elem){
      let str = `<img src="image/icons1.png" alt="" class="section1_img3">
      <p class="little_screen2--p1">${elem} km/h</p>`;
      this.littleScreen2Position1.insertAdjacentHTML('beforeend', str)
    }

    createSection3Item2(weatherTitle, temp, tempMin, tempMax){
        let str = `<h2 class="section1_h2">${weatherTitle}</h2>
        <h3 class="section1_h3">Відчувається як ${temp}°</h3>
        <h3 class="section1_h3--screen">t=${tempMin}°/${tempMax}°</h3>`;
      this.flexContaiter1.insertAdjacentHTML('beforeend', str)
    }

    createSection3Item1(elem){
      let str = `<h1 class="section1_h1">${elem}°</h1>`;
      this.section1Item1.insertAdjacentHTML('beforeend', str)
    }

    fetch2(){
      let input = document.querySelector('.search_city--input')
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
                  this.print2()
                  return response;
              })        
                      .catch(() => {
                        console.log(response.cod)
                    //     if(response.cod === '400'){
                    //     this.content.innerHTML = ' ';
                    //     this.Page3();
                    //     console.log(404)
                    //     let btn = document.querySelector('.section1_dector2_input2');
                    //     btn.addEventListener('click', () => {
                    //         this.content.innerHTML = ' ';
                    //         this.Page2()
                    //     })
                    // }
                    return response;
                      })
      })
  }

  print2(e){
    
      let str2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&appid=b6f3d76a2e34d2b71c33936fd4ab7ea6&`
      fetch(str2)
      .then(response => response.json())
      .then(response => {
          console.dir(response);
          
          
              let step;
for (step = 0; step < 40; step++) {
          
          let main1 = response.list[0].weather.map(x => x.main);
          let main2 = response.list[5].weather.map(x => x.main);
          let main3 = response.list[10].weather.map(x => x.main);
          let main4 = response.list[15].weather.map(x => x.main);
          let main5 = response.list[20].weather.map(x => x.main);
          let main6 = response.list[25].weather.map(x => x.main);
          let main7 = response.list[30].weather.map(x => x.main);
          let main8 = response.list[35].weather.map(x => x.main);
          let arrMain = [main1, main2, main3, main4, main5, main6, main7, main8];

          let tempMin = response.list[step].main.temp_min;
          let tempMax = response.list[step].main.temp_max;
        let arrTempMin = [];
        const count1 = arrTempMin.push(tempMin - 7, tempMin - 6, tempMin - 5, tempMin - 4, tempMin - 3, tempMin - 2, tempMin - 1, tempMin - 0);
                
        let arrTempMax = [];
        const count2 = arrTempMax.push(tempMax - 7, tempMax - 6, tempMax - 5,  tempMax- 4, tempMax - 3, tempMax - 2, tempMax - 1, tempMax - 0);
          
          let temperature = response.list[0].main.temp;
          this.section1Item1.innerHTML = ' ';
          this.flexContaiter1.innerHTML = ' ';
          this.littleScreen2Position1.innerHTML = ' ';
          this.littleScreenItem.innerHTML = ' ';
          this.createSection3Item1(temperature.toFixed(2));
          this.createSection3Item2(arrMain[0], tempMin.toFixed(2), tempMax.toFixed(2));
          this.createLittleScreen2Position1(temperature.toFixed(2));
          this.createSection4(temperature.toFixed(2))
          // console.log(temperature)
          
          let time1 = response.list[0].dt_txt.split(' ')[1].slice(0, 5);
          let time2 = response.list[1].dt_txt.split(' ')[1].slice(0, 5);
          let time3 = response.list[2].dt_txt.split(' ')[1].slice(0, 5);
          let time4 = response.list[3].dt_txt.split(' ')[1].slice(0, 5);
          let time5 = response.list[4].dt_txt.split(' ')[1].slice(0, 5);
          let time6 = response.list[5].dt_txt.split(' ')[1].slice(0, 5);
          let time7 = response.list[6].dt_txt.split(' ')[1].slice(0, 5);
          let time8 = response.list[7].dt_txt.split(' ')[1].slice(0, 5);
          let time = [time1, time2, time3, time4, time5, time6, time7, time8]

          let dateArr1 = response.list[step].dt_txt.split('-')[0];
          let dateArr2 = response.list[step].dt_txt.split('-')[1];
          let dateArr3 = response.list[step].dt_txt.split('-')[2]
          let dateArr4 = dateArr3.slice(0, 2);
          this.hour1.innerHTML = ' '
          this.createHour1(dateArr4 - 5, dateArr2, dateArr1);
          
          let timeArr = ['06:00',
          '09:00', '12:00',
          '15:00', '18:00',
          '21:00', '00:00', '03:00'];
         let timeTitle = ['Ранок', 'Ранок', 'День', 'День', 'Вечір', 'Вечір', 'Ніч', 'Ніч']
         let result = timeArr.indexOf(`${time1}`); // 3
         let arr = timeTitle.slice(result, 8);
         let arr1 = timeTitle.slice(0, result);
         let arr2 = arr.concat(arr1);
         
         
         let c;
         for (c = 0; c < timeTitle.length; c++) {
       this.createHours(time[c], arr2[c], arrMain[c], arrMain[c], arrTempMin[c].toFixed(2), arrTempMax[c].toFixed(2));
            }
        

          
          if(e.target.matches('.next') || e.target.matches('.prev')){
            this.hours.innerHTML = ' ';
            
            let notesOnPage = 4;
            let t;
            for (t = 0; t < 4; t++) {
            let arr = [...this.hours.children];
          
            let start = (c) * notesOnPage;
            let end = start + notesOnPage;
        
            let notes = arr.slice(start, end);
            this.createHours(time[t], arr2[t], arrMain[t], arrMain[t], arrTempMin[t].toFixed(2), arrTempMax[t].toFixed(2));
            }
            
            
          } else{
            this.hours.innerHTML = ' ';
            let c;
            for (c = 0; c < time.length; c++) {
  
  
  
  
  
           
          }
          }
          
}
          return response
      })
  }

  createHour2(time, timeTitle, weatherTitle, weather, temp_min, temp_max){
    let str = `<p class="hour_time">${time}</p>
    <p class="hour_time--title">${timeTitle}</p>
    <img src="image/${weatherTitle}.png" alt="" class="contaiter_item1--img">
    <p class="hour_weather">${weather}</p>
    <p class="hour_deg">${temp_min}-${temp_max}°C</p>`;
  this.hour2.insertAdjacentHTML('beforeend', str)
  }

  searchCity(){
    const apiKey = 'b6f3d76a2e34d2b71c33936fd4ab7ea6';
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Геолокація не підтримується браузером.'));
    //   this.content.innerHTML = ' ';
    //                     this.Page3();
    //                     let btn = document.querySelector('.section1_dector2_input2');
    //                     btn.addEventListener('click', () => {
    //                         this.content.innerHTML = ' ';
    //                         this.Page2()
    //                     })
    }
  });
}

async function getWeatherForecast(lat, lon) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.list;

  } catch (error) {
    this.content.innerHTML = ' ';
                        this.Page3();
                        let btn = document.querySelector('.section1_dector2_input2');
                        btn.addEventListener('click', () => {
                            this.content.innerHTML = ' ';
                            this.Page2()
                        })
    console.error('Помилка при отриманні прогнозу погоди:', error);
    throw error;
  }
}

async function getWeatherForNearestCities() {
  try {
    let c = document.querySelector('.section1_days2');
    const location = await getCurrentLocation();
    const weatherForecast = await getWeatherForecast(location.lat, location.lon);
      
    console.log('Прогноз погоди для найближчих міст:');
    
    weatherForecast.forEach((city) => {
      
      console.log(`${city.name}: Температура ${city.main.temp_min}°C, ${city.main.temp_max}°C, ${city.weather[0].description}, ${city.weather[0].main},}`);
      let data = new Date();
      let day = data.getDate().toString().padStart(2, '0');
      let month = (data.getMonth() + 1).toString().padStart(2, '0');
      console.log(`${day}.${month}`);
      let str = `<li class="section1_day2">
      <p class="section1_day-p4">${city.name}</p>
      <img src="image/${city.weather[0].main}.png" alt="" class="section1_day--img">
      <p class="section1_day-p3">${city.weather[0].description}</p>
      <div class="section_day--flex">
          <p class="section1_day-p1">${day}.${month}</p>
          <p class="section1_day-p2">${city.main.temp_min}°-${city.main.temp_max}°</p>
      </div>
  </li>`;
  c.insertAdjacentHTML('beforeend', str)
      console.dir(c)
    });
  } catch (error) {
    console.error('Помилка:', error.message);
    this.content.innerHTML = ' ';
                        this.Page3();
                        let btn = document.querySelector('.section1_dector2_input2');
                        btn.addEventListener('click', () => {
                            this.content.innerHTML = ' ';
                            this.Page2()
                        })
  }
}
getWeatherForNearestCities();

  }

  fetch3(){
    let input = document.querySelector('.section1_input');
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
              this.searchCity()
              return response;    
          })        
                    .catch(() => {
                        // this.content.innerHTML = ' ';
                        // this.Page3();
                        // let btn = document.querySelector('.section1_dector2_input2');
                        // btn.addEventListener('click', () => {
                        //     this.content.innerHTML = ' ';
                        //     this.Page2()
                        // })
                    })
    })

}

createPagination(e){
  if(e.target.matches('.prev')){
    console.log(e.target)
  }

  if(e.target.matches('.next')){
    let hour2 = this.hours.querySelectorAll('.hour2')
    let arr = [...hour2];
    // console.log(arr);
    let notesOnPage = 4;
    let c;
    for (c = 0; c < 4; c++) {
    let pageNum = c;

    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;

    let notes = arr.slice(start, end);
    console.log(notes);
    }
  }
  
}
    init(){
        console.dir(this);
        this.fetch2()
        this.fetch3();
        this.hours.addEventListener('click', this.print2.bind(this))
        
    }
}

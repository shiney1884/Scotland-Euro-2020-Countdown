//Setting Match Date and Times

let date1 = document.querySelector('#date-1')
let date2 = document.querySelector('#date-2')
let date3 = document.querySelector('#date-3')

date1.innerHTML = new Date(2021, 5, 14, 14).toLocaleString()
date2.innerHTML = new Date(2021, 5, 18, 20).toLocaleString()
date3.innerHTML = new Date(2021, 5, 22, 20).toLocaleString()


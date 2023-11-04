const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

window.onload = function() {
    playMusic(); // Sayfa yüklendiğinde müziği çal
    setInterval(setDate, 1000); // Her saniyede bir `setDate` fonksiyonunu çağırarak saat ibresini güncelle
    setDate();
};
  

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90; /* 90 ekliyoruz çünkü .hand de rotate(90deg); yazdık. 90 eklemezsek saniye 60 olunca tur yatayda bitiyordu. 90 ekleyince dikeyde.*/
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function playMusic() {
    var audio = new Audio("sounds/ews.mp3"); 
    audio.play(); // Müziği çal
    audio.addEventListener('ended', function() {
      // Müzik tamamlandığında yeniden başlat
      audio.currentTime = 0; // Müziği başa sar
      audio.play(); // Yeniden çal
    });
}
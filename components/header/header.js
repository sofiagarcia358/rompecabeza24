function cargarHeader(){
   let divHeader = document.createElement('div');
   divHeader.className = "div-header";

   let logo = document.createElement('img');
   logo.src = "https://img.pixers.pics/pho_wat(s3:700/FO/61/71/01/13/700_FO61710113_bb424c33ea97485f4d52efe13c2c4892.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-spring-letter-s.jpg.jpg";
   divHeader.appendChild(logo)

   let h1 = document.createElement('h1');
   h1.textContent = "MEMORIA";
   divHeader.appendChild(h1)

   let botones = document.createElement('div');
   botones.className = "btn-padre";
   divHeader.appendChild(botones);

   let bot1 = document.createElement('button');
   bot1.className = "btn1";
   bot1.textContent = "1";
   botones.appendChild(bot1);

   let bot2 = document.createElement('button');
   bot2.className = "btn2";
   bot2.textContent = "2";
   botones.appendChild(bot2);

   let bot3 = document.createElement('button');
   bot3.className = "btn3";
   bot3.textContent = "3";
   botones.appendChild(bot3);

   let bot4 = document.createElement('button');
   bot4.className = "btn4";
   bot4.textContent = "4";
   botones.appendChild(bot4);

   let bot5 = document.createElement('button');
   bot5.className = "btn5";
   bot5.textContent = "5";
   botones.appendChild(bot5);


   return divHeader;

};
export{cargarHeader}

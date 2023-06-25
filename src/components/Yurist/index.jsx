import React from 'react';

const Yourist = () => {
  return (
    <section className="banner" style={{ backgroundImage: 'url(assets/images/gallery-4.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-left">
            <h2 className="title">Для юридических лиц:</h2>
            <ul className="list-group" style={{ display: 'flex', flexDirection: 'column', rubyAlign: 'left' }}>
              <li> Дополнительное торговое оборудование.</li>
              <li> Стеллажи хлебные.</li>
              <li> Тумбы для кофе-машин.</li>
              <li> Овощные развалы.</li>
              <li> Торгово-рабочие столы.</li>
              <li> Декоративные заливки.</li>
              <li> Деревянные ящики (кросс).</li>
              <li> Лотки для весовых конфет.</li>
              <li> Лотки из нержавеющей стали для вес. мяса.</li>
              <li> Тележка-шпилька для противней и подносов.</li>
              <li> Офисная мебель (любая).</li>
              <li> Столы и лофт-мебель.</li>
              <li> Столы-тумбы для касс самообслуживания.</li>
              <li> Барные столы и стулья.</li>
            </ul>
          </div>

          <div className="col-md-offset-2 col-md-8">
            <h2 className="title">Для физических лиц: </h2>
            <ul className="text-left" style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <li>Кухни (любой сложности).</li>
              <li>Шкафы-купе.</li>
              <li>Гардеробные.</li>
              <li>Лофт-мебель.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yourist;

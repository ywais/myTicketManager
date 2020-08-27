import React from 'react';

function Ads() {
  const ads = [
    <a href="https://www.mako.co.il/tv-music-school/registration">
      <img src="https://img.mako.co.il/2020/06/16/MusicSchool_304x320.jpg" alt="music school registration" />
    </a>,
    <a href="https://019mobile.co.il/?lm_supplier=11432">
      <img src="https://img.mako.co.il/2019/11/18/13213_12Boom-ForLife_MAKO_01-300x250px.gif" alt="019 12Boom ForLife" />
    </a>,
    <a href="https://www.alm.co.il/smartphones-laptops-techproducts/back-to-school.html">
      <img src="https://tpc.googlesyndication.com/simgad/16243869295285508643" alt="back to school" />
    </a>,
    <a href="https://il.shein.com/style/Casual-sc-00100647.html">
      <img src="https://tpc.googlesyndication.com/simgad/16037429271196060283" alt="shein casual style" />
    </a>,
  ];

  return (
    <div className="noTAnaD">
      {ads[Math.floor(Math.random() * 4)]}
    </div>
  );
}

export default Ads;

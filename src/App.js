import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import Hesap_olusturma from './Pages/Hesap_olusturma';
import Kullaniciadi from './Pages/Kullaniciadi';
import Sifre from './Pages/Sifre';
import Puandurumu from './Pages/Puandurumu';
import TakimEkle from './Pages/TakimEkle';
import Haber from './Pages/Haber';
import Detay from './Pages/Detay';
import Kayitol from './Pages/Kayitol';
import OyuncuOlusturma from './Pages/OyuncuOlusturma';
import TakimDetay from './Pages/TakimDetay';
import Oyuncular from './Pages/Oyuncular';
import OyuncuDetay from './Pages/OyuncuDetay';
import Duzenle from './Pages/Duzenle';
import OyuncuDuzenle from './Pages/OyuncuDuzenle';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Kayitol" element={<Kayitol />} />
        <Route path="/" element={<Home />} />
        <Route path="/Puandurumu" element={<Puandurumu />} />
        <Route path="/TakimEkle" element={<TakimEkle />} />
        <Route path="/:id/Duzenle"  element={<Duzenle/>}/>
        <Route path="/OyuncuOlusturma" element={<OyuncuOlusturma/>} />
        <Route path="/Haber" element={<Haber />} />
        <Route path="/Profil/Hesap_olusturma" element={<Hesap_olusturma />} />
        <Route path="/Profil/Hesap_olusturma/Kullaniciadi" element={<Kullaniciadi />} />
        <Route path="/Profil/Hesap_olusturma/Kullaniciadi/Sifre" element={<Sifre />} />
        <Route path="/:id/Detay" element={<Detay />} />
        <Route path="/TakimDetay" element={<TakimDetay/>}/>
        <Route path="/:id/Oyuncular" element={<Oyuncular/>} />
        <Route path="/:id/OyuncuDetay" element={<OyuncuDetay/>} />
        <Route path="/:id/OyuncuDuzenle"  element={<OyuncuDuzenle/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

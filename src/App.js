import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import Hesap_olusturma from './Pages/Hesap_olusturma';
import Kullanıcıadı from './Pages/Kullanıcıadı';
import Sifre from './Pages/Sifre';
import Puandurumu from './Pages/Puandurumu';
import TakımEkle from './Pages/TakımEkle';
import Haber from './Pages/Haber';
import Detay from './Pages/Detay';
import Kayıtol from './Pages/Kayıtol';
import OyuncuOlusturma from './Pages/OyuncuOlusturma';
import TakımDetay from './Pages/TakımDetay';
import Oyuncular from './Pages/Oyuncular';
import OyuncuDetay from './Pages/OyuncuDetay';
import Düzenle from './Pages/Düzenle';
import OyuncuDüzenle from './Pages/OyuncuDüzenle';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Kayıtol" element={<Kayıtol />} />
        <Route path="/" element={<Home />} />
        <Route path="/Puandurumu" element={<Puandurumu />} />
        <Route path="/TakımEkle" element={<TakımEkle />} />
        <Route path="/:id/Düzenle"  element={<Düzenle/>}/>
        <Route path="/OyuncuOlusturma" element={<OyuncuOlusturma/>} />
        <Route path="/Haber" element={<Haber />} />
        <Route path="/Profil/Hesap_olusturma" element={<Hesap_olusturma />} />
        <Route path="/Profil/Hesap_olusturma/Kullanıcıadı" element={<Kullanıcıadı />} />
        <Route path="/Profil/Hesap_olusturma/Kullanıcıadı/Sifre" element={<Sifre />} />
        <Route path="/:id/Detay" element={<Detay />} />
        <Route path="/TakımDetay" element={<TakımDetay/>}/>
        <Route path="/:id/Oyuncular" element={<Oyuncular/>} />
        <Route path="/:id/OyuncuDetay" element={<OyuncuDetay/>} />
        <Route path="/:id/OyuncuDüzenle"  element={<OyuncuDüzenle/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;

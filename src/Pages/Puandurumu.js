import React from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import t1 from "../Resimler/gs1.png"
import t2 from "../Resimler/fb.png"
import t3 from "../Resimler/bjk.png"
import t4 from "../Resimler/adanademir.png"
import t5 from "../Resimler/basaksehir.png"
import t6 from "../Resimler/ts.png"
import t7 from "../Resimler/konya.png"
import t8 from "../Resimler/kayseri.png"
import t9 from "../Resimler/karagumruk.png"
import t10 from "../Resimler/alanya.png"
import t11 from "../Resimler/kasimpasa.png"
import t12 from "../Resimler/ankaragucu.png"
import t13 from "../Resimler/antalya.png"
import t14 from "../Resimler/sivas.png"
import t15 from "../Resimler/istanbul.png"
import t16 from "../Resimler/giresun.png"
import t17 from "../Resimler/umraniye.png"
import t18 from "../Resimler/gaziantep.png"
import t19 from "../Resimler/Hatayspor.png"
import icon from "../Resimler/superligg.jpg"


const Puandurumu = () => {
    return (
        <div>
            <Navbar /><br/>
            <div  className="puandurumu">
                <div className="cubuk1">
                    Puan Durumu
                </div>
                <div className="cubuk2">
                    Spor Toto Süper Lig 2022/23
                </div>
                <table  class="table table-hover bg-light">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Takım</th>
                            <th scope="col">OM</th>
                            <th scope="col">G</th>
                            <th scope="col">B</th>
                            <th scope="col">M</th>
                            <th scope="col">AG</th>
                            <th scope="col">YG</th>
                            <th scope="col">A</th>
                            <th scope="col">P</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src={t1} width="15" /> Galatasaray</td>
                            <td>34</td>
                            <td>25</td>
                            <td>4</td>
                            <td>4</td>
                            <td>73</td>
                            <td>26</td>
                            <td>47</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><img src={t2} width="15" /> Fenerbahçe</td>
                            <td>34</td>
                            <td>23</td>
                            <td>5</td>
                            <td>5</td>
                            <td>82</td>
                            <td>39</td>
                            <td>43</td>
                            <td>80</td>

                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td><img src={t3} width="15" /> Beşiktaş</td>
                            <td>34</td>
                            <td>22</td>
                            <td>8</td>
                            <td>4</td>
                            <td>70</td>
                            <td>31</td>
                            <td>39</td>
                            <td>75</td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td><img src={t4} width="15" /> AdanaDemir</td>
                            <td>33</td>
                            <td>18</td>
                            <td>9</td>
                            <td>6</td>
                            <td>70</td>
                            <td>41</td>
                            <td>29</td>
                            <td>63</td>
                        </tr>

                        <tr>
                            <th scope="row">5</th>
                            <td> <img src={t5} width="15" /> Başaksehir</td>
                            <td>33</td>
                            <td>15</td>
                            <td>8</td>
                            <td>10</td>
                            <td>45</td>
                            <td>34</td>
                            <td>11</td>
                            <td>53</td>
                        </tr>

                        <tr>
                            <th scope="row">6</th>
                            <td><img src={t6} width="15" /> Trabzonspor</td>
                            <td>33</td>
                            <td>15</td>
                            <td>6</td>
                            <td>12</td>
                            <td>54</td>
                            <td>48</td>
                            <td>6</td>
                            <td>51</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td><img src={t7} width="15" /> Konya</td>
                            <td>33</td>
                            <td>12</td>
                            <td>13</td>
                            <td>8</td>
                            <td>45</td>
                            <td>36</td>
                            <td>9</td>
                            <td>49</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td><img src={t8} width="15" /> Kayseri</td>
                            <td>33</td>
                            <td>15</td>
                            <td>4</td>
                            <td>14</td>
                            <td>54</td>
                            <td>57</td>
                            <td>-3</td>
                            <td>49</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td><img src={t9} width="15" /> Karagümrük</td>
                            <td>33</td>
                            <td>11</td>
                            <td>11</td>
                            <td>11</td>
                            <td>69</td>
                            <td>62</td>
                            <td>7</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td><img src={t10} width="15" /> Alanya</td>
                            <td>33</td>
                            <td>11</td>
                            <td>8</td>
                            <td>15</td>
                            <td>52</td>
                            <td>62</td>
                            <td>-10</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td><img src={t11} width="15" /> Kasımpaşa</td>
                            <td>33</td>
                            <td>11</td>
                            <td>7</td>
                            <td>15</td>
                            <td>40</td>
                            <td>52</td>
                            <td>-12</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td><img src={t12} width="15" /> Ankaragücü</td>
                            <td>34</td>
                            <td>11</td>
                            <td>6</td>
                            <td>16</td>
                            <td>40</td>
                            <td>47</td>
                            <td>-7</td>
                            <td>39</td>
                        </tr>

                        <tr>
                            <th scope="row">13</th>
                            <td><img src={t13} width="15" /> Antalyaspor</td>
                            <td>34</td>
                            <td>10</td>
                            <td>8</td>
                            <td>15</td>
                            <td>43</td>
                            <td>51</td>
                            <td>-8</td>
                            <td>38</td>
                        </tr>

                        <tr>
                            <th scope="row">14</th>
                            <td><img src={t14} width="15" /> Sivasspor</td>
                            <td>33</td>
                            <td>10</td>
                            <td>7</td>
                            <td>17</td>
                            <td>44</td>
                            <td>53</td>
                            <td>-9</td>
                            <td>37</td>
                        </tr>

                        <tr>
                            <th scope="row">15</th>
                            <td><img src={t15} width="15" /> İstanbulspor</td>
                            <td>33</td>
                            <td>10</td>
                            <td>5</td>
                            <td>18</td>
                            <td>40</td>
                            <td>61</td>
                            <td>-21</td>
                            <td>35</td>
                        </tr>

                        <tr>
                            <th scope="row">16</th>
                            <td><img src={t16} width="15" /> Giresunspor</td>
                            <td>33</td>
                            <td>8</td>
                            <td>10</td>
                            <td>15</td>
                            <td>37</td>
                            <td>56</td>
                            <td>-19</td>
                            <td>34</td>
                        </tr>

                        <tr>
                            <th scope="row">17</th>
                            <td><img src={t17} width="15" /> Ümraniyespor</td>
                            <td>33</td>
                            <td>6</td>
                            <td>9</td>
                            <td>18</td>
                            <td>44</td>
                            <td>59</td>
                            <td>-15</td>
                            <td>27</td>
                        </tr>

                        <tr>
                            <th scope="row">18</th>
                            <td><img src={t18} width="15" /> Gaziantep FK</td>
                            <td>33</td>
                            <td>6</td>
                            <td>7</td>
                            <td>20</td>
                            <td>31</td>
                            <td>63</td>
                            <td>-32</td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <th scope="row">19</th>
                            <td><img src={t19} width="15" /> Hatayspor</td>
                            <td>33</td>
                            <td>6</td>
                            <td>5</td>
                            <td>22</td>
                            <td>19</td>
                            <td>74</td>
                            <td>-55</td>
                            <td>23</td>
                        </tr>

                       

                        
                        
                    </tbody>
                </table>
                <div className="cubuk1">

                </div><br/>
                <div className="cubuk">
                <div className="kutuu">
                    <p><img src={icon} width="50" /><font color="white" className=""> Copyright 2023</font>  <font color="white" className="">I</font> <font color="white" className="" >Tüm Hakları Saklıdır.</font></p>
                    <hr />
                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>Kurumsal</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Doğuş Yayın Grubu</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Kullanım Koşulları</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Gizlilik Politikası</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Çerez Politikası</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Reklam</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Künye</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>İletişim</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>İzleyici Temsilcisi</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>Bize Ulaşın</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>İnsan Kaynakları</li></Link>
                        </ul>

                    </div>

                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>DYG TELEVİZYONLAR</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>NTV</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>STAR</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>EURO STAR</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL TV</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL POP TV</li></Link>

                        </ul>

                    </div>


                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>DYG RADYOLAR</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>NTV RADYO</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL FM</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>KRAL POP</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>EKSEN</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>VOYAGE</li></Link>

                        </ul>

                    </div>

                    <div className="yazı_kutu1 float-l">
                        <ul className="hover" style={{ textDecoration: "none" }}>
                            <h6 style={{ color: "white" }}>DYG DİJİTAL</h6>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>ntv.com.tr</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>ntvspor.net</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>ntvhava.com</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>kralmuzik.com.tr</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>puhutv.com</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>startv.com.tr</li></Link>
                            <Link style={{ textDecoration: "none", listStyle: "none" }}><li style={{ color: "gray" }}>secim.ntv.com.tr</li></Link>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="kutu3">
                <button style={{ width: 40, height: 40, margin: 5 }} className="f1 a1 btn btn-light"><i class="fa-brands fa-facebook"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="t3 a3 btn btn-light"><i class="fa-brands fa-twitter"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="i2 a2 btn btn-light"><i class="fa-brands fa-instagram"></i></button>
                <button style={{ width: 40, height: 40, margin: 5 }} className="y4 a4 btn btn-light"><i class="fa-brands fa-youtube"></i></button>
            </div>
               

            </div>
        </div>
    )
}

export default Puandurumu;
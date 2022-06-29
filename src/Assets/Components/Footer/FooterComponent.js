import React from "react";
import "../Footer/FooterComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterComponent = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="footer1 col">
            <ui className="list-unstyled">
              <li className="paragraf1">
                <a className="FaQ" href="#">
                  FaQ
                </a>
              </li>
              <br />
              <li className="paragraf2">
                <a className="buying" href="#">
                  Buying & Selling Guide
                </a>
              </li>
              <li className="paragraf3">
                <a className="payment" href="#">
                  Payment Confirmation
                </a>
              </li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h3>ABOUT US</h3>
            <ui className="list-unstyled">
              <li>
                <p>... merupakan sebuah website jual sepatu terpecaya yang sudah bertahun-tahun berjalan di Indonesia.
                 Kami memastikan produk yang terjual di platform ini 100% original, sebab kamu selalu melakukan proses autentikasi dan verifikasi kepada para penjual untuk memastikan keaslian produk,” jelasnya.</p>
              </li>
              <li>
                <p>Disini juga kami berusaha sebaik mungkin dalam melayani pelanggan agar mereka mendapatkan sepatu yang mereka ingin kan dengan aman dan terpecaya.</p>
              </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Our Social Media</h4>
            <ui className="social list-unstyled">
              <li className="icon1">
                <a href="#">
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
                </a>
              </li>
              <li className="icon2">
                <a href="#">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" />
                </a>
              </li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="copyright row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} - Pemuda Pencari Berkah | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    // <div>
    //     <div className='container nav-footer-bg'>
    //         {/* garis */}
    //         <div className='card border-0 nav-footer-bg'>
    //             <div className='card-body'>
    //                 <hr />
    //             </div>
    //         </div>

    //         {/* Created by */}
    //         <div className='row text-center'>
    //             <div className='col-md-6'>
    //                 <div className='card nav-footer-card border-0 shadow-sm'>
    //                     <div className='card-body'>
    //                         <p className='h5'>FrontEnd :</p>
    //                         <ul className='text-start'>
    //                             <li>Abdullah Hasan Mufid Fakhri</li>
    //                             <li>Dery Nugroho Marjuki</li>
    //                             <li>Muhammad Faruq Noor Afiyf</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className='col-md-6'>
    //                 <div className='card nav-footer-card border-0 shadow-sm'>
    //                     <div className='card-body'>
    //                         <p className='h5'>BackEnd :</p>
    //                         <ul className='text-start'>
    //                             <li>Clement Howard</li>
    //                             <li>Thomi Rizqulloh</li>
    //                             <li>Other</li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         {/* copyright */}
    //         <div className='card border-0 text-center nav-footer-bg'>
    //             <div className='card-body'>
    //                 <p className='text-center text-secondary btn-sm'>Copyright &copy; Pemuda Pencari Berkah 2022</p>
    //                 <hr />
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

import React from 'react';
import './FlowerStyle.css';

const Flowers = () => {
  // KONFIGURASI BUKET SUPER RAME (18 Tangkai)
  const bouquetConfig = [
    // --- LAYER 1: PALING BELAKANG (Tinggi & Lebar) ---
    { id: 1, type: 'lily', height: 380, scale: 0.9, rotate: -65, left: '5%', delay: '0s', zIndex: 1 },
    { id: 2, type: 'tulip', height: 400, scale: 0.9, rotate: -45, left: '20%', delay: '0.1s', zIndex: 2 },
    { id: 3, type: 'lily', height: 430, scale: 1.0, rotate: -15, left: '38%', delay: '0.2s', zIndex: 3 },
    { id: 4, type: 'lily', height: 440, scale: 1.0, rotate: 0, left: '50%', delay: '0.3s', zIndex: 1 }, // Pusat tertinggi
    { id: 5, type: 'lily', height: 430, scale: 1.0, rotate: 15, left: '62%', delay: '0.2s', zIndex: 3 },
    { id: 6, type: 'tulip', height: 400, scale: 0.9, rotate: 45, left: '80%', delay: '0.1s', zIndex: 2 },
    { id: 7, type: 'lily', height: 380, scale: 0.9, rotate: 65, left: '95%', delay: '0s', zIndex: 1 },

    // --- LAYER 2: TENGAH (Pengisi Volume) ---
    { id: 8, type: 'tulip', height: 360, scale: 0.85, rotate: -30, left: '28%', delay: '0.5s', zIndex: 5 },
    { id: 9, type: 'lily', height: 370, scale: 0.9, rotate: -10, left: '42%', delay: '0.6s', zIndex: 6 },
    { id: 10, type: 'lily', height: 370, scale: 0.9, rotate: 10, left: '58%', delay: '0.7s', zIndex: 6 },
    { id: 11, type: 'tulip', height: 360, scale: 0.85, rotate: 30, left: '72%', delay: '0.8s', zIndex: 5 },

    // --- LAYER 3: DEPAN (Lebih Pendek) ---
    { id: 12, type: 'tulip', height: 320, scale: 0.8, rotate: -35, left: '15%', delay: '1.0s', zIndex: 8 },
    { id: 13, type: 'lily', height: 300, scale: 0.8, rotate: -20, left: '35%', delay: '1.1s', zIndex: 9 },
    { id: 14, type: 'tulip', height: 310, scale: 0.85, rotate: 0, left: '50%', delay: '1.2s', zIndex: 10 },
    { id: 15, type: 'lily', height: 300, scale: 0.8, rotate: 20, left: '65%', delay: '1.3s', zIndex: 9 },
    { id: 16, type: 'tulip', height: 320, scale: 0.8, rotate: 35, left: '85%', delay: '1.4s', zIndex: 8 },

    // --- LAYER 4: PEMANIS BAWAH (Kecil) ---
    { id: 17, type: 'tulip', height: 260, scale: 0.75, rotate: -15, left: '45%', delay: '1.6s', zIndex: 12 },
    { id: 18, type: 'tulip', height: 260, scale: 0.75, rotate: 15, left: '55%', delay: '1.7s', zIndex: 12 },
  ];

  return (
    <div className="flower-wrapper-final">
      <div className="bouquet-container">
        
        {/* Kertas Belakang */}
        <div className="bucket-paper-back"></div>

        {/* --- GROUP BUNGA --- */}
        <div className="flowers-group">
          {bouquetConfig.map((flower) => (
            <div 
              key={flower.id} 
              className="stem-wrapper"
              style={{
                '--final-height': `${flower.height}px`,
                '--rotate': `${flower.rotate}deg`,
                left: flower.left,
                transform: `translateX(-50%) scale(${flower.scale})`,
                zIndex: flower.zIndex,
                animationDelay: flower.delay
              }}
            >
              {/* Batang Tumbuh */}
              <div className="stem-growth">
                <div className="stem-leaf stem-leaf-l"></div>
                <div className="stem-leaf stem-leaf-r"></div>

                {flower.type === 'lily' ? (
                  // --- BUNGA LILY (MEKAR KELUAR) ---
                  <div className="lily-css-head">
                    <div className="lily-petal petal-1"></div>
                    <div className="lily-petal petal-2"></div>
                    <div className="lily-petal petal-3"></div>
                    
                    <div className="lily-stamen stamen-1"></div>
                    <div className="lily-stamen stamen-2"></div>
                    <div className="lily-stamen stamen-3"></div>
                    
                    <div className="lily-petal petal-4"></div>
                    <div className="lily-petal petal-5"></div>
                    <div className="lily-petal petal-6"></div>
                  </div>
                ) : (
                  // --- BUNGA TULIP ---
                  <div className="tulip-css-head">
                     <div className="tulip-head-main"></div>
                     <div className="tulip-head-top"></div>
                     <div className="tulip-petal-overlay-l"></div>
                     <div className="tulip-petal-overlay-r"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Kertas Depan & Pita */}
        <div className="bucket-front-decoration">
          <div className="bucket-paper-front-left"></div>
          <div className="bucket-paper-front-right"></div>
          
          <div className="ribbon-container">
            <div className="ribbon-loop-left"></div>
            <div className="ribbon-loop-right"></div>
            <div className="ribbon-knot"></div>
            <div className="ribbon-tail-left"></div>
            <div className="ribbon-tail-right"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Flowers;
# CoinCanvas

A simple **crypto search app** built with [Vite](https://vitejs.dev/), [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and the [CoinRanking API](https://developers.coinranking.com/).  
Users can search for cryptocurrencies and view details in real time.

---

## Features
- Search for cryptocurrencies by name
- Live data from CoinRanking API
- SCSS styling with Vite integration
- Modular JavaScript structure
- Lightning-fast development with Vite

---

## Tech Stack
- **Frontend:** HTML5, SCSS, JavaScript (ES Modules)
- **Build Tool:** Vite
- **API:** CoinRanking API
- **HTTP Client:** Fetch API (Axios available)
- **Styling:** Sass/SCSS

---
## Installation & Setup

1. **Clone the repository**
   
    ```bash
   git clone https://github.com/imrenr/coincanvas.git
   cd coincanvas
    
3. **Install dependencies**
   
   npm install
   
5. **Run the development server**

   npm run dev

  


























## NEDEN FRONTEDN GELISTIRMEDE NODEJS KULLANILIR ?
- NodeJS, JS ile Backend uygulamalarinin gelistirilebilmesi icin yazildi.
- Bu sebeple, Chrome browserlarin JS motoru, PCve Servelerda calisilabilecek sekilde implement edilir.
- Ancak NodeJS de calisacak uygulamalarin UI tarafiyla ilgisi olmayacagi icin; DOM, window v.b. kisimlar implement edilmedi.
- Browser'lar ES modullerini desteklemeden once NodeJS modul yapisini (CommonJS) destekliyordu.
- Dolayisiyla Frontend gelistiricileri,
 - NodeJS in modul yapisindan faydalanmak istediler.
 - Ayrica, NodeJS uzerinde bulunan ve npm olarak adlandirilan paket yonetim sistemi de harici kutuphanelerin yonetimini kolaylastirdigi icin NodeJS uzerinde Frontend gelistirme fikri agir basti.
- Ancak, browserlarda bulunan bir cok API Nodejs tarafindan desteklenmedigi icin bu uygulama NodeJS uzerinde gelistirilse bile yine Browser larda calistirilmaliydi.
- Iste bu ikisi (NodeJS ve Browser) arasindaki uyumu saglamak icin yani NodeJS uzerinde gelistirilen uygulamalarin paketlenerek bir bundle(bir cok harici kod ve modulun birlestirilmesi islemi) olusturulup Browser lara sunulabilmesi icin Webpack, Rollup ve Parcel gibi bundler lar kullanildi.
- Gunumuzde bircok FE kutuphanesi (React, Angular,Vue vb) yukarida bahsedilen sekilde frontend gelistirilmesi imkan saglamis oluyor. Son yillarda Vite gibi tool'lar yardimiyla FE gelistirmedeki tum bu surecler daha kolay bir sekilde yonetilebilmektedir
 - Sonuc olarak, NodeJS her ne kadar BE gelistirme icin yazilmis olsa da bir cok avantajindan dolayi FE gelistirmede de yaygin bir sekilde kullanilmaktadir.

 - Nodejs ortaminda proje baslatma: npm init || npm init -y
 - Nodejs ortaminda paket yukleme: npm install package_name || name i package_name
 - Nodejs ortaminda js dosyasini calistirma: node dosyaAdi.js (node index js= > terminalde calisitrildiginda console.log terminale print eder)

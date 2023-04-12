<template>
    <div class="produk">
  
    </div>
  
    <center>  <h3>Perhiasan</h3>
      <table >
        <tr>
          <th>kalung</th>
          <th>cincin </th>
          <th>gelang tangan</th>
          <th>gelang kaki</th>
          <th>anting-anting</th>
          <th>berlian</th>
        </tr>
  
  
        <tr>
          <td><img src="https://ubslifestyle.com/wp-content/uploads/2020/01/KGV5544_A.jpg" alt="gelang" style="width:200px;height:220px;" /></td>
          <td align="center">gelang</td>
  
          <td><select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option disabled value="">Pilih Perhiasan</option>
            <option>10,6cm</option>
            <option>13,9cm</option>
            <option>16cm</option>
            <option>20cm</option>
          </select></td>
  
          <td><img src="https://ubslifestyle.com/wp-content/uploads/2022/12/KKV14022_A1.jpg" alt="kalung" style="width:200px;height:220px"/> </td>
          <td align="center">kalung</td>
  
          <td><select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option disabled value="">Pilih perhiasan</option>
            <option>36cm</option>
            <option>40cm</option>
            <option>50cm</option>
            <option>55cm</option>
          </select></td>
        </tr>
  
        <tr>
          <td><img src="https://vncojewellery.com/artikel/wp-content/uploads/2020/08/Apa-Itu-Cincin-Listring.jpg" alt="cinin" style="width:200px;height:220px;" /></td>
          <td>cincin anak-dewasa</td>
          <td><select class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option disabled value="">cincin</option>
                <option>7cm</option>
                <option>10cm</option>
                <option>17cm</option>
                <option>25cm</option>
              </select></td>
              
          <td><img src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/11/18/1d47465b-4716-4a73-878a-27c58742b33c.jpg" alt="anting-anting" style="width:200px;height:220px"/> </td>
          <td align="center">anting-anting</td>
  
          <td><select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option disabled value="">Pilih perhisan</option>
            <option>12mm</option>
            <option>15mm</option>
            <option>18mm</option>
            <option>20mm</option>
          </select></td>
        </tr>
  
      </table>
  
      <div>
        <a href="https://shopee.co.id/search?keyword=baju%20kaos" target="_blank">Lebih lengkap nya klik disni</a>
      </div>
  
      <span>Keritik dan saran untuk toko kami:</span>
      <p style="white-space: pre-line;">{{ pesan }}</p>
      <br>
      <textarea v-model="pesan" placeholder="Kirim pesan" ></textarea>
      <h6>
        Tentang Kami
      </h6>
      <p>
        Toko mas kami menawarkan transaksi jual beli online yang menyenangkan, gratis, dan terpercaya. Dan berbelanja berbagai perhisan menarik kapan saja. Keamanan transaksi kamu terjamin.. Ayo untuk berbelanja dan menyenangkan diri!!
      </p>
    </center>
  
  
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  
  table, th, td {
    border:2px solid #dfa852;}
  
  </style>
  
  <style>
  body {
    font-size: 20px;
  }
  
  
  </style>
  
  
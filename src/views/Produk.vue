<template>
    <div class="produk">
  
    </div>
  
    <h3>Produk</h3>
      <table >
        <tr>
          <th>Perhiasan Emas</th>
          <th>Ukuran</th>
        </tr>
        <tr>
          <td>Kalung</td>
          <td>50CM</td>
        </tr>
        <tr>
          <td>Gelang</td>
          <td>17cm</td>
        </tr>
        <tr>
          <td>cincin</td>
          <td>13,5cm</td>
        </tr>
      </table>
      <br>
      <table >
        <tr>
          <th>Persiasan Berlian</th>
          <th>ukuran</th>
        </tr>
        <tr>
          <td>Cincin permata</td>
          <td>15cm</td>
        </tr>
        <tr>
          <td>Kalung permata</td>
          <td>45cm</td>
        </tr>
        <tr>
          <td>anting-anting</td>
          <td>10mm</td>
        </tr>
        <tr>
          <td>Gelang permata</td>
          <td>17cm</td>
        </tr>
      </table>
  <br>
    <br>
      <div>
        <h6>Untuk Harga Perhisan dan Berlian silahkan kunjungi
          <a href="https://elegance.co.id/wp-content/uploads/2020/03/toko-berlian-jakarta.jpeg">Perhiasan</a>
        </h6>
      </div>
  <br>
      <span>Kritik dan saran untuk toko kami:</span>
      <p style="white-space: pre-line;">{{ pesan }}</p>
      <textarea v-model="pesan" placeholder="Kirim pesan" ></textarea>
      <p>
  
      </p>
  
  
  
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
  form {margin-top: 1%;}
  body  {
    background-size: cover;
    background-image: url('/bg ayam.jpg');
    background-color: #cccccc;
  
  }
  </style>
  <style>
  body {
    font-size: 20px;
  }
  
  
  </style>
  
  
# mycourse-next-js
MEA - My Course Page with Next Js

Perbedaan cara untuk GET:
1. XHR memerlukan beberapa step lebih banyak untuk melakukan integrasi GET api ketimbang cara lain, contohnya harus inisialisasi xhr pada variable terlebih dahulu seperti const request = new XMLHTTPRequest() kemudian menggunakan request.open() untuk menentukan method, request.onload() untuk mendengar event panggilan/inisiasi network, dan request.send() untuk membuka koneksi network. GET tidak akan terpanggil jika request.send() tidak dilakukan.

2. Untuk Fetch API, dia melakukan proses request network yang sama seperti xhr namun dibundle dengan cara yang lebih singkat dan padat, di fetch sudah built in Promises yang membuat teknik fetch lebih "clean" dalam menerima response GETnya. Response dari fetch akan berbentuk promise yang bisa diresolve.

3. Untuk Axios API, teknik ini serupa seperti fetch tapi data yang diterima otomatis menjadi json jadi tidak ada extra step untuk return responsenya. Selain itu axios juga memiliki fitur fitur tambahan lainnya yang tidak dimiliki fetch/XHR.

Perbedaan cara untuk set Header:
1. XHR menambah header
    inisialisasi request, kemudian gunakan: 
    request.setRequestHeader(name, value);
    pada name set response header yang direquest seperti "Content-Type", 
    atau gunakan getAllResponseHeaders() untuk menerima semua kecuali set-cookie & set-cookie2 
    
    dan pada value untuk memasukan data dari response header yang digunakan, contohnya jika "Content-Type" maka valuenya bisa menggunakan "application/x-www-form-urlencoded".


2. Fetch untuk menambah header dilakukan seperti:
    const response  = await fetch( url, { config });
        dalam config ditentukan headers yang digunakan contohnya seperti
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
3. Axios untuk menambah headers tidak jauh berbeda seperti fetch
    axios.get(url[, config]) dimana dalam config berisi set headers seperti
     headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
          },

Perbedaan setting cors agar server dapat set cookie:
1. XHR memerlukan line berikut sebelum request dikirim
      request.withCredentials = true;
2. Fetch memerlukan line berikut pada bagian config
            mode: 'cors', 
            credentials: 'include',
3. Axios hanya memerlukan line berikut pada bagian config
          withCredentials: true,


Cara Handle response:
1. dalam XHR untuk menghandle respnonse menggunakan 
    inisiasi 
        const request = new XMLHTTPRequest();
    kemudian line berikut akan menerima response dari request pada network yang telah dilakukan 
        request.onload()

        contoh: 
        request.onload = function() {
        if (request.readyState == 4 && request.status == 200) {
            setData(request.response.data);
        }
    };
        onload() akan dieksekusi jika kondisi tersebut benar dan terbukti response sudah diterima. 

2. dalam Fetch response sebelumnya diubah dahulu menjadi json dengan .json, kemudian 
 menggunakan kembali await dalam async function.
    contoh:
        const responseCourses = await getCourse.json();
        return responseCourses

3. dalam Axios handle response dilakukan lebih singkat dengan langsung me-return response karena data otomatis diterima dalam bentuk json

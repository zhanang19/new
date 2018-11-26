let counter = 1
document.getElementById('kirimPesan').addEventListener('click', function(){
    let tabelData = document.getElementById('table-data')

    let nama = document.getElementById('nama').value
    let email = document.getElementById('email').value
    let kat = document.getElementById('kategori')
    let kategori = kat.options[kat.selectedIndex].value
    let pesan = document.getElementById('pesan').value

    if (nama !== null && nama !== '' && email !== null && email !== '' && kategori !== null && kategori !== '' && kategori != '0' && pesan !== null && pesan !== '') {
        counter++

        let baris = tabelData.insertRow()
        let kolom = baris.insertCell(0)
        kolom.innerHTML = counter + '.'
        kolom = baris.insertCell(1)
        kolom.innerHTML = nama
        kolom = baris.insertCell(2)
        kolom.innerHTML = email
        kolom = baris.insertCell(3)
        kolom.innerHTML = kategori
        kolom = baris.insertCell(4)
        kolom.innerHTML = pesan

        alert('Pesan berhasil dikirim')
        // alert.innerHTML = 'Isi semua form diatas'
        // alert.classList.remove('text-danger')
        // alert.classList.add('text-success')
        // alert.innerHTML = 'Berhasil disimpan'
    } else {
        alert('Silahkan isi semua form')

        // alert.parentNode.style = 'display: inline-block;'
        // alert.classList.remove('text-success')
        // alert.classList.add('text-danger')
        // alert.innerHTML = 'Isi semua form diatas'
    }
})


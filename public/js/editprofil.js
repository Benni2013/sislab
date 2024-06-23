document.addEventListener('DOMContentLoaded', async () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const nama = document.getElementById('nama').value
        const nomor_induk = document.getElementById('nomor_induk').value
        const alamat = document.getElementById('alamat').value

        const response = await fetch('/updateprofil', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                nama : nama,
                nomor_induk: nomor_induk,
                alamat: alamat
            })
        })

        const dataeditprofil = await response.json()
        console.log(dataeditprofil);
        if (dataeditprofil.success) { 
            Swal.fire({
                title: dataeditprofil.message,
                timer: 1500,
                icon: "success"
                    });
        }else {
            Swal.fire({
                title: dataeditprofil.message,
                timer: 1500,
                icon: "error"
            });
        }
    })
})

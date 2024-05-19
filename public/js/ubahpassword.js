document.addEventListener('DOMContentLoaded', async () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        const password = document.getElementById('password').value
        const newpassword = document.getElementById('newpassword').value

        const response = await fetch('/ubahpassword', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                newpassword: newpassword
            })
        })

        const dataUbahPassword = await response.json()
        console.log(dataUbahPassword);
        if (dataUbahPassword.success) {

            // Informasi login sukses
            Swal.fire({
                title: dataUbahPassword.message,
                timer: 1500,
                icon: "success"
                    });
                    // window.location.href='/ubahpassword'
            // Fetch data setelah login sukses
            
        } else {
            // Informasi login gagal
            Swal.fire({
                title: dataUbahPassword.message,
                timer: 1500,
                icon: "error"
            });
        }
    })
})

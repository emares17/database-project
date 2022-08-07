document.getElementById('submit').addEventListener('submit', addFragrance);

async function addFragrance(e) {
    e.preventDefault()

    const fName = document.getElementById('name').value;
    const fBrand = document.getElementById('brand').value;
    const fCategory = document.getElementById('category').value;
    const fType = document.getElementById('type').value;

    try {
        const res = await fetch ('http://localhost:3000/api/v1/fragrances' {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'fragranceName': fName,
                'fragranceBrand': fBrand,
                'fragranceCategory': fCategory,
                'fragranceType': fType
            });
        });
        const data = await res.json();
        location.reload();
    } catch(err) {
        console.log(err);
    }
}
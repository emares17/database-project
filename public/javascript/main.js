document.getElementById('submit').addEventListener('submit', addFragrance);

async function addFragrance(e) {
    

    const fName = document.getElementById('name').value;
    const fBrand = document.getElementById('brand').value;
    const fCategory = document.getElementById('category').value;
    const fType = document.getElementById('type').value;

    try {
        const res = await fetch ('http://localhost:3000/api/v1/fragrances', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name': fName,
                'brand': fBrand,
                'category': fCategory,
                'type': fType
            })
        }); 
        const data = await res.json();
        console.log(data)
        location.reload
    } catch(err) {
        console.log(err);
    }
}
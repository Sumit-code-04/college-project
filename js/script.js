
function getNutrition() {
    const foodName = document.getElementById('food-name').value;

    if (foodName === '') {
        alert("Please enter a food name");
        return;
    }

    fetch(`/getNutrition?food=${foodName}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('nutrition-result');
            if (data.error) {
                resultDiv.innerHTML = `<p>${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `
                  <h3><center>Nutrition Facts for ${data.name}</center></h3>
                    <p><li>Energy: ${data.Energy || 'N/A'} kcal</li></p>
                    <p><li>Protein: ${data.Protein || 'N/A'} g</li></p>
                    <p><li?Fat: ${data.Fat || 'N/A'} g</li></p>
                    <p><li>Carbohydrates: ${data.Carbos || 'N/A'} g</li></p>
                    <p><li>Minerals: ${data.Minerals || 'N/A'} g</li></p>
                    <p><li>Fiber: ${data.Fibre || 'N/A'} g</li></p>
                    <p><li>Calcium: ${data.Calcium || 'N/A'} mg</li></p>
                    <p><li>Phosphorous: ${data.Phosphorous || 'N/A'} mg</li></p>
                    <p><li>Iron: ${data.Iron || 'N/A'} mg</li></p>
                `;
            }
        })
        .catch(err => console.error(err));
}

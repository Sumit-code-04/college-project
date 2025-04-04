function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    
    if (weight > 0 && height > 0 && age > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        let message = `Your BMI is ${bmi}.`;
        let category = '';
        let encouragement = '';

        // Determine the BMI category
        if (bmi < 18.5) {
            category = 'Underweight';
            document.getElementById('bmiCategory').className = 'underweight';
            encouragement = "It looks like you're a bit underweight. Consider consulting with a healthcare professional to achieve a healthier balance.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Healthy';
            document.getElementById('bmiCategory').className = 'healthy';
            encouragement = "Great job! You are in the healthy range. Keep maintaining a balanced diet and regular exercise!";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            document.getElementById('bmiCategory').className = 'overweight';
            encouragement = "You're slightly above the healthy range. A few small changes in your routine can make a big difference!";
        } else {
            category = 'Obese';
            document.getElementById('bmiCategory').className = 'obese';
            encouragement = "It's time to focus on your health. Small, consistent steps towards a better lifestyle can help you get back on track!";
        }

       // result
        document.getElementById('bmiResult').innerHTML = message;
        document.getElementById('bmiCategory').innerHTML = `Category: ${category}`;
        document.getElementById('bmiMessage').innerHTML = encouragement;
    } else {
        document.getElementById('bmiResult').innerHTML = "Please enter valid values for weight, height, and age.";
        document.getElementById('bmiCategory').innerHTML = '';
        document.getElementById('bmiMessage').innerHTML = '';
    }
}

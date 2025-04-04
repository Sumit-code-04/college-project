function showPlan(days) {
    const planDetails = document.getElementById('plan-details');
    let planText = '';

    if (days === '7') {
        planText = `
            <h3>7 Days Weight Loss Plan</h3>
            <p><strong>Day 1-3:</strong> Focus on hydration and clean eating.</p>
            <ul>
                <li><strong>Breakfast:</strong> Oats with almond milk, chia seeds, and berries.</li>
                <li><strong>Lunch:</strong> Quinoa salad with cucumber, tomatoes, and feta cheese.</li>
                <li><strong>Dinner:</strong> Lentil soup with steamed broccoli and carrots.</li>
            </ul>
            <p><strong>Day 4-7:</strong> Continue with balanced meals and reduce carbs gradually.</p>
            <ul>
                <li><strong>Breakfast:</strong> Whole grain toast with avocado and a boiled egg.</li>
                <li><strong>Lunch:</strong> Brown rice with stir-fried tofu, spinach, and bell peppers.</li>
                <li><strong>Dinner:</strong> Paneer curry with brown rice and a fresh salad.</li>
            </ul>
            <p>Stay active with light exercises such as walking or yoga.</p>
        `;
    } else if (days === '30') {
        planText = `
            <h3>1 Month Weight Loss Plan</h3>
            <p>Gradually adjust your diet to include more whole foods and reduce processed foods.</p>
            <ul>
                <li><strong>Week 1-2:</strong> Focus on whole grains, plant-based proteins, and fresh vegetables.</li>
                <li><strong>Week 3-4:</strong> Introduce more high-fiber options like quinoa and millet, and practice portion control.</li>
            </ul>
            <strong><p>Recommended meals include:</p></strong>
            <ul>
                <li><strong>Breakfast:</strong> Greek yogurt with flaxseeds, nuts, and fruits.</li>
                <li><strong>Lunch:</strong> Grilled vegetable wrap with hummus and a side of fresh salad.</li>
                <li><strong>Dinner:</strong> Mixed vegetable stir-fry with tofu or paneer and a portion of brown rice.</li>
            </ul>
            <p>Stay consistent with moderate exercise like jogging, cycling, or swimming.</p>
        `;
    } else if (days === '90') {
        planText = `
            <h3>3 Months Weight Loss Plan</h3>
            <p>This plan focuses on building sustainable habits for long-term success.</p>
            <ul>
                <li><strong>Month 1: </strong>Begin with a focus on lean proteins, whole grains, and eliminating sugary foods.</li>
                <li><strong>Month 2: </strong>Increase your intake of leafy greens, plant-based proteins, and complex carbs like sweet potatoes.</li>
                <li><strong>Month 3: </strong>Refine your plan by introducing intermittent fasting and reducing portion sizes further.</li>
            </ul>
            <p>Recommended meals include:</p>
            <ul>
                <li><strong>Breakfast:</strong> Smoothie with almond milk, spinach, banana, and flaxseeds.</li>
                <li><strong>Lunch:</strong> Chickpea salad with cucumbers, cherry tomatoes, olive oil, and lemon dressing.</li>
                <li><strong>Dinner:</strong> Grilled tofu or paneer with a quinoa and roasted vegetable mix.</li>
            </ul>
            <p>Incorporate strength training along with cardio for improved weight loss results.</p>
        `;
    }

    planDetails.innerHTML = planText;
}


function calculateCalories() {
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;
    let calories = 0;

    if (activity === 'sedentary') {
        calories = weight * 25;
    } else if (activity === 'moderate') {
        calories = weight * 30;
    } else if (activity === 'active') {
        calories = weight * 35;
    }

    document.getElementById('calorie-result').innerHTML = `You should consume around ${calories} calories per day.`;
}

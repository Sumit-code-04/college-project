function showPlanDetails(planId) {
    const detailsSections = document.querySelectorAll('.details');
    detailsSections.forEach(section => {
        if (section.id === `details-${planId}`) {
            section.style.display = section.style.display === "block" ? "none" : "block";
        } else {
            section.style.display = "none"; 
        }
    });

    const details = document.getElementById(`details-${planId}`);
    if (details.innerHTML === "") {
        switch (planId) {
            case "weight-loss":
                details.innerHTML = `<link href="index.html">
                    <p><strong>➡️For Beginner:</strong>
                    <dt><b>-> Duration:</b>3-4 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> 20 min brisk walking + 15 min bodyweight exercises (squats, lunges, push-ups)</p>
                    <p><b>Day 2:</b> Active Rest (Stretching, yoga)</p>
                    <p><b>Day 3:</b> 20 min light jogging + 10 min abs (plank, bicycle crunches)</p>
                    <p><b>Day 4:</b> Rest</p>

                    <p><strong>➡️For Intermediate:</strong>
                    <dt><b>-> Duration:</b> 4-5 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> 30 min HIIT (burpees, mountain climbers, squats)</p>
                    <p><b>Day 2:</b> Full-body strength training (weights, resistance bands)</p>
                    <p><b>Day 3:</b> 30 min moderate-intensity cardio (cycling, swimming)</p>
                    <p><b>Day 4:</b> Rest or light stretching</p>
                    <p><b>Day 5:</b> 25 min HIIT(high intensity interval training) + Core</p>

                    <p><strong>➡️For Advanced:</strong>
                    <dt><b>-> Duration:</b> 5-6 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> 40 min HIIT(high intensity interval training) + Strength (barbell squats, kettlebell swings)</p>
                    <p><b>Day 2:</b> Strength Circuit (Deadlifts, pull-ups, overhead press)</p>
                    <p><b>Day 3:</b> Cardio (running intervals, cycling)</p>
                    <p><b>Day 4:</b> Rest or light activity (yoga)</p>
                    <p><b>Day 5:</b> HIIT(high intensity interval training) + Strength</p>
                    <p><b>Day 6:</b> Long endurance cardio (60 min run or swim)</p>
                    
                     <video controls>
                     <source src="for editing.mp4" type="video/mp4">
                     </video>
                `;
                break;
            case "muscle-gain":
                details.innerHTML = `
                    
                    <p><strong>➡️For Beginner:</strong>
                    <dt><b>-> Duration:</b>3-5 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Full-body (Push-ups, bodyweight squats, dumbbell rows)</p>
                    <p><b>Day 2:</b> Rest or light cardio</p>
                    <p><b>Day 3:</b> Lower Body (Squats, lunges, leg press)</p>
                    <p><b>Day 4:</b> Upper Body (Chest press, shoulder press)</p>
                    <p><b>Day 5:</b> Rest</p>

                    <p><strong>➡️For Intermediate:</strong>
                    <dt><b>-> Duration:</b> 4-5 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Chest and Triceps (Bench press, dumbbell flyes)</p>
                    <p><b>Day 2:</b> Back and Biceps (Pull-ups, barbell rows)</p>
                    <p><b>Day 3:</b> Rest or active recovery</p>
                    <p><b>Day 4:</b> Legs (Squats, lunges, deadlifts)</p>
                    <p><b>Day 5:</b> Shoulders and Abs (Shoulder press, plank, side plank)</p>

                    <p><strong>➡️For Advanced:</strong>
                    <dt><b>-> Duration:</b> 5-6 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Chest and Triceps (Heavy bench press, dips)</p>
                    <p><b>Day 2:</b> Back and Biceps (Heavy rows, chin-ups)</p>
                    <p><b>Day 3:</b> Legs (Heavy squats, deadlifts, leg press)</p>
                    <p><b>Day 4:</b> Shoulders and Abs (Arnold press, lateral raises)</p>
                    <p><b>Day 5:</b> Full-body (Deadlifts, squats, pull-ups)</p>
                    <p><b>Day 6:</b> Light cardio or active rest</p>

                    <video controls>
                    <source src="for editing.mp4" type="video/mp4">
                    </video>
                `;
                break;
            case "full-body":
                details.innerHTML = `
                     <p><strong>➡️For Beginner:</strong>
                    <dt><b>-> Duration:</b>2-3 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Full Body (Squats, lunges, push-ups)</p>
                    <p><b>Day 2:</b> Rest or light stretching</p>
                    <p><b>Day 3:</b> Lower Body (Glute bridges, bodyweight squats)</p>
                   

                    <p><strong>➡️For Intermediate:</strong>
                    <dt><b>-> Duration:</b> 3-4 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Upper Body and Core (Push-ups, dumbbell shoulder press, planks)</p>
                    <p><b>Day 2:</b> Lower Body (Resistance band squats, lunges, glute bridges)</p>
                    <p><b>Day 3:</b> Rest or yoga</p>
                    <p><b>Day 4:</b>  Full Body Circuit</p>
                    

                    <p><strong>➡️For Advanced:</strong>
                    <dt><b>-> Duration:</b> 4-5 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Upper Body (Push-ups, kettlebell swings, weighted lunges)</p>
                    <p><b>Day 2:</b> Lower Body (Squats, deadlifts, resistance band work)</p>
                    <p><b>Day 3:</b> Cardio (HIIT with bodyweight exercises)</p>
                    <p><b>Day 4:</b> Core (Weighted planks, Russian twists)</p>
                    <p><b>Day 5:</b> Rest</p>
                    
                    <video controls>
                    <source src="for editing.mp4" type="video/mp4">
                    </video>
                `;
                break;
            case "strenght-training":
                details.innerHTML = `
                     <p><strong>➡️For Beginner:</strong>
                    <dt><b>-> Duration:</b>3 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Full Body (Squats, push-ups, dumbbell rows)</p>
                    <p><b>Day 2:</b> Rest</p>
                    <p><b>Day 3:</b> Legs (Bodyweight lunges, squats)</p>
                    

                    <p><strong>➡️For Intermediate:</strong>
                    <dt><b>-> Duration:</b> 4-5 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Legs (Squats, leg press)</p>
                    <p><b>Day 2:</b> Chest (Bench press, dumbbell flyes)</p>
                    <p><b>Day 3:</b> Rest</p>
                    <p><b>Day 4:</b> Back (Pull-ups, rows)</p>
                    <p><b>Day 5:</b> Shoulders (Overhead press, lateral raises)</p>

                    <p><strong>➡️For Advanced:</strong>
                    <dt><b>-> Duration:</b> 5-6 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Squats and Deadlifts (Heavy squats, Romanian deadlifts)</p>
                    <p><b>Day 2:</b> Bench Press and Rows</p>
                    <p><b>Day 3:</b> Rest</p>
                    <p><b>Day 4:</b> Shoulder Press and Chin-ups</p>
                    <p><b>Day 5:</b> Deadlifts and Accessory Leg Work (Leg press, lunges)</p>
                    


                    <video controls>
                    <source src="for editing.mp4" type="video/mp4">
                    </video>
                `;
                break;
            case "cardio":
                details.innerHTML = `
                    <p><strong>➡️For Beginner:</strong>
                    <dt><b>-> Duration:</b>2-3 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> 20 min brisk walking or light cycling</p>
                    <p><b>Day 2:</b> Rest</p>
                    <p><b>Day 3:</b> 15 min jogging or light swim</p>
                    

                    <p><strong>➡️For Intermediate:</strong>
                    <dt><b>-> Duration:</b> 3-4 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> 30 min running or cycling</p>
                    <p><b>Day 2:</b> Rest or yoga</p>
                    <p><b>Day 3:</b> 20 min HIIT (running or cycling intervals)</p>
                    <p><b>Day 4:</b> 45 min steady-state cardio (swimming, cycling)</p>
                   

                    <p><strong>➡️For Advanced:</strong>
                    <dt><b>-> Duration:</b> 5-6 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> 60 min long-distance run or cycle</p>
                    <p><b>Day 2:</b> Rest or light activity (yoga)</p>
                    <p><b>Day 3:</b> 30 min HIIT or hill sprints</p>
                    <p><b>Day 4:</b> 60 min cardio (swimming, running)</p>


                    <video controls>
                    <source src="for editing.mp4" type="video/mp4">
                    </video>
                `;
                break;
            case "home-based":
                details.innerHTML = `
                    <p><strong>➡️For Beginner:</strong>
                    <dt><b>-> Duration:</b>2-3 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Bodyweight squats, push-ups, planks</p>
                    <p><b>Day 2:</b> Rest</p>
                    <p><b>Day 3:</b> Lunges, glute bridges, crunches</p>
                    
                    <p><strong>➡️For Intermediate:</strong>
                    <dt><b>-> Duration:</b> 3-4 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> Full Body (Push-ups, squats with resistance bands)</p>
                    <p><b>Day 2:</b> Rest or light stretching</p>
                    <p><b>Day 3:</b> Core and Lower Body (Plank, lunges with weights)</p>
                    <p><b>Day 4:</b> Upper Body (Dumbbell shoulder press, bicep curls)</p>
                   

                    <p><strong>➡️For Advanced:</strong>
                    <dt><b>-> Duration:</b> 4-5 days a week.</dt></p>
                    <dt><b>Plan:</b></dt>
                    <p><b>Day 1:</b> HIIT (burpees, jumping jacks, squats)</p>
                    <p><b>Day 2:</b> Strength Training (Dumbbell or kettlebell circuits)</p>
                    <p><b>Day 3:</b> Rest or light yoga</p>
                    <p><b>Day 4:</b> Full Body (Resistance bands, heavy dumbbell work)</p>
                   
    

                    <video controls>
                    <source src="for editing.mp4" type="video/mp4">
                    </video>
                `;
                break;
        }
    }
}

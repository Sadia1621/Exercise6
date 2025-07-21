
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing navigation...');
    
    const homeLink = document.getElementById('home-link');
    const portfolioLink = document.getElementById('portfolio-link');
    const triviaLink = document.getElementById('trivia-link');
    
    const homePage = document.getElementById('home-page');
    const portfolioPage = document.getElementById('portfolio-page');
    const triviaPage = document.getElementById('trivia-page');
    
    function showPage(pageToShow, activeLink) {
        console.log('Switching to page:', pageToShow.id);
        
        homePage.style.display = 'none';
        portfolioPage.style.display = 'none';
        triviaPage.style.display = 'none';
        
        homeLink.classList.remove('active');
        portfolioLink.classList.remove('active');
        triviaLink.classList.remove('active');
        
        pageToShow.style.display = 'block';
        activeLink.classList.add('active');
    }
    
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(homePage, homeLink);
    });
    
    portfolioLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(portfolioPage, portfolioLink);
    });
    
    triviaLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(triviaPage, triviaLink);
    });
    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon!`);
            clearForm();
        } else {
            alert('Please fill in all fields!');
        }
    });
});

function calculateCalories() {
    console.log('Calculate button clicked');
    
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    console.log('Input values:', { age, gender, height, weight, activity });
    
    if (!age || !gender || !height || !weight || !activity) {
        alert('Please fill in all fields!');
        return;
    }
    
    if (age < 1 || age > 120) {
        alert('Please enter a valid age between 1 and 120 years.');
        return;
    }
    
    if (height < 50 || height > 250) {
        alert('Please enter a valid height between 50 and 250 cm.');
        return;
    }
    
    if (weight < 20 || weight > 300) {
        alert('Please enter a valid weight between 20 and 300 kg.');
        return;
    }
    
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    console.log('BMR calculated:', bmr);
    
    const tdee = bmr * activity;
    
    const weightLoss = tdee - 500; 
    const weightGain = tdee + 500; 
    
    console.log('TDEE:', tdee, 'Weight loss:', weightLoss, 'Weight gain:', weightGain);
    
    const bmrElement = document.getElementById('bmr-value');
    const maintenanceElement = document.getElementById('maintenance-calories');
    const weightGoalsElement = document.getElementById('weight-goals');
    const descriptionElement = document.getElementById('calorie-description');
    const resultDiv = document.getElementById('calorie-result');
    
    if (!bmrElement || !maintenanceElement || !weightGoalsElement || !descriptionElement || !resultDiv) {
        console.error('Result elements not found');
        alert('Error: Could not find result display elements');
        return;
    }
    
    bmrElement.innerHTML = `<strong>Basal Metabolic Rate (BMR):</strong> ${Math.round(bmr)} calories/day`;
    maintenanceElement.innerHTML = `<strong>Maintenance Calories:</strong> ${Math.round(tdee)} calories/day`;
    weightGoalsElement.innerHTML = `
        <strong>Weight Loss:</strong> ${Math.round(weightLoss)} calories/day<br>
        <strong>Weight Gain:</strong> ${Math.round(weightGain)} calories/day
    `;
    
    let activityDescription;
    switch(activity.toString()) {
        case '1.2':
            activityDescription = 'You have a sedentary lifestyle.';
            break;
        case '1.375':
            activityDescription = 'You have a lightly active lifestyle.';
            break;
        case '1.55':
            activityDescription = 'You have a moderately active lifestyle.';
            break;
        case '1.725':
            activityDescription = 'You have a very active lifestyle.';
            break;
        case '1.9':
            activityDescription = 'You have an extremely active lifestyle.';
            break;
        default:
            activityDescription = '';
    }
    
    descriptionElement.innerHTML = `
        <strong>Note:</strong> ${activityDescription} These calculations are estimates based on standard formulas. 
        For personalized nutrition advice, consult with a healthcare professional or registered dietitian.
    `;
    
    console.log('Showing results...');
    resultDiv.classList.add('show');
}

function clearCalories() {
    console.log('Clear button clicked');
    
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('activity').value = '';
    
    const resultDiv = document.getElementById('calorie-result');
    if (resultDiv) {
        resultDiv.classList.remove('show');
    }
    
    console.log('Form cleared');
}

function clearForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.reset();
        console.log('Contact form cleared');
    }
}

window.addEventListener('load', function() {
    console.log('Window fully loaded');
    console.log('Available elements:', {
        'age': document.getElementById('age'),
        'gender': document.getElementById('gender'),
        'height': document.getElementById('height'),
        'weight': document.getElementById('weight'),
        'activity': document.getElementById('activity'),
        'calorie-result': document.getElementById('calorie-result'),
        'bmr-value': document.getElementById('bmr-value'),
        'maintenance-calories': document.getElementById('maintenance-calories'),
        'weight-goals': document.getElementById('weight-goals'),
        'calorie-description': document.getElementById('calorie-description')
    });
});

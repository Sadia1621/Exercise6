

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeBMICalculator();
    initializeContactForm();
});

// Navigation functionality
function initializeNavigation() {
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('home');
        setActiveLink('home-link');
    });

    document.getElementById('portfolio-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('portfolio');
        setActiveLink('portfolio-link');
    });

    document.getElementById('trivia-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('trivia');
        setActiveLink('trivia-link');
    });
}

function showPage(page) {
    // Hide all pages
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('portfolio-page').style.display = 'none';
    document.getElementById('trivia-page').style.display = 'none';
    
    // Show selected page
    document.getElementById(page + '-page').style.display = 'block';
}

function setActiveLink(activeId) {
    // Remove active class from all links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    document.getElementById(activeId).classList.add('active');
}

// BMI Calculator functionality
function initializeBMICalculator() {
    // Add event listeners for Enter key press on input fields
    document.getElementById('height').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateBMI();
        }
    });
    
    document.getElementById('weight').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateBMI();
        }
    });
}

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }
    
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Determine category
    let category, description, resultClass;
    
    if (bmi < 18.5) {
        category = 'Underweight';
        description = 'You may need to gain some weight. Consider consulting with a healthcare provider.';
        resultClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
        description = 'Great! You have a healthy weight. Keep up the good work!';
        resultClass = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        description = 'You may want to consider a healthy diet and exercise routine.';
        resultClass = 'overweight';
    } else {
        category = 'Obese';
        description = 'Consider consulting with a healthcare provider for guidance on healthy weight management.';
        resultClass = 'obese';
    }
    
    // Display results
    document.getElementById('bmi-value').textContent = `Your BMI is: ${bmi.toFixed(1)}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
    document.getElementById('bmi-description').textContent = description;
    
    const resultDiv = document.getElementById('bmi-result');
    resultDiv.className = `result show ${resultClass}`;
}

function clearBMI() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('bmi-result').className = 'result';
}

// Contact form functionality
function initializeContactForm() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        clearForm();
    });
}

function clearForm() {
    document.getElementById('contact-form').reset();
}

// Additional utility functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // This function can be used for future notifications
    console.log(`${type.toUpperCase()}: ${message}`);
}
// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Booking Modal Functions
function showBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBookingModal();
    }
}

// Handle booking form submission
function handleBooking(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    
    // Show success message
    alert('🎉 Booking Confirmed!\n\nThank you for choosing Washify. We will contact you shortly to confirm your pickup details.\n\nYour laundry is in good hands!');
    
    // Close modal and reset form
    closeBookingModal();
    event.target.reset();
    
    // In a real application, you would send this data to a server
    console.log('Booking submitted:', Object.fromEntries(formData));
}

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    // Show success message
    alert('✅ Message Sent!\n\nThank you for contacting us. We will get back to you within 24 hours.');
    
    // Reset form
    event.target.reset();
}

// Set minimum date for pickup to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    
    dateInputs.forEach(input => {
        input.setAttribute('min', today);
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.problem-card, .service-card, .feature-item, .testimonial-card, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Track order function (placeholder for future feature)
function trackOrder() {
    alert('Order tracking feature coming soon!\n\nYou will be able to track your laundry in real-time through our mobile app.');
}

// Newsletter subscription (placeholder)
function subscribeNewsletter(email) {
    if (email && email.includes('@')) {
        alert('✅ Subscribed!\n\nThank you for subscribing to Washify updates.');
        return true;
    }
    return false;
}

// Calculate price estimate
function calculatePrice(weight, serviceType) {
    const prices = {
        'wash-fold': 49,
        'wash-iron': 69,
        'dry-clean': 99
    };
    
    const basePrice = prices[serviceType] || 69;
    return weight * basePrice;
}

// Format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Validate phone number (Indian format)
function validatePhone(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Add to cart functionality (for future e-commerce features)
const cart = {
    items: [],
    
    add: function(item) {
        this.items.push(item);
        this.updateDisplay();
    },
    
    remove: function(index) {
        this.items.splice(index, 1);
        this.updateDisplay();
    },
    
    getTotal: function() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    },
    
    updateDisplay: function() {
        console.log('Cart updated:', this.items);
        // Update cart UI here
    }
};

// Referral code generator
function generateReferralCode(name) {
    const prefix = name.substring(0, 3).toUpperCase();
    const random = Math.floor(Math.random() * 10000);
    return `${prefix}${random}`;
}

// Apply discount code
function applyDiscount(code, amount) {
    const discounts = {
        'FIRST50': 0.5,
        'STUDENT20': 0.2,
        'WELCOME10': 0.1
    };
    
    const discount = discounts[code.toUpperCase()] || 0;
    return amount * (1 - discount);
}

// Check service availability by pincode
function checkAvailability(pincode) {
    // Placeholder - in real app, this would check against a database
    const availablePincodes = ['110001', '110002', '400001', '560001'];
    return availablePincodes.includes(pincode);
}

// Schedule pickup reminder
function scheduleReminder(date, time) {
    const reminderDate = new Date(date + ' ' + time);
    const now = new Date();
    const timeDiff = reminderDate - now;
    
    if (timeDiff > 0) {
        console.log(`Reminder scheduled for ${reminderDate}`);
        // In a real app, this would set up a notification
        return true;
    }
    return false;
}

// Rating system
function submitRating(orderId, rating, review) {
    console.log('Rating submitted:', { orderId, rating, review });
    alert('Thank you for your feedback! Your rating helps us improve our service.');
}

// Loyalty points calculator
function calculateLoyaltyPoints(orderAmount) {
    // 1 point per ₹10 spent
    return Math.floor(orderAmount / 10);
}

// Estimate delivery time
function estimateDelivery(serviceType, isExpress) {
    const baseTimes = {
        'wash-fold': 48,
        'wash-iron': 48,
        'dry-clean': 72
    };
    
    let hours = baseTimes[serviceType] || 48;
    
    if (isExpress) {
        hours = Math.floor(hours / 2);
    }
    
    return hours;
}

// Format delivery time
function formatDeliveryTime(hours) {
    if (hours < 24) {
        return `${hours} hours`;
    }
    const days = Math.floor(hours / 24);
    return `${days} ${days === 1 ? 'day' : 'days'}`;
}

// Console welcome message
console.log('%c🧺 Welcome to Washify! ', 'background: #4F46E5; color: white; font-size: 20px; padding: 10px;');
console.log('%cWash. Press. Done.', 'color: #06B6D4; font-size: 16px;');
console.log('Fresh Clothes, Zero Hassle 🚀');

/**
 * CenLa Innovations Website JavaScript
 * Created: May 28, 2025
 * 
 * This file contains all JavaScript functionality for the CenLa Innovations website.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    valid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (valid) {
                // In a real implementation, this would send the form data to a server
                // For now, we'll just show a success message
                const formContainer = contactForm.parentElement;
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success';
                successMessage.innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
                
                formContainer.innerHTML = '';
                formContainer.appendChild(successMessage);
            }
        });
    }
    
    // Newsletter form validation
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailPattern.test(emailInput.value)) {
                    // Success - in a real implementation, this would subscribe the user
                    emailInput.value = '';
                    alert('Thank you for subscribing to our newsletter!');
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please enter your email address.');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Initialize Google Maps for contact page
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // This would normally initialize a Google Map
        // Since we're just creating a placeholder, we'll add a message
        mapContainer.innerHTML = '<div class="map-placeholder"><p>Google Maps would be embedded here in production.</p><p>Showing service area around Ruby, Louisiana.</p></div>';
        mapContainer.style.backgroundColor = '#f5f5f7';
        mapContainer.style.display = 'flex';
        mapContainer.style.alignItems = 'center';
        mapContainer.style.justifyContent = 'center';
        mapContainer.style.textAlign = 'center';
        mapContainer.style.padding = '2rem';
    }
    
    // Testimonial rotation (for future implementation)
    // This is a placeholder for when real testimonials are added
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        // Future functionality would rotate through testimonials
        console.log('Testimonial section ready for future implementation');
    }
    
    // Blog search functionality (for future implementation)
    const blogSearchForm = document.getElementById('blogSearchForm');
    if (blogSearchForm) {
        blogSearchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = blogSearchForm.querySelector('input');
            if (searchInput && searchInput.value) {
                // In a real implementation, this would search blog posts
                alert('Search functionality will be implemented when blog content is added.');
            }
        });
    }
});

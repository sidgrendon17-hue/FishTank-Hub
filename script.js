// script.js

// Fish Compatibility Checking
function isFishCompatible(fish1, fish2) {
    const incompatiblePairs = [
        ['Goldfish', 'Betta'],
        ['Cichlid', 'Neon Tetra'],
        // Add more incompatible pairs as needed
    ];
    return !incompatiblePairs.some(pair => (pair[0] === fish1 && pair[1] === fish2) || (pair[0] === fish2 && pair[1] === fish1));
}

// Tank Capacity Calculation
function calculateTankCapacity(length, width, height) {
    return (length * width * height) / 1000; // Convert cubic cm to liters
}

// Fish Recommendations Based on Preferences
function recommendFish(preference) {
    const fishList = {
        beginners: ['Goldfish', 'Betta', 'Neon Tetra'],
        advanced: ['Cichlid', 'Discus', 'Angelfish'],
        // Add more categories and fish as needed
    };
    return fishList[preference] || [];
}

// Analytics Tracking for AdSense Optimization
function trackAdSense(adType) {
    // Example function to send tracking data to analytics
    console.log(`Tracking AdSense for: ${adType}`);
    // Implement actual tracking code here
}
// Car database with models and pricing data
const carDatabase = {
    toyota: {
        name: "Toyota",
        models: {
            camry: {
                name: "Camry",
                usa: { base: 26520, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 105000, high: 125000 }
            },
            corolla: {
                name: "Corolla",
                usa: { base: 21550, average: 25000, high: 30000 },
                ksa: { base: 70000, average: 85000, high: 100000 }
            },
            rav4: {
                name: "RAV4",
                usa: { base: 28010, average: 35000, high: 42000 },
                ksa: { base: 90000, average: 110000, high: 130000 }
            },
            highlander: {
                name: "Highlander",
                usa: { base: 36620, average: 45000, high: 55000 },
                ksa: { base: 120000, average: 145000, high: 170000 }
            },
            tacoma: {
                name: "Tacoma",
                usa: { base: 27250, average: 35000, high: 45000 },
                ksa: { base: 90000, average: 110000, high: 140000 }
            }
        }
    },
    honda: {
        name: "Honda",
        models: {
            accord: {
                name: "Accord",
                usa: { base: 27295, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 100000, high: 120000 }
            },
            civic: {
                name: "Civic",
                usa: { base: 23500, average: 27000, high: 32000 },
                ksa: { base: 75000, average: 85000, high: 100000 }
            },
            crv: {
                name: "CR-V",
                usa: { base: 26525, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 100000, high: 120000 }
            },
            pilot: {
                name: "Pilot",
                usa: { base: 37440, average: 45000, high: 55000 },
                ksa: { base: 120000, average: 140000, high: 170000 }
            }
        }
    },
    ford: {
        name: "Ford",
        models: {
            f150: {
                name: "F-150",
                usa: { base: 34445, average: 45000, high: 65000 },
                ksa: { base: 110000, average: 140000, high: 200000 }
            },
            mustang: {
                name: "Mustang",
                usa: { base: 27870, average: 35000, high: 45000 },
                ksa: { base: 90000, average: 110000, high: 140000 }
            },
            explorer: {
                name: "Explorer",
                usa: { base: 36760, average: 45000, high: 55000 },
                ksa: { base: 120000, average: 140000, high: 170000 }
            },
            escape: {
                name: "Escape",
                usa: { base: 27500, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 100000, high: 120000 }
            }
        }
    },
    chevrolet: {
        name: "Chevrolet",
        models: {
            silverado: {
                name: "Silverado",
                usa: { base: 36500, average: 45000, high: 65000 },
                ksa: { base: 120000, average: 140000, high: 200000 }
            },
            camaro: {
                name: "Camaro",
                usa: { base: 26100, average: 32000, high: 40000 },
                ksa: { base: 85000, average: 100000, high: 125000 }
            },
            equinox: {
                name: "Equinox",
                usa: { base: 26520, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 100000, high: 120000 }
            },
            malibu: {
                name: "Malibu",
                usa: { base: 25000, average: 30000, high: 35000 },
                ksa: { base: 80000, average: 95000, high: 110000 }
            }
        }
    },
    bmw: {
        name: "BMW",
        models: {
            "3series": {
                name: "3 Series",
                usa: { base: 43450, average: 55000, high: 70000 },
                ksa: { base: 140000, average: 170000, high: 220000 }
            },
            "5series": {
                name: "5 Series",
                usa: { base: 55000, average: 70000, high: 90000 },
                ksa: { base: 180000, average: 220000, high: 280000 }
            },
            x3: {
                name: "X3",
                usa: { base: 47000, average: 60000, high: 75000 },
                ksa: { base: 150000, average: 190000, high: 240000 }
            },
            x5: {
                name: "X5",
                usa: { base: 65000, average: 85000, high: 110000 },
                ksa: { base: 210000, average: 270000, high: 350000 }
            }
        }
    },
    mercedes: {
        name: "Mercedes-Benz",
        models: {
            cclass: {
                name: "C-Class",
                usa: { base: 45000, average: 58000, high: 75000 },
                ksa: { base: 150000, average: 190000, high: 240000 }
            },
            eclass: {
                name: "E-Class",
                usa: { base: 58000, average: 75000, high: 95000 },
                ksa: { base: 190000, average: 240000, high: 300000 }
            },
            gle: {
                name: "GLE",
                usa: { base: 58000, average: 75000, high: 100000 },
                ksa: { base: 190000, average: 240000, high: 320000 }
            },
            glc: {
                name: "GLC",
                usa: { base: 45000, average: 58000, high: 75000 },
                ksa: { base: 150000, average: 190000, high: 240000 }
            }
        }
    },
    audi: {
        name: "Audi",
        models: {
            a4: {
                name: "A4",
                usa: { base: 40000, average: 52000, high: 65000 },
                ksa: { base: 130000, average: 170000, high: 210000 }
            },
            a6: {
                name: "A6",
                usa: { base: 55000, average: 70000, high: 90000 },
                ksa: { base: 180000, average: 220000, high: 280000 }
            },
            q5: {
                name: "Q5",
                usa: { base: 45000, average: 58000, high: 75000 },
                ksa: { base: 150000, average: 190000, high: 240000 }
            },
            q7: {
                name: "Q7",
                usa: { base: 60000, average: 78000, high: 100000 },
                ksa: { base: 200000, average: 250000, high: 320000 }
            }
        }
    },
    lexus: {
        name: "Lexus",
        models: {
            es: {
                name: "ES",
                usa: { base: 42000, average: 55000, high: 70000 },
                ksa: { base: 140000, average: 180000, high: 220000 }
            },
            rx: {
                name: "RX",
                usa: { base: 48000, average: 62000, high: 80000 },
                ksa: { base: 160000, average: 200000, high: 250000 }
            },
            nx: {
                name: "NX",
                usa: { base: 38000, average: 50000, high: 65000 },
                ksa: { base: 130000, average: 160000, high: 210000 }
            },
            ls: {
                name: "LS",
                usa: { base: 78000, average: 100000, high: 130000 },
                ksa: { base: 260000, average: 320000, high: 410000 }
            }
        }
    },
    nissan: {
        name: "Nissan",
        models: {
            altima: {
                name: "Altima",
                usa: { base: 25000, average: 30000, high: 35000 },
                ksa: { base: 80000, average: 95000, high: 110000 }
            },
            rogue: {
                name: "Rogue",
                usa: { base: 27000, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 100000, high: 120000 }
            },
            sentra: {
                name: "Sentra",
                usa: { base: 20000, average: 24000, high: 28000 },
                ksa: { base: 65000, average: 75000, high: 90000 }
            },
            pathfinder: {
                name: "Pathfinder",
                usa: { base: 35000, average: 42000, high: 50000 },
                ksa: { base: 110000, average: 130000, high: 160000 }
            }
        }
    },
    hyundai: {
        name: "Hyundai",
        models: {
            sonata: {
                name: "Sonata",
                usa: { base: 24000, average: 28000, high: 33000 },
                ksa: { base: 75000, average: 90000, high: 105000 }
            },
            tucson: {
                name: "Tucson",
                usa: { base: 26000, average: 31000, high: 37000 },
                ksa: { base: 80000, average: 95000, high: 115000 }
            },
            elantra: {
                name: "Elantra",
                usa: { base: 20000, average: 24000, high: 28000 },
                ksa: { base: 65000, average: 75000, high: 90000 }
            },
            santa_fe: {
                name: "Santa Fe",
                usa: { base: 28000, average: 34000, high: 40000 },
                ksa: { base: 90000, average: 105000, high: 125000 }
            }
        }
    },
    kia: {
        name: "Kia",
        models: {
            k5: {
                name: "K5",
                usa: { base: 25000, average: 29000, high: 34000 },
                ksa: { base: 80000, average: 90000, high: 110000 }
            },
            sportage: {
                name: "Sportage",
                usa: { base: 26000, average: 31000, high: 37000 },
                ksa: { base: 80000, average: 95000, high: 115000 }
            },
            forte: {
                name: "Forte",
                usa: { base: 19000, average: 22000, high: 26000 },
                ksa: { base: 60000, average: 70000, high: 80000 }
            },
            telluride: {
                name: "Telluride",
                usa: { base: 36000, average: 43000, high: 50000 },
                ksa: { base: 115000, average: 135000, high: 160000 }
            }
        }
    },
    volkswagen: {
        name: "Volkswagen",
        models: {
            jetta: {
                name: "Jetta",
                usa: { base: 20000, average: 24000, high: 28000 },
                ksa: { base: 65000, average: 75000, high: 90000 }
            },
            passat: {
                name: "Passat",
                usa: { base: 25000, average: 30000, high: 35000 },
                ksa: { base: 80000, average: 95000, high: 110000 }
            },
            tiguan: {
                name: "Tiguan",
                usa: { base: 27000, average: 32000, high: 38000 },
                ksa: { base: 85000, average: 100000, high: 120000 }
            },
            atlas: {
                name: "Atlas",
                usa: { base: 35000, average: 42000, high: 50000 },
                ksa: { base: 110000, average: 130000, high: 160000 }
            }
        }
    },
    mazda: {
        name: "Mazda",
        models: {
            mazda3: {
                name: "Mazda3",
                usa: { base: 22000, average: 26000, high: 30000 },
                ksa: { base: 70000, average: 80000, high: 95000 }
            },
            cx5: {
                name: "CX-5",
                usa: { base: 26000, average: 31000, high: 37000 },
                ksa: { base: 80000, average: 95000, high: 115000 }
            },
            mazda6: {
                name: "Mazda6",
                usa: { base: 25000, average: 30000, high: 35000 },
                ksa: { base: 80000, average: 95000, high: 110000 }
            },
            cx9: {
                name: "CX-9",
                usa: { base: 35000, average: 42000, high: 50000 },
                ksa: { base: 110000, average: 130000, high: 160000 }
            }
        }
    },
    subaru: {
        name: "Subaru",
        models: {
            impreza: {
                name: "Impreza",
                usa: { base: 19000, average: 23000, high: 27000 },
                ksa: { base: 60000, average: 70000, high: 85000 }
            },
            outback: {
                name: "Outback",
                usa: { base: 28000, average: 34000, high: 40000 },
                ksa: { base: 90000, average: 105000, high: 125000 }
            },
            forester: {
                name: "Forester",
                usa: { base: 26000, average: 31000, high: 37000 },
                ksa: { base: 80000, average: 95000, high: 115000 }
            },
            crosstrek: {
                name: "Crosstrek",
                usa: { base: 23000, average: 27000, high: 31000 },
                ksa: { base: 75000, average: 85000, high: 100000 }
            }
        }
    }
};

// DOM elements
const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const yearSelect = document.getElementById('year');
const searchBtn = document.getElementById('searchBtn');
const resultsSection = document.getElementById('resultsSection');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateYears();
    setupEventListeners();
});

// Populate year dropdown (current year to 2015)
function populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2015; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Setup event listeners
function setupEventListeners() {
    brandSelect.addEventListener('change', handleBrandChange);
    searchBtn.addEventListener('click', handleSearch);
}

// Handle brand selection
function handleBrandChange() {
    const selectedBrand = brandSelect.value;
    modelSelect.innerHTML = '<option value="">Select Model</option>';
    modelSelect.disabled = true;
    
    if (selectedBrand && carDatabase[selectedBrand]) {
        const models = carDatabase[selectedBrand].models;
        Object.keys(models).forEach(modelKey => {
            const option = document.createElement('option');
            option.value = modelKey;
            option.textContent = models[modelKey].name;
            modelSelect.appendChild(option);
        });
        modelSelect.disabled = false;
    }
}

// Handle search button click
function handleSearch() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const year = yearSelect.value;
    
    if (!brand || !model || !year) {
        alert('Please select brand, model, and year');
        return;
    }
    
    // Show loading state
    searchBtn.innerHTML = '<span class="loading"></span> Searching...';
    searchBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        displayResults(brand, model, year);
        searchBtn.innerHTML = '<i class="fas fa-search"></i> Compare Prices';
        searchBtn.disabled = false;
    }, 1000);
}

// Display comparison results
function displayResults(brand, model, year) {
    const carData = carDatabase[brand].models[model];
    const brandName = carDatabase[brand].name;
    const modelName = carData.name;
    
    // Update selected car info
    document.getElementById('selectedCarInfo').textContent = `${year} ${brandName} ${modelName}`;
    
    // Update USA prices
    document.getElementById('usaBasePrice').textContent = formatUSD(carData.usa.base);
    document.getElementById('usaAvgPrice').textContent = formatUSD(carData.usa.average);
    document.getElementById('usaHighPrice').textContent = formatUSD(carData.usa.high);
    
    // Update KSA prices
    document.getElementById('ksaBasePrice').textContent = formatSAR(carData.ksa.base);
    document.getElementById('ksaAvgPrice').textContent = formatSAR(carData.ksa.average);
    document.getElementById('ksaHighPrice').textContent = formatSAR(carData.ksa.high);
    
    // Calculate and display price differences
    const usaAvg = carData.usa.average;
    const ksaAvg = carData.ksa.average;
    const priceDiff = ksaAvg - (usaAvg * 3.75); // Convert USD to SAR
    const percentageDiff = ((priceDiff / (usaAvg * 3.75)) * 100).toFixed(1);
    
    document.getElementById('priceDifference').textContent = formatSAR(Math.abs(priceDiff));
    document.getElementById('percentageDifference').textContent = `${percentageDiff}% ${priceDiff > 0 ? 'higher' : 'lower'} in KSA`;
    
    // Show results section with animation
    resultsSection.style.display = 'block';
    resultsSection.classList.add('fade-in');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Format USD currency
function formatUSD(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format SAR currency
function formatSAR(amount) {
    return new Intl.NumberFormat('ar-SA', {
        style: 'currency',
        currency: 'SAR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to price cards
    const priceCards = document.querySelectorAll('.price-card');
    priceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && document.activeElement === searchBtn) {
            handleSearch();
        }
    });
});

// Add some additional utility functions
function calculateTotalCost(basePrice, country) {
    const exchangeRate = 3.75; // USD to SAR
    const importDuty = country === 'KSA' ? 0.05 : 0; // 5% import duty for KSA
    const vat = country === 'KSA' ? 0.15 : 0.08; // 15% VAT for KSA, 8% for USA
    
    let total = basePrice;
    if (country === 'KSA') {
        total = basePrice * exchangeRate;
    }
    
    total += total * importDuty;
    total += total * vat;
    
    return total;
}

// Export functions for potential future use
window.carPriceComparison = {
    carDatabase,
    formatUSD,
    formatSAR,
    calculateTotalCost
}; 
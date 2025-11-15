// Menu data - stored in localStorage
let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
    // ENTRADAS
    {
        id: 1,
        name: "Tartare de Salmão",
        description: "Salmão fresco em cubos, abacate, limão siciliano e caviar nacional",
        category: "appetizers",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 2,
        name: "Carpaccio de Polvo",
        description: "Polvo grelhado em fatias finas, azeite trufado e rúcula selvagem",
        category: "appetizers",
        price: 22.90,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 3,
        name: "Bruschetta de Burrata",
        description: "Pão artesanal, burrata cremosa, tomates confit e manjericão",
        category: "appetizers",
        price: 16.50,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 4,
        name: "Foie Gras com Compota de Figo",
        description: "Foie gras de pato, compota de figo e brioche tostado",
        category: "appetizers",
        price: 28.90,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        available: true
    },

    // PRATOS PRINCIPAIS - CARNE
    {
        id: 5,
        name: "Filé de Cordeiro com Crosta de Ervas",
        description: "Filé de cordeiro com crosta de ervas mediterrâneas, purê de mandioquinha",
        category: "mains-meat",
        price: 38.90,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 6,
        name: "Picanha Prime Grelhada",
        description: "Picanha nobre grelhada, farofa de castanha e vinagrete especial",
        category: "mains-meat",
        price: 42.50,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 7,
        name: "Costela de Porco Confitada",
        description: "Costela de porco confitada por 12 horas, molho barbecue artesanal",
        category: "mains-meat",
        price: 35.90,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 8,
        name: "Wellington de Vitela",
        description: "Filé de vitela envolvido em massa folhada com cogumelos e foie gras",
        category: "mains-meat",
        price: 48.90,
        image: "https://images.unsplash.com/photo-1551218370-dea8c3d6b7dd?w=400&h=300&fit=crop",
        available: true
    },

    // PRATOS PRINCIPAIS - PEIXE
    {
        id: 9,
        name: "Moqueca de Robalo",
        description: "Robalo fresco, leite de coco, dendê, pimentões e coentro",
        category: "mains-fish",
        price: 36.90,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 10,
        name: "Salmão Grelhado com Risotto",
        description: "Salmão grelhado, risotto de limão siciliano e aspargos verdes",
        category: "mains-fish",
        price: 32.90,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 11,
        name: "Linguado com Molho de Camarão",
        description: "Linguado fresco grelhado com molho cremoso de camarão",
        category: "mains-fish",
        price: 34.50,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 12,
        name: "Bacalhau à Lagareiro",
        description: "Bacalhau do Porto confitado, batatas a murro e azeite virgem",
        category: "mains-fish",
        price: 29.90,
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop",
        available: true
    },

    // SOBREMESAS
    {
        id: 13,
        name: "Petit Gâteau de Chocolate Belga",
        description: "Bolo quente de chocolate belga com sorvete de baunilha artesanal",
        category: "desserts",
        price: 14.90,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 14,
        name: "Pavlova de Frutas Tropicais",
        description: "Merengue crocante, chantilly e frutas tropicais da estação",
        category: "desserts",
        price: 12.90,
        image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 15,
        name: "Tiramisù Clássico",
        description: "Sobremesa italiana com café, mascarpone e cacau em pó",
        category: "desserts",
        price: 11.50,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 16,
        name: "Crème Brûlée de Baunilha",
        description: "Creme de baunilha Madagascar com açúcar caramelizado",
        category: "desserts",
        price: 13.90,
        image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop",
        available: true
    },

    // BEBIDAS
    {
        id: 17,
        name: "Champagne Dom Pérignon",
        description: "Champagne francês premium, bolhas finas e sabor complexo",
        category: "drinks",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 18,
        name: "Vinho Tinto Reserva",
        description: "Vinho tinto português, envelhecido em barrica de carvalho",
        category: "drinks",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 19,
        name: "Gin Tónico Premium",
        description: "Gin artesanal com tónica e especiarias selecionadas",
        category: "drinks",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
        available: true
    },
    {
        id: 20,
        name: "Cocktail da Casa",
        description: "Bebida especial do chef com frutas frescas e licores premium",
        category: "drinks",
        price: 15.90,
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop",
        available: true
    }
];

let currentEditId = null;

// Initialize based on page
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling for hero scroll indicator
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('.search-section').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Initialize based on page
    if (document.getElementById('menuContainer')) {
        // Public menu page
        displayMenuItems();
        setupSearchAndFilter();
        setupScrollAnimations();
    } else if (document.getElementById('menuForm')) {
        // Admin page
        displayTableItems();
        setupFormHandlers();
    }
});

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.menu-card, .search-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Display menu items on public page
function displayMenuItems() {
    const container = document.getElementById('menuContainer');
    const emptyState = document.getElementById('emptyState');
    
    let itemsToDisplay = menuItems;
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || '';

    if (searchTerm) {
        itemsToDisplay = itemsToDisplay.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }

    if (category) {
        itemsToDisplay = itemsToDisplay.filter(item => item.category === category);
    }

    // Sort items by category in menu order when no specific category is selected
    if (!category) {
        const categoryOrder = ['appetizers', 'mains-meat', 'mains-fish', 'desserts', 'drinks'];
        itemsToDisplay.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a.category);
            const indexB = categoryOrder.indexOf(b.category);
            return indexA - indexB;
        });
    }

    // Add fade out effect
    container.style.opacity = '0.5';
    container.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        container.innerHTML = '';

        if (itemsToDisplay.length === 0) {
            emptyState.style.display = 'block';
            container.style.opacity = '1';
            return;
        } else {
            emptyState.style.display = 'none';
        }

        // Category translation
        const categoryTranslations = {
            'appetizers': 'Entradas',
            'mains-meat': 'Pratos Principais - Carne',
            'mains-fish': 'Pratos Principais - Peixe',
            'desserts': 'Sobremesas',
            'drinks': 'Bebidas'
        };

        // Group items by category for better organization when no filter is applied
        if (!category && !searchTerm) {
            displayMenuByCategories(itemsToDisplay, categoryTranslations, container);
        } else {
            displayMenuItems_Simple(itemsToDisplay, categoryTranslations, container);
        }

        container.style.opacity = '1';
    }, 150);
}

// Display items grouped by categories with section headers
function displayMenuByCategories(items, categoryTranslations, container) {
    const categoryOrder = ['appetizers', 'mains-meat', 'mains-fish', 'desserts', 'drinks'];
    let animationDelay = 0;

    categoryOrder.forEach(categoryKey => {
        const categoryItems = items.filter(item => item.category === categoryKey);
        if (categoryItems.length === 0) return;

        // Create category header
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'col-12 mb-3';
        categoryHeader.style.opacity = '0';
        categoryHeader.style.transform = 'translateY(20px)';
        categoryHeader.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        categoryHeader.innerHTML = `
            <div class="category-header">
                <h3 class="category-title">${categoryTranslations[categoryKey]}</h3>
                <div class="category-divider"></div>
            </div>
        `;
        
        container.appendChild(categoryHeader);

        // Animate header
        setTimeout(() => {
            categoryHeader.style.opacity = '1';
            categoryHeader.style.transform = 'translateY(0)';
        }, animationDelay * 50);
        animationDelay++;

        // Add items for this category
        categoryItems.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-sm-6 col-lg-4';
            col.style.opacity = '0';
            col.style.transform = 'translateY(20px)';
            col.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            const unavailableClass = !item.available ? 'unavailable' : '';
            
            col.innerHTML = `
                <div class="menu-card ${unavailableClass} hover-lift">
                    <img src="${item.image}" alt="${item.name}" class="card-img-top" loading="lazy">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <h5 class="card-title">${item.name}</h5>
                                <span class="badge-category">${categoryTranslations[item.category]}</span>
                            </div>
                        </div>
                        <p class="card-text">${item.description}</p>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="menu-price">${item.price.toFixed(2)} €</span>
                            ${!item.available ? '<span class="badge-unavailable">Indisponível</span>' : ''}
                        </div>
                    </div>
                </div>
            `;
            
            container.appendChild(col);

            // Animate cards in with staggered delay
            setTimeout(() => {
                col.style.opacity = '1';
                col.style.transform = 'translateY(0)';
            }, animationDelay * 50);
            animationDelay++;
        });
    });
}

// Display items in simple grid (for search/filter results)
function displayMenuItems_Simple(items, categoryTranslations, container) {
    items.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-4';
        col.style.opacity = '0';
        col.style.transform = 'translateY(20px)';
        col.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const unavailableClass = !item.available ? 'unavailable' : '';
        const translatedCategory = categoryTranslations[item.category] || item.category;
        
        col.innerHTML = `
            <div class="menu-card ${unavailableClass} hover-lift">
                <img src="${item.image}" alt="${item.name}" class="card-img-top" loading="lazy">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h5 class="card-title">${item.name}</h5>
                            <span class="badge-category">${translatedCategory}</span>
                        </div>
                    </div>
                    <p class="card-text">${item.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="menu-price">${item.price.toFixed(2)} €</span>
                        ${!item.available ? '<span class="badge-unavailable">Indisponível</span>' : ''}
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);

        // Animate cards in with staggered delay
        setTimeout(() => {
            col.style.opacity = '1';
            col.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Setup search and filter
function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    if (searchInput) {
        searchInput.addEventListener('input', displayMenuItems);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener('change', displayMenuItems);
    }
}

// Display items in admin table
function displayTableItems() {
    const tableBody = document.getElementById('tableBody');
    const emptyTable = document.getElementById('emptyTable');

    tableBody.innerHTML = '';

    if (menuItems.length === 0) {
        emptyTable.style.display = 'block';
        return;
    } else {
        emptyTable.style.display = 'none';
    }

    // Category translation
    const categoryTranslations = {
        'appetizers': 'Entradas',
        'mains-meat': 'Pratos Principais - Carne',
        'mains-fish': 'Pratos Principais - Peixe',
        'desserts': 'Sobremesas',
        'drinks': 'Bebidas'
    };

    menuItems.forEach((item, index) => {
        const row = document.createElement('tr');
        row.style.opacity = '0';
        row.style.transform = 'translateX(-20px)';
        row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        const statusBadge = item.available 
            ? '<span class="badge badge-available"><i class="fas fa-check me-1"></i>Disponível</span>'
            : '<span class="badge badge-unavailable"><i class="fas fa-times me-1"></i>Indisponível</span>';

        const translatedCategory = categoryTranslations[item.category] || item.category;

        row.innerHTML = `
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 0.5rem; margin-right: 0.8rem;">
                    <strong>${item.name}</strong>
                </div>
            </td>
            <td><span class="badge-category">${translatedCategory}</span></td>
            <td><strong>${item.price.toFixed(2)} €</strong></td>
            <td>${statusBadge}</td>
            <td>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-edit" onclick="editItem(${item.id})">
                        <i class="fas fa-edit me-1"></i>Editar
                    </button>
                    <button class="btn btn-sm btn-delete" onclick="deleteItem(${item.id})">
                        <i class="fas fa-trash me-1"></i>Excluir
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);

        // Animate rows in with staggered delay
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, index * 50);
    });
}

// Setup form handlers
function setupFormHandlers() {
    const form = document.getElementById('menuForm');
    const resetBtn = document.getElementById('resetBtn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        saveItem();
    });

    resetBtn.addEventListener('click', function () {
        resetForm();
    });
}

// Save item
function saveItem() {
    const name = document.getElementById('itemName').value.trim();
    const description = document.getElementById('itemDescription').value.trim();
    const category = document.getElementById('itemCategory').value;
    const price = parseFloat(document.getElementById('itemPrice').value);
    const image = document.getElementById('itemImage').value.trim() || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop';
    const available = document.getElementById('itemAvailable').checked;

    if (!name || !description || !category || !price) {
        showNotification('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }

    if (price <= 0) {
        showNotification('O preço deve ser maior que zero', 'error');
        return;
    }

    const isEditing = currentEditId !== null;

    if (isEditing) {
        // Update existing item
        const item = menuItems.find(i => i.id === currentEditId);
        if (item) {
            item.name = name;
            item.description = description;
            item.category = category;
            item.price = price;
            item.image = image;
            item.available = available;
        }
        currentEditId = null;
    } else {
        // Add new item
        const newItem = {
            id: Math.max(...menuItems.map(i => i.id), 0) + 1,
            name,
            description,
            category,
            price,
            image,
            available
        };
        menuItems.push(newItem);
    }

    saveToLocalStorage();
    displayTableItems();
    resetForm();
    showNotification(
        isEditing ? 'Item atualizado com sucesso!' : 'Item adicionado com sucesso!', 
        'success'
    );
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}

// Edit item
function editItem(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    document.getElementById('itemName').value = item.name;
    document.getElementById('itemDescription').value = item.description;
    document.getElementById('itemCategory').value = item.category;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('itemImage').value = item.image;
    document.getElementById('itemAvailable').checked = item.available;

    currentEditId = id;
    document.getElementById('itemName').focus();
}

// Delete item
function deleteItem(id) {
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    document.getElementById('confirmDelete').onclick = function () {
        menuItems = menuItems.filter(i => i.id !== id);
        saveToLocalStorage();
        displayTableItems();
        deleteModal.hide();
    };
    deleteModal.show();
}

// Reset form
function resetForm() {
    document.getElementById('menuForm').reset();
    currentEditId = null;
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
}

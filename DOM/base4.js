        const productData = {
            fish: { emoji: '🐟', name: 'Fish', type: 'fish' },
            apple: { emoji: '🍎', name: 'Apple', type: 'apple' },
            eggs: { emoji: '🥚', name: 'Eggs', type: 'eggs' }
        };

        const initialProducts = [
            { emoji: '🫑', name: 'Pepper', type: 'vegetable' },
            { emoji: '🍎', name: 'Apple', type: 'apple' },
            { emoji: '🧀', name: 'Cheese', type: 'dairy' },
            { emoji: '🌽', name: 'Corn', type: 'vegetable' },
            { emoji: '🍄', name: 'Mushrooms', type: 'fungi' },
            { emoji: '🧄', name: 'Garlic', type: 'vegetable' },
            { emoji: '🥩', name: 'Beef', type: 'meat' },
            { emoji: '🐟', name: 'Fish', type: 'fish' },
            { emoji: '🥚', name: 'Eggs', type: 'eggs' },
            { emoji: '🌿', name: 'Coriander', type: 'herb' }
        ];

        let products = [];

        // ---------- DOM елементи ----------
        const grid = document.getElementById('productGrid');
        const info = document.getElementById('info');
        const clearBtn = document.getElementById('clearBtn');

        function renderProducts() {
            // Очищаємо сітку
            grid.innerHTML = '';

            if (products.length === 0) {
                info.textContent = '🧺 Холодильник порожній. Додайте продукти!';
                return;
            }

            info.textContent = `📦 У холодильнику ${products.length} продуктів`;

            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';

                card.innerHTML = `
                    <span class="emoji">${product.emoji}</span>
                    <div class="name">${product.name}</div>
                    <div class="type">${product.type}</div>
                `;

                grid.appendChild(card);
            });
        }

        function addProduct(type) {
            const data = productData[type];
            if (!data) return;

            const exists = products.some(p => p.name.toLowerCase() === data.name.toLowerCase());
            if (exists) {
                info.textContent = `⚠️ ${data.name} вже є в холодильнику!`;
                return;
            }

            products.push({ ...data });
            renderProducts();
        }

        function clearProducts() {
            products = [];
            renderProducts();
        }

        products = [...initialProducts];
        renderProducts();

        document.querySelectorAll('.btn-panel button[data-type]').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-type');
                addProduct(type);
            });
        });

        clearBtn.addEventListener('click', clearProducts);

        console.log('✅ Сторінка "Мій холодильник" завантажена!');
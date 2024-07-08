        // JavaScript để xử lý tìm kiếm và hiển thị thông tin Pokemon
        const searchInput = document.getElementById('searchInput');
        const nameElement = document.getElementById('name');
        const typeElement = document.getElementById('type');
        const heightElement = document.getElementById('height');
        const weightElement = document.getElementById('weight');
        const bioElement = document.getElementById('bio');
        const imageElement = document.getElementById('pokemonImage');

        // Xử lý sự kiện khi người dùng nhập tên Pokemon
        searchInput.addEventListener('input', async () => {
            const searchTerm = searchInput.value.toLowerCase();
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
                if (response.ok) {
                    const data = await response.json();
                    nameElement.textContent = data.name;
                    typeElement.textContent = data.types.map(type => type.type.name).join(', ');
                    heightElement.textContent = `${data.height / 10} m`;
                    weightElement.textContent = `${data.weight / 10} kg`;
                    bioElement.textContent = 'Fetching bio...'; // You can fetch more details from another API endpoint
                    imageElement.src = data.sprites.front_default;
                } else {
                    nameElement.textContent = 'Không tìm thấy Pokemon';
                    typeElement.textContent = '';
                    heightElement.textContent = '';
                    weightElement.textContent = '';
                    bioElement.textContent = '';
                    imageElement.src = ''; // Xóa ảnh
                }
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        });
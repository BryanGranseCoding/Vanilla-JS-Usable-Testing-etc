function performSearch() {
            secondarySearch.value = mainSearch.value;
            mainSearch.value = '';
            updateSearchResults();
        }

        searchButton.addEventListener('click', performSearch);

        mainSearch.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        function updateSearchResults() {
            const searchQuery = secondarySearch.value;
            searchResultsList.innerHTML = '';
            for (let i = 1; i <= 10; i++) {
                const listItem = document.createElement('li');
                listItem.className = 'search-result';
                listItem.innerHTML = `
                    <img src="/placeholder.svg?height=120&width=120" alt="Result ${i}" class="search-result-image">
                    <div class="search-result-content">
                        <h3 class="search-result-title"><a href="#">Search Result ${i} for "${searchQuery}"</a></h3>
                        <p class="search-result-description">This is a description for search result ${i}. It provides a brief overview of the content related to "${searchQuery}".</p>
                        <p class="search-result-meta">53kb (5,529 words) - 10:27 AM, 23 October 2024</p>
                    </div>
                `;
                searchResultsList.appendChild(listItem);
            }
        }
// Function to make sure we work with sorted data
function sortData() {
    dictionaryEntries.sort((a, b) => {
        // I have no idea why but it doesn't sort correctly without this step
        const first_letter = a.word.charAt(0).toUpperCase().localeCompare(b.word.charAt(0).toUpperCase());

        if (first_letter != 0)
            return first_letter;
        else
            return a.word.localeCompare(b.word);
    });
}

// The name of the cateogy indicating all dictionary entries
const allCategoryName = 'všechny'

function createCategoryMenu() {
    const menu = document.getElementById('categoryMenu');
    const categories = [allCategoryName, 'algebra', 'kombinatorika', 'geometrie', 'teorie čísel', 'ostatní'];

    categories.forEach(category => {
        let menuItem = document.createElement('span');
        menuItem.classList.add('menu-item');
        menuItem.innerText = category;
        menuItem.onclick = () => filterByCategory(category);
        menu.appendChild(menuItem);
    });

    let toggleButton = document.createElement('button');
    toggleButton.id = 'categoryToggle';
    toggleButton.classList.add('toggle-button');
    toggleButton.innerText = '▼';
    menu.appendChild(toggleButton);
}

function filterByCategory(category) {
    // Filter entries based on the selected category
    let filteredEntries = category === allCategoryName
        ? dictionaryEntries
        : dictionaryEntries.filter(entry => entry.category.split('/').includes(category));

    // Recreate the letter menu based on filtered entries
    createLetterMenu(filteredEntries);

    // Display the dictionary with filtered entries
    displayDictionary(filteredEntries);

    // Update active class on category buttons
    const categoryButtons = document.querySelectorAll('#categoryMenu .menu-item');
    categoryButtons.forEach(button => {
        button.classList.toggle('active', button.innerText === category);
    });

    // Update the menu positions
    adjustLayout();

    // Wait for an enough number of frames, then scroll
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    });
}

// We'll keep track of whether the category menu is visible, initially it is
let categoriesVisible = true;

function setupCategoryToggle() {
    document.getElementById('categoryToggle').addEventListener('click', function () {
        const menu = document.getElementById('categoryMenu');
        const categoryItems = menu.querySelectorAll('.menu-item');

        if (categoriesVisible) {
            categoryItems.forEach(item => item.classList.add('hidden'));
        } else {
            categoryItems.forEach(item => item.classList.remove('hidden'));
        }

        categoriesVisible = !categoriesVisible;
        this.classList.toggle('rotated');

        adjustLayout();
    });
}

// We'll keep track of whether the letter menu is visible, initially it is
let lettersVisible = true;

function createLetterMenu(entries) {
    const menu = document.getElementById('letterMenu');
    menu.innerHTML = ''
    const uniqueLetters = new Set();

    // Loop through dictionary entries to get unique first letters
    entries.forEach(entry => {
        const firstLetter = entry.word.charAt(0).toUpperCase();
        uniqueLetters.add(firstLetter);
    });

    // Convert the Set to an array and sort it
    const sortedLetters = Array.from(uniqueLetters).sort((a, b) => a.localeCompare(b));

    // Create menu items for each unique letter
    sortedLetters.forEach(letter => {
        let menuItem = document.createElement('span');

        if (!lettersVisible)
            menuItem.classList.add('hidden');

        menuItem.classList.add('menu-item');
        menuItem.innerText = letter;
        menuItem.onclick = () => {
            var categoryMenuBox = document.getElementById('categoryMenu').getBoundingClientRect();

            const element = document.getElementById('letter-' + letter)
            const elementPosition = element.offsetTop - (categoryMenuBox.top + categoryMenuBox.height + 15);

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        };
        menu.appendChild(menuItem);
    });

    // Create the letter toggle
    let toggleButton = document.createElement('button');
    toggleButton.id = 'letterToggle';
    toggleButton.classList.add('toggle-button');
    toggleButton.innerText = '▼';
    toggleButton.addEventListener('click', function () {
        const menu = document.getElementById('letterMenu');
        const letterItems = menu.querySelectorAll('.menu-item');

        if (lettersVisible) {
            letterItems.forEach(item => item.classList.add('hidden'));
        } else {
            letterItems.forEach(item => item.classList.remove('hidden'));
        }

        lettersVisible = !lettersVisible;
        this.classList.toggle('rotated');

        adjustLayout();
    });

    if (!lettersVisible)
        toggleButton.classList.add('rotated');

    menu.appendChild(toggleButton);
}

function displayDictionary(entries) {
    const dictionaryDiv = document.getElementById('dictionary');
    dictionaryDiv.innerHTML = '';

    const categorized = categorizeEntriesByLetter(entries);

    for (let letter in categorized) {
        let letterSection = document.createElement('div');
        letterSection.id = 'letter-' + letter;
        letterSection.className = "letter-section";
        let header = document.createElement('h3');
        header.innerText = letter;
        letterSection.appendChild(header);

        categorized[letter].forEach(entry => {
            let entryDiv = document.createElement('div');
            entryDiv.className = 'dictionary-entry';

            let term = document.createElement('h2');
            term.className = 'term';
            term.textContent = entry.word;
            entryDiv.appendChild(term);

            if (entry.readAs) {
                let readAs = document.createElement('p');
                readAs.className = 'readAs';
                readAs.innerHTML = `<em>(čti „${entry.readAs}”)</em>`;
                entryDiv.appendChild(readAs);
            }

            let categoryContainer = document.createElement('div');
            categoryContainer.className = 'category-container';

            let categories = entry.category.split('/');
            categories.forEach(cat => {
                let categorySpan = document.createElement('span');
                categorySpan.className = 'category';
                categorySpan.textContent = cat.trim();
                categoryContainer.appendChild(categorySpan);
            });

            entryDiv.appendChild(categoryContainer);

            let definition = document.createElement('p');
            definition.className = 'definition';
            definition.innerHTML = `${entry.definition}`;
            entryDiv.appendChild(definition);

            let example = document.createElement('p');
            example.className = 'example';
            example.innerHTML = `<strong>Příklad:</strong> ${entry.example}`;
            entryDiv.appendChild(example);

            if (entry.note) {
                let note = document.createElement('p');
                note.className = 'note';
                note.innerHTML = `<strong>Poznámka:</strong> ${entry.note}`;
                entryDiv.appendChild(note);
            }

            letterSection.appendChild(entryDiv);
        });

        dictionaryDiv.appendChild(letterSection);
    }
}

function categorizeEntriesByLetter(entries) {
    const categorized = {};
    entries.forEach(entry => {
        const firstLetter = entry.word.charAt(0).toUpperCase();
        if (!categorized[firstLetter]) {
            categorized[firstLetter] = [];
        }
        categorized[firstLetter].push(entry);
    });
    return categorized;
}

function adjustCategoryMenuPosition() {
    var menuHeight = document.getElementById('letterMenu').offsetHeight + 25;
    var categoryMenu = document.getElementById('categoryMenu');
    categoryMenu.style.marginTop = menuHeight + 'px';
}

function adjustDictionaryPosition() {
    var categoryMenuRect = document.getElementById('categoryMenu').getBoundingClientRect();
    var menuHeightFromTop = categoryMenuRect.top + categoryMenuRect.height + 15;
    document.getElementById('dictionary').style.marginTop = menuHeightFromTop + 'px';
}

// Flag to track whether the first load has happened
let isFirstLoadPending = true;

function adjustLayout() {
    if (isFirstLoadPending) {
        disableTransitionsTemporarily();
        adjustCategoryMenuPosition();
        adjustDictionaryPosition();
        setTimeout(restoreTransitions, 50);
        isFirstLoadPending = false;
    }
    else {
        setTimeout(adjustCategoryMenuPosition, 150);
        setTimeout(adjustDictionaryPosition, 450);
    }
}

function disableTransitionsTemporarily() {
    const elements = [
        document.getElementById('categoryMenu'),
        document.getElementById('dictionary'),
        document.getElementById('container')
    ];
    elements.forEach(element => {
        if (element) {
            element.style.transition = 'none';
        }
    });
}

function restoreTransitions() {
    const elements = [
        document.getElementById('categoryMenu'),
        document.getElementById('dictionary'),
        document.getElementById('container')
    ];
    elements.forEach(element => {
        if (element) {
            element.style.transition = '';
        }
    });
}

window.onload = adjustLayout;
window.onresize = adjustLayout;

sortData();
createCategoryMenu();
setupCategoryToggle();
filterByCategory(allCategoryName);
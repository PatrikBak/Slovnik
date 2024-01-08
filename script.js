// Function to make sure we work with sorted data
function sortData() {
    dictionaryEntries.sort((a, b) => {
        // I have no idea but it doesn't sort correctly without this step
        const first_letter = a.word.charAt(0).toUpperCase().localeCompare(b.word.charAt(0).toUpperCase());

        if (first_letter != 0)
            return first_letter;
        else
            return a.word.localeCompare(b.word);
    });
}

let lettersVisible = true; // State to track visibility of categories

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
    toggleButton.innerText = '▼'; // or use an icon
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

    // No idea, this just makes it work
    setTimeout(adjustCategoryMenuPosition, 100);
    setTimeout(adjustDictionaryPosition, 400);
    setTimeout(adjustContainerHeight, 500);

    // Wait for the next frame, then wait for another frame, then scroll
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

// Function to create the A-Z menu
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

            var categoryMenuRect = document.getElementById('categoryMenu').getBoundingClientRect();

            const element = document.getElementById('letter-' + letter)
            const elementPosition = element.offsetTop - (categoryMenuRect.top + categoryMenuRect.height + 15);

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
    toggleButton.addEventListener('click', letterToggleClick());
    toggleButton.innerText = '▼'; // or use an icon

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
            // Create the main dictionary entry container
            let entryDiv = document.createElement('div');
            entryDiv.className = 'dictionary-entry';

            // Create and append the term (word)
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

            // Create and append the definition
            let definition = document.createElement('p');
            definition.className = 'definition';
            definition.innerHTML = `${entry.definition}`;
            entryDiv.appendChild(definition);

            // Create and append the example, if it exists
            if (entry.example) {
                let example = document.createElement('p');
                example.className = 'example';
                example.innerHTML = `<strong>Příklad:</strong> ${entry.example}`;
                entryDiv.appendChild(example);
            }

            // Create and append the note, if it exists
            if (entry.note) {
                let note = document.createElement('p');
                note.className = 'note';
                note.innerHTML = `<strong>Poznámka:</strong> ${entry.note}`;
                entryDiv.appendChild(note);
            }

            // Append the entire entry to the letter section
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

function adjustContainerHeight() {
    var dictionary = document.getElementById('dictionary');
    var container = document.getElementById('container');
    var contentHeight = dictionary.scrollHeight;
    container.style.height = (contentHeight + 550) + 'px';
}

let isFirstLoad = true; // Flag to track the initial load

function disableTransitionsTemporarily() {
    const elements = [document.getElementById('categoryMenu'), document.getElementById('dictionary'), document.getElementById('container')];
    elements.forEach(el => {
        if (el) {
            el.style.transition = 'none';
        }
    });
}

function restoreTransitions() {
    const elements = [document.getElementById('categoryMenu'), document.getElementById('dictionary'), document.getElementById('container')];
    elements.forEach(el => {
        if (el) {
            el.style.transition = '';
        }
    });
}

function adjustLayout() {
    if (isFirstLoad) {
        disableTransitionsTemporarily();
    }

    adjustCategoryMenuPosition();
    adjustDictionaryPosition();
    adjustContainerHeight();

    if (isFirstLoad) {
        // Restore transitions after a short delay
        setTimeout(restoreTransitions, 50); // 50ms delay
        isFirstLoad = false;
    }
}

window.onload = adjustLayout;
window.onresize = function () {
    // Immediate adjustment
    adjustLayout();

    // Forced adjustment after a delay
    setTimeout(adjustLayout, 150); // Adjust the delay as needed
};

sortData();
createCategoryMenu()
filterByCategory(allCategoryName);

let categoriesVisible = true; // State to track visibility of categories

const longestAnimationDuration = 350;

document.getElementById('categoryToggle').addEventListener('click', function () {
    const menu = document.getElementById('categoryMenu');
    const categoryItems = menu.querySelectorAll('.menu-item');

    if (categoriesVisible) {
        // Hide category items with a smooth transition
        categoryItems.forEach(item => item.classList.add('hidden'));
    } else {
        // Show category items with a smooth transition
        categoryItems.forEach(item => item.classList.remove('hidden'));
    }

    categoriesVisible = !categoriesVisible; // Toggle the state
    this.classList.toggle('rotated'); // Rotate the toggle button

    setTimeout(() => {
        adjustDictionaryPosition();
        setTimeout(adjustContainerHeight, longestAnimationDuration);
    }, longestAnimationDuration);
});

function letterToggleClick() {
    return function () {
        const menu = document.getElementById('letterMenu');
        const letterItems = menu.querySelectorAll('.menu-item');

        if (lettersVisible) {
            // Hide category items with a smooth transition
            letterItems.forEach(item => item.classList.add('hidden'));
        } else {
            // Show category items with a smooth transition
            letterItems.forEach(item => item.classList.remove('hidden'));
        }

        lettersVisible = !lettersVisible; // Toggle the state
        this.classList.toggle('rotated'); // Rotate the toggle button

        setTimeout(() => {
            adjustCategoryMenuPosition();
            setTimeout(() => {
                adjustDictionaryPosition();
                setTimeout(() => {
                    adjustContainerHeight();
                }, longestAnimationDuration);
            }, longestAnimationDuration);
        }, longestAnimationDuration);
    };
}

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
}

function filterByCategory(category) {
    // Filter entries based on the selected category
    let filteredEntries = category === allCategoryName
        ? dictionaryEntries
        : dictionaryEntries.filter(entry => entry.category === category);

    // Recreate the letter menu based on filtered entries
    createLetterMenu(filteredEntries);

    // Display the dictionary with filtered entries
    displayDictionary(filteredEntries);

    // Update active class on category buttons
    const categoryButtons = document.querySelectorAll('#categoryMenu .menu-item');
    categoryButtons.forEach(button => {
        button.classList.toggle('active', button.innerText === category);
    });

    // This will update the menu
    adjustLayout();

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
    const menu = document.getElementById('menu');
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

            // Create and append the category
            if (entry.category) {
                let category = document.createElement('span');
                category.className = 'category';
                category.textContent = `${entry.category}`;
                entryDiv.appendChild(category);
            }

            // Create and append the definition
            let definition = document.createElement('p');
            definition.className = 'definition';
            definition.textContent = `${entry.definition}`;
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
    var menuHeight = document.getElementById('menu').offsetHeight + 25;
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

function adjustLayout() {
    adjustCategoryMenuPosition();
    adjustDictionaryPosition();
    adjustContainerHeight();
}

window.onload = adjustLayout;
window.onresize = adjustLayout;

sortData();
createCategoryMenu()
filterByCategory(allCategoryName);
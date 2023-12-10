// Function to sort and categorize the dictionary
function categorizeDictionary(entries) {
    // Sort the entries alphabetically
    entries.sort((a, b) => {
        const first_letter = a.word.charAt(0).toUpperCase().localeCompare(b.word.charAt(0).toUpperCase());

        if (first_letter != 0)
            return first_letter;
        else
            return a.word.localeCompare(b.word);
    });

    // Categorize by the first letter
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

// Use the function to get a sorted and categorized dictionary
const dictionary = categorizeDictionary(dictionaryEntries)

// Function to create the A-Z menu
function createMenu() {
    const menu = document.getElementById('menu');
    const uniqueLetters = new Set();

    // Loop through dictionary entries to get unique first letters
    dictionaryEntries.forEach(entry => {
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
        menuItem.onclick = () => scrollToElement(
            document.getElementById('letter-' + letter),
            -document.getElementById('menu').offsetHeight - 20
        );
        menu.appendChild(menuItem);
    });
}

function scrollToElement(element, offset) {
    const elementPosition = element.offsetTop + offset;

    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

function displayDictionary() {
    const dictionaryDiv = document.getElementById('dictionary');
    for (let letter in dictionary) {
        let letterSection = document.createElement('div');
        letterSection.id = 'letter-' + letter;
        letterSection.className = "letter"
        let header = document.createElement('h3');
        header.innerText = letter;
        letterSection.appendChild(header);

        dictionary[letter].forEach(entry => {
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

function adjustDictionaryPosition() {
    var menuHeight = document.getElementById('menu').offsetHeight + 40;
    document.getElementById('dictionary').style.marginTop = menuHeight + 'px';
}

function adjustContainerHeight() {
    var container = document.getElementById('container');
    var contentHeight = container.scrollHeight;
    container.style.height = (contentHeight + 400) + 'px';
}

function adjustLayout() {
    adjustDictionaryPosition();
    adjustContainerHeight();
}

window.onload = adjustLayout;
window.onresize = adjustLayout;

createMenu();
displayDictionary();
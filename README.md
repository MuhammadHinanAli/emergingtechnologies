# Emerging Technologies Repository

# Task 1: Third-Order Letter Approximation Model

### Overview:
This project implements a third-order letter approximation model using five plain-text works from Project Gutenberg. 
The purpose of this model is to count the occurances of every three-character sequence in the cleaned text of these books.
The model can provide insights into frequency of specific letter sequences. 

### Features:

- **Text Cleaning:** Reads and preprocesses text files by removing unwanted characters and converting the text to uppercase.

- **Trigram Generation:** Extracts all possible trigrams from the cleaned text and counts their occurrences.

- **Frequency Display:** Displays the most frequent trigrams along with their counts.

### Functionality:
1. **Text Cleaning**

- The clean_text(file_paths) function reads and processes the text files to remove unwanted characters and formats the text.

- **Input:** A list of file paths.

- **Output:** A cleaned, uppercase string containing alphabetic characters, spaces, and full stops.

2. **Trigram Generation**

- The generate_trigrams(text) function extracts all possible trigrams (three consecutive characters) from the cleaned text and counts their occurrences.

- **Input:** Cleaned text string.

- **Output:** A dictionary where keys are trigrams, and values are their counts.

3. **Display Top Trigrams**

- The display_top_trigrams(trigram_counts, n=100) function sorts the trigrams by frequency and displays the top n most frequent ones.

- **Input:** Trigram frequency dictionary, number of top trigrams to display.

- **Output:** Prints the top n trigrams and their counts to the console.


# Task 2: Third-order letter approximation generation#

### Overview:
This Task generates a 10,000-character string starting with "TH" using a trigram model. 
It determines the next character based on the last two characters by selecting from possible trigrams, weighted by their frequencies. 
Repeats until the string reaches the desired length.

### Features

- **Character Prediction:** Predicts the next character using trigram probabilities.

- **Text Generation:** Creates a long string of text by repeatedly predicting the next character.

- **Output:** Saves the generated text to a file and prints it to the console.

### Functionality:
1. **generate_next_char(trigram_counts, prev_two_chars)**

- Predicts the next character based on the previous two characters and the trigram frequency model.

- **Input:**

- trigram_counts (dict): A dictionary containing trigram frequencies.

- prev_two_chars (str): The last two characters of the generated text.

- **Output:**

- A single character (str) predicted based on trigram probabilities.

2. **generate_text(trigram_counts, length=10000)**

- Generates a string of the specified length using the trigram model.

- **Input:**

- trigram_counts (dict): A dictionary containing trigram frequencies.

- length (int): The desired length of the generated text (default: 10,000 characters).

- **Output:**

- A string (str) containing the generated text.


# Task 3: Analyze Your Model

### Overview:
This task has a words.txt file, containing a list of English words, from the provided repository to your own repository. 
This list is used to analyze the 10,000-character string generated earlier. 
Thwn it Splits the string into individual words and check each one against the word list to determine if it is a valid English word. 
After which it calculates the percentage of valid English words in the string.

### Features
- **Load English Words:** Reads a list of valid English words from a text file.

- **Word Extraction:** Extracts individual words from the generated text.

- **Validation:** Counts how many generated words are valid English words.

- **Percentage Calculation:** Computes the percentage of valid English words in the generated text.


### Functionality:

1. **load_words(file_path)**

- Loads a list of valid English words from a text file.

- **Input:**

- file_path (str): Path to the file containing the English words, with each word on a separate line.

- **Output:**

- A set of lowercase English words.

2. **split_text(text)**

- Splits a block of text into individual words using regular expressions.

- **Input:**

- text (str): A string of text to be split into words.

- **Output:**

- A list of extracted words.

3. **valid_words(words, english_words)**

- Counts how many of the generated words are valid English words.

- **Input:**

- words (list): A list of words extracted from the generated text.

- english_words (set): A set of valid English words.

- **Output:**

- An integer representing the count of valid English words.

4. **calculate_percentage(valid_count, total_count)**

- Calculates the percentage of valid English words in the generated text.

- **Input:**

- valid_count (int): The number of valid English words in the generated text.

- total_count (int): The total number of words in the generated text.

- **Output:**

- A float representing the percentage of valid English words.

# Task 4: Export Model as JSON File
### Overview:
This task exports your trigram model as a JavaScript Object Notation (JSON) file, preserving its structure and data. 
Also saves the file in your repository with the name trigrams.json to ensure easy sharing and future use in various applications.

### Features

- Converts the trigram model (a Python dictionary) into a JSON-compatible format.

- Saves the formatted JSON data to a specified output file.

- Includes indentation for easy readability of the JSON output.

### Functionality:

1. **Function: export_to_json**

- The export_to_json function exports the trigram model to a JSON file.

2. **Parameters**

- trigram_model (dict): The trigram model to be exported, represented as a Python dictionary.

- output_file (str): The name of the JSON file where the trigram model will be saved.

# References

- https://stackoverflow.com/
- https://chatgpt.com/
- Lecture/Lab Notes Provided by Lecturer
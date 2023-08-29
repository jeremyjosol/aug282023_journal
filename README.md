## Tests

Describe: Entry()

Test 1: "It should return properties 'title' and 'body' for the new Entry object."
Code: let journalEntry = new Entry("title", "body")
Expected Output: title: 'title' , body: 'body' 

Describe: Entry.prototype.wordCount(body)

Test 1: "It should return a sentence from our body property."
Code: journalEntry.wordCount("This is the body.");
Expected Output: title: 'title', body: 'This is the body'

Test 2: "It should split the sentence word for word into an array."
Code: 
const bodyCount = this.body.split(" ");
return bodyCount;
journalEntry.wordCount("This is the body.");
Expected Output: ['This', 'is', 'the', 'body']

Test 3: "It should return the number of words from the body property."
Code: 
const bodyCount = this.body.split(" ");
return bodyCount.length;
journalEntry.wordCount();
Expected Output: 4

Describe: Entry.prototype.vowelCount(body)

Test 1: "It should return the number of vowels if the body's sentence includes them."
Code: journalEntry.vowelCount("This is a sentence in the body");
Expected Output: 9


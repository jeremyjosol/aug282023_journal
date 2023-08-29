## Tests

Describe: Entry()

Test 1: "It should return properties 'title' and 'body' for the new Entry object."
Code: let journalEntry = new Entry("title", "body")
Expected Output: title: 'title' , body: 'body' 

Describe: Entry.prototype.wordCount(body)

Test 1: "It should return a sentence from our body property."
Code: journalEntry.wordCount("This is the body.");
Expected Output: title: 'title', body: 'This is the body'
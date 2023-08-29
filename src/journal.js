function Entry(title, body){
  this.title = title;  
  this.body = body;
}

let journalEntry = new Entry("title", "body");

Entry.prototype.wordCount = function(body) {
  this.body = body;
  return this.body;
};
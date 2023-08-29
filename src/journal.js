function Entry(title, body){
  this.title = title;  
  this.body = body;
}

let journalEntry = new Entry("title", "This is the body");

Entry.prototype.wordCount = function(body) {
  const bodyCount = this.body.split(" ");
  return bodyCount.length;
};
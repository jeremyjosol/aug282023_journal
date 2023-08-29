function Entry(title, body){
  this.title = title;  
  this.body = body;
}

let journalEntry = new Entry("title", "This is the body this is the body");

Entry.prototype.wordCount = function(body) {
  const bodyCount = this.body.split(" ");
  return bodyCount.length;
};

Entry.prototype.vowelCount = function(body) {
  const bodyCounter = this.body;
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < bodyCounter.length; i++) {
    if (vowels.includes(bodyCounter[i])){
      vowelCount++;
    }  
  }
  return vowelCount;
}
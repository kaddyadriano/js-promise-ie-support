# Vanilla JS Promise. IE Support
Currently IE does not support `Promise` that's thereson I had to create this simple vanilla JS Promise function. I check if `Promise` already exists so it's ok to drop it in your code and won't break anything.

Use it just like the regular Promise class.

### Example: ###
```javascript
var action = new Promise(function(resolve, reject){
  resolve();
  // or reject();
});

action.then(function(){
  console.log("resolved");
}, function(){
  console.log("rejected");
}).catch(function(error_message, error){
  console.log(error_message, error);
});
```

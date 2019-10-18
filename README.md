# Vanilla JS Promise. IE Support
Currently IE does not support the native `Promise` class and that's the reason why I had to create this simple vanilla JS Promise function. The code will only be executed if `Promise` is undefined so it's ok to drop it in your code and won't break anything.

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

/*Javascript Functioning - recursion is a function that call itself until it does not*/
//Ecmascript
import loadImagePromised from './loadImagePromised'

loadImagePromised('images/alt3.jpg')
.then((img) => {
  var imgElement = document.createElement("img")
  imgElement.src = img.src
  document.body.appendChild(imgElement)
})

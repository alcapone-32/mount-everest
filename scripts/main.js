const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/mount-everest.jpg') {
    myImage.setAttribute('src','images/mount-everest-01.jpg');
  } else {
    myImage.setAttribute('src','images/mount-everest.jpg');
  }
}
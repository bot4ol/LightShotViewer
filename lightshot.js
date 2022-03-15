function getRandomURL(){
    a=String(Math.floor(Math.random()*9))
    b=String(Math.floor(Math.random()*9))
    c=String(Math.floor(Math.random()*9))
    d=String(Math.floor(Math.random()*9))
    e=String(Math.floor(Math.random()*9))
    f=String(Math.floor(Math.random()*9))
    out= "https://prnt.sc/"+a+b+c+d+e+f
    return(out)
}
RandomURL=getRandomURL()
var linkToPhoto=RandomURL.link(RandomURL)
document.write(linkToPhoto)
console.log("Who this reading is gay")
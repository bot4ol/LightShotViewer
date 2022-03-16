function getRandomURL() {
    chrs = '0123456789';
    var str = '';
    for (var i = 0; i < 6; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    out="https://prnt.sc/"+str
    return out;
}
RandomURL=getRandomURL()
var linkToPhoto=RandomURL.link(RandomURL)
document.write(linkToPhoto)
console.log("Who this reading is gay")
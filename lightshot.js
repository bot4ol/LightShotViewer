function getRandomURL() {
    chrs = 'abcdefghijklmnopqrstuvwxyz123456789';
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
if (getRandomURL=="https://prnt.sc/148822"){
    console.log("НИХУЯ СЕБЕ")   
}
console.log("Who this reading is gay")

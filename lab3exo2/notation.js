function mean(tab) {
    var sm=0
for(i=0;i<tab.length;i++)
sm+=tab[i]
return sm/tab.length
}
module.exports = { mean };

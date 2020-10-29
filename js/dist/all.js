((d) => {
    let informpacanator = d.getElementById('informpacanator');
    let alpacaSound = new Audio('./assets/alpacaSound.mp3');

    let alpacaFacts = [
        "The position alpacas assume while riding in a minivan is called “Cushing.” Also, alpacas apparently ride in minivans.",
        "A retirement home in Germany provides therapy alpacas to the elderly.",
        "When an Alpaca gives birth, it’s called Unpacking.",
        "Alpaca fleece (wool) is naturally water repellent, hypoallergenic and difficult to ignite. It is also warmer and softer than sheep’s wool.",
        "Female alpacas, much like their human counterparts, tend to go to the bathroom at the same time.",
        "Most alpacas are 48-54 inches tall and can weigh anywhere from 106 to 185 pounds.",
        "Alpaca fiber is considered the second strongest natural animal fiber.",
        "An alpaca that wishes to exhibit friendly behavior will make a clucking or clicking noise. A content alpaca may hum.",
        "Alpaca poop does not smell very much and is considered to be excellent for soil enrichment.",
        "Alpaca females are pregnant for 242-345 days.",
        "Baby alpacas are called crias.",
        "Alpaca fiber comes in 22 colors and hundreds of shades, from white to light rose gray to dark fawn.",
        "Ancient South Americans used to call Alpaca fiber as the Fiber of Gods, because it was reserved for royal use only. ",
        "Alpaca fiber is almost 3 times warmer than sheep or any other kind of wall and almost 7 times stronger.",
        "There are two types of Alpaca fiber available; primary and secondary. However, the secondary fiber is better in quality than primary, and used in garment industry.",
        "Alpacas are known to spit when overexcited. They usually only spit at other alpacas.",
        "When Alpacas spit, the saliva will contain a bit of hair, or it may contain stomach bile.",
        "Alpacas can live as long as 25 years and are able to survive in most climates.",
        "Alpacas are herbivores with a three-chambered stomach. ",
        "Alpaca diet includes mostly grass, but they are also known to eat wood, bark, leaves and stems.",
        "Baby alpacas can weigh up to 20 pounds at birth."
    ];

    let randomFact = () => Math.floor((Math.random() * (alpacaFacts.length )));
    let infoCycle = () => {
        informpacanator.textContent = alpacaFacts[randomFact()];
        alpacaSound.play();
    }

    informpacanator.textContent = alpacaFacts[randomFact()];

    informpacanator.addEventListener("click", infoCycle);
    informpacanator.addEventListener("mouseover", () => {
        informpacanator.style.cursor = "pointer";
    });

})(document)
console.log('hello alpacas, get a bag!!');

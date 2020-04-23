const data = {
  bio: {
    name: "Nikola Tesla",
    image: "assets/images/tesla.jpg",
    description:
      "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.",
    learnMore: "https://en.wikipedia.org/wiki/Nikola_Tesla##",
  },
  facts: [
    {
      date: "Jul 10 1856",
      fact: "Nikola Tesla Is Born",
      detail:
        "Tesla was born to Serbian parents in the village of Smiljan, Austrian Empire near the town of Gospić, in the territory of modern-day Croatia. ",
    },
    {
      date: "1875",
      fact: "Tesla Enrolls At Austrian Polytechnic",
      detail:
        "At the Polytechnic school Tesla began his studies in mechanical and electrical engineering.",
    },
    {
      date: "1882",
      fact: "Nikola Tesla begins working for Continental Edison",
      detail:
        "Tesla moved to Paris, to work as an engineer for the Continental Edison Company, designing improvements to electric equipment brought overseas from Edison's ideas.",
    },
    {
      date: "1882",
      fact: "Tesla Identifies Magnetic Induction Field Principle",
      detail:
        "Tesla identified the rotating magnetic induction field principle used in alternators and pioneered the use of this rotating and inducting electromagnetic field force to generate torque in rotating machines. ",
    },
    {
      date: "Jun 6 1884",
      fact: "Tesla arrives in the United States",
      detail:
        "Tesla first arrived in the United States, in New York City with little besides a letter of recommendation from Charles Batchelor, a former employer. ",
    },
    {
      date: "1885",
      fact: "Nikola Tesla quits working for Edison",
      detail:
        "Tesla claims he was offered US$50,000 (~ US$1.1 million in 2007, adjusted for inflation) if he redesigned Edison's inefficient motor and generators, making an improvement in both service and economy.",
    },
    {
      date: "1886",
      fact: "Nikola Tesla forms Tesla Electric Light and Manufacturing Company",
      detail:
        "Located in Rahway, New Jersey, the company was formed after Tesla left Thomas Edison's employment, after a contractual disagreement. Tesla planned to sell and license his patent and innovations.",
    },
    {
      date: "1887",
      fact: "War of Currents era begins",
      detail:
        "During the initial years of electricity distribution, Edison's direct current was the standard for the United States and Edison was not inclined to lose all his patent royalties. ",
    },
    {
      date: "Apr 1887",
      fact: "Nikola Tesla begins experimenting with X-Rays",
      detail:
        "Tesla began investigating what would later be called X-rays using his own single terminal vacuum tubes (similar to his patent #514,170). This device differed from other early X-ray tubes in that it had no target electrode. ",
    },
    {
      date: "1891",
      fact: "Nikola Tesla Patents the Tesla Coil",
      detail:
        "It is used to produce high voltage, low current, high frequency alternating current electricity. Tesla experimented with a number of different configurations and they consist of two, or sometimes three, coupled resonant electric circuits.  ",
    },
    {
      date: "Jul 30 1891",
      fact: "Nikola Tesla becomes a citizen of the United States",
      detail:
        "Tesla established his 35 South Fifth Avenue laboratory in New York in the same year. Later, Tesla established his Houston Street laboratory in New York at 46 E. Houston Street. ",
    },
    {
      date: "1901",
      fact: "Construction begins on Tesla's Wardenclyffe Tower",
      detail:
        "1898, and in 1901, construction began on the land near Long Island Sound. Architect Stanford White designed the Wardenclyffe facility main building. The tower was designed by W.D. Crow, an associate of White.",
    },
    {
      date: "1913",
      fact: "Tesla Patents Bladeless Turbine",
      detail:
        "Tesla's patents state that the device was intended for the use of fluids as motive agents, as distinguished from the application of the same for the propulsion or compression of fluids (though the device can be used for those purposes as well). ",
    },
    {
      date: "Jul 10 1934",
      fact:
        "The New York Times publicizes Nikola Tesla's particle Beam research",
      detail:
        "The device was based upon a large Van de Graaff generator of unique design and a special type of open-ended vacuum tube. It comprised a system for the acceleration of minute tungsten or mercury particles to a velocity of about 48 times the speed of sound.",
    },
    {
      date: "Jan 7 1943",
      fact: "Nikola Tesla Dies",
      detail:
        "Despite having sold his AC electricity patents, Tesla died with significant debts. Later that year the US Supreme Court upheld Tesla's patent number 645576 in a ruling that served as the basis for patented radio technology in the United States. ",
    },
  ],
};

((window, data) => {
  initialize(data);
})(window, data);

function initialize(data) {
  const facts = data.facts.map((item) => generateListItem(item)).join(" ");
  setContent("title", `Tribute to ${data.bio.name}`);
  setContent("#title", data.bio.name);
  setAttribute("#image", "src", data.bio.image);
  setContent("#img-caption", data.bio.description);

  setContent("#facts-list", facts);
  setAttribute("#tribute-link", "src", data.bio.learnMore);
}

function setContent(elementIdentifier, text) {
  const element = document.querySelector(elementIdentifier);
  element.innerHTML = text;
}

function setAttribute(elementIdentifier, attribute, value) {
  const element = document.querySelector(elementIdentifier);
  element.setAttribute(attribute, value);
}

function generateListItem({ date, fact, detail }) {
  return `<li>
        <h2>${fact}</h2>
        <h3>${date}</h3>
        <p>${detail}</p>
    </li>`;
}

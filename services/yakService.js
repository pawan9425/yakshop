const herdData = require("../data/herd.json");

const herd = herdData.herd;

function calculateStock(days) {
  let totalMilk = 0;
  let totalSkins = 0;

  herd.forEach((yak) => {
    const ageInDays = yak.age * 100;
    const ageOnDayT = ageInDays + days;
    if (ageOnDayT >= 365) {
      totalSkins += 1;
    }

    // Calculate milk produced only for the days the yak is alive and eligible
    for (let i = 0; i < days; i++) {
      const currentDayAge = ageInDays + i;
      let milkProduced = 50 - currentDayAge * 0.03;

      if (milkProduced < 0) {
        milkProduced = 0;
      }

      totalMilk += milkProduced;
    }
  });

  return { milk: totalMilk.toFixed(2), skins: totalSkins };
}

function calculateHerd(days) {
  return herd.map((yak) => {
    const ageInDays = yak.age * 100;
    const newAge = ageInDays + days;
    return {
      name: yak.name,
      age: (newAge / 100).toFixed(2),
      "age-last-shaved": yak.age,
    };
  });
}

module.exports = { calculateStock, calculateHerd };

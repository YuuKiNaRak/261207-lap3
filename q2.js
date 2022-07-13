const mafiaWar = (mafias, fights) => {
  	for (let i = 0; i < fights.length; i += 2) {
		if (mafias[fights[i] - 1].id == mafias[fights[i + 1] - 1].id) continue;
		else if (
			mafias[fights[i] - 1].power == mafias[fights[i + 1] - 1].power
		) {
			continue;
		} else if (
			mafias[fights[i] - 1].power > mafias[fights[i + 1] - 1].power
		) {
			mafias[fights[i] - 1].power += mafias[fights[i + 1] - 1].power;
			mafias[fights[i] - 1].members.push(fights[i + 1]);
		} else {
			mafias[fights[i + 1] - 1].power += mafias[fights[i] - 1].power;
			mafias[fights[i + 1] - 1].members.push(fights[i]);
		}
	}
	return mafias.reduce((max, current) =>
		current.power > max.power ? current : max
	);
}

//Test case
const mafias = [
  { id: 1, power: 5, members: [] },
  { id: 2, power: 30, members: [] },
  { id: 3, power: 60, members: [] },
  { id: 4, power: 42, members: [] },
  { id: 5, power: 70, members: [] },
]
const fights = [5, 2, 4, 3, 2, 1]
console.log(mafiaWar(mafias, fights))

module.exports = mafiaWar

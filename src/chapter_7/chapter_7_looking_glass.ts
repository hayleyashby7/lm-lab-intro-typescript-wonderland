import { endAdventure, haveAdventures } from '../..';
import { askQuestion } from '../ui/console';
import { clear, print } from '../ui/console';

const PURR = 'purrs';
const MEOW = 'meows';
const HISS = 'hisses';

type catSound = typeof PURR | typeof MEOW | typeof HISS;

interface kitten {
	name: string;
	color: string;
	sound?: catSound;
}

const getKittens = (): kitten[] => {
	return [
		{ name: 'Dinah', color: 'black', sound: PURR },
		{ name: 'Snowdrop', color: 'white', sound: MEOW },
	];
};

const strokeKitten = (kitten: kitten): void => {
	print(`You stroke ${kitten.name} the ${kitten.color} kitten.`);
	if (kitten.sound) {
		print(`She ${kitten.sound} happily.`);
	}
};

const angryKitten = (kitten: kitten): void => {
	print(`You upset ${kitten.name}! 😾`);
	kitten.sound = HISS;
	print(`She ${kitten.sound} at you!`);
};

const chooseKitten = (input: string): void => {
	const kittens = getKittens();
	const kitten = kittens[parseInt(input)];

	if (kitten) {
		strokeKitten(kitten);
		print('You remember your adventure fondly.');
		return askQuestion('Press ENTER to re-enter Wonderland! ', haveAdventures);
	} else {
		kittens.forEach((kitten) => {
			angryKitten(kitten);
		});

		endAdventure();
	}
};

export function throughLookingGlass(): void {
	clear(true);

	print('There are two pretty kittens, one black and one white. 🐱🐱');
	print('Their names are: ');
	getKittens().forEach((kitten, i) => print(`${i} - ${kitten.name}`));

	askQuestion('Which kitten do you want to stroke?', chooseKitten);
}

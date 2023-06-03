import { endAdventure } from '../..';
import { clear, print } from '../ui/console';

export function throughLookingGlass(): void {
	clear(true);

	print('You have found a looking glass. You can see your reflection in it.');
	return endAdventure();
}

import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Mongol from '../Mongol';

export class GenghisKhan extends Leader {
  static civilization(): typeof Civilization {
    return Mongol;
  }

  name(): string {
    return 'Genghis Khan';
  }
}

export default GenghisKhan;

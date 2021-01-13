import Mongol from './Mongol';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Mongol',
  nation: 'Mongolia',
  colors: ['#fd5dfc', '#832317', '#fff'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Mongol, name, value))
);

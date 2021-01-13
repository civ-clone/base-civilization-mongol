import Mongol from './Mongol';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

([
  'Ulaanbaatar',
  'Erdenet',
  'Darkhan',
  'Choibalsan',
  'Mörön',
  'Nalaikh',
  'Bayankhongor',
  'Ölgii',
  'Khovd',
  'Arvaikheer',
  'Ulaangom',
  'Baganuur',
  'Sainshand',
  'Tsetserleg',
  'Sükhbaatar',
  'Öndörkhaan',
  'Dalanzadgad',
  'Züünkharaa',
  'Uliastai',
  'Altai',
  'Baruun-Urt',
  'Mandalgovi',
  'Zuunmod',
  'Zamyn-Üüd',
  'Bulgan',
  'Kharkhorin',
  'Choir',
  'Bor-Öndör',
  'Sharyngo',
] as string[]).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Mongol, i === 0))
);

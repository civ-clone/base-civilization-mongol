import { GenghisKhan } from '../Leaders';
import Mongol from '../Mongol';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Mongol', (): void => {
  it('has its people, nation and colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Mongol)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Mongol');
    expect(attributes.nation).to.equal('Mongolia');
    // The first fills a unit's shield and a city's square; the second is the shield's edge and the city.
    expect(attributes.colors).to.eql(['#5A8F3C', '#F5C342']);
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Mongol);

    expect(cityNames.length).to.be.at.least(20);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Ulaanbaatar']);
  });

  it('has its leaders', (): void => {
    ([[GenghisKhan, 'Genghis Khan']] as [typeof Leader, string][]).forEach(
      ([LeaderType, name]) => {
        expect(LeaderType.civilization()).to.equal(Mongol);
        expect(new LeaderType().name()).to.equal(name);
      }
    );
  });
});

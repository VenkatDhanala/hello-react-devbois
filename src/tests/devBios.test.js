import devActions from '../reducers/devBios';
import Developer from '../models/Developer';

const fakeDevs =  [
    new Developer("jason","monroe","JavaScript",2008)
];

test('addBioActionCreator should produce proper action object', () =>{
    const actualObject  = devActions.addBioActionCreator(fakeDevs[0]);
    const expectedObject = { type: 'ADD_BIO', developer:fakeDevs[0]};

    expect(actualObject).toStrictEqual(expectedObject);
})
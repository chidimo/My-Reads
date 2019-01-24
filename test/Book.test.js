import React from 'react';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import faker from 'Faker';
import Adapter from 'enzyme-adapter-react-16';

import Book from '../src/Book'


Enzyme.configure({ adapter: new Adapter() });

describe('<Book /> shallow', () => {
    const book = {
        imageLinks: faker.internet.url(),
        authors: []
    }
    console.log("book ", book)
    it('renders with props', () => {
        const wrapper = shallow(<Book book={book}/>)
        expect(wrapper.find('li')).to.have.length(1)
        expect(wrapper.find('div')).to.have.length(5)
        expect(wrapper.find('select')).to.have.length(1)
    });
});

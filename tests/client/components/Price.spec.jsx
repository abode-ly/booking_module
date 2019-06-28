import React from 'react';
import { shallow, mount } from 'enzyme';

// Components
import PriceLabel from '../../../client/src/components/PriceLabel';

describe('Price-per-night label', () => {
  let wrapper = shallow(<PriceLabel />);
  wrapper = mount(<PriceLabel />);

  test('should render two-digit prices', () => {
    wrapper.setProps({ price: 55 });
    expect(wrapper.text()).toEqual('$55 per night');
  });

  test('should render three-digit prices', () => {
    wrapper.setProps({ price: 555 });
    expect(wrapper.text()).toEqual('$555 per night');
  });

  test('should render four-digit prices', () => {
    wrapper.setProps({ price: 5555 });
    expect(wrapper.text()).toEqual('$5555 per night');
  });
});

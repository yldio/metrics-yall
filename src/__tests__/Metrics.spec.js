import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { render } from 'enzyme';
import data from '../data';
import { Metrics } from '../';

Enzyme.configure({ adapter: new Adapter() });

it('Renders <Metrics /> without throwing', () => {
  const tree = render(
    <Metrics
      metrics={data}
      graphDurationSeconds={90}
      width="100%"
      height="100%"
    />
  );
  expect(tree).toMatchSnapshot();
});

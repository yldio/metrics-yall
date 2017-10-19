import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { render } from 'enzyme';
import data from '../data';
import Metrics from '../';

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

it('Renders <Metrics /> with title', () => {
  const tree = render(<Metrics metrics={data} title="stuff" />);
  expect(tree).toMatchSnapshot();
});

it('Renders <Metrics /> with legend', () => {
  const tree = render(<Metrics metrics={data} legend />);
  expect(tree).toMatchSnapshot();
});

it('Renders <Metrics /> with legend', () => {
  const tree = render(<Metrics metrics={data} tooltips />);
  expect(tree).toMatchSnapshot();
});

it('Renders <Metrics /> with chart colors', () => {
  const tree = render(
    <Metrics
      metrics={data}
      chartColors={[
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ]}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('Renders <Metrics /> with unit', () => {
  const tree = render(
    <Metrics
      metrics={data}
      unit="hours"
    />
  );
  expect(tree).toMatchSnapshot();
});

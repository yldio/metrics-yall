![metrics-yall logo](https://i.imgur.com/0xMQJHo.png)

[![Build Status](https://travis-ci.org/yldio/metrics-yall.svg?branch=master)](https://travis-ci.org/yldio/metrics-yall)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

>  a binary function of a topological space which gives, for any two points of the space, a value equal to the distance between them, or to a value treated as analogous to distance for the purpose of analysis.

Make them pretty metrics 🚀

### Install

```bash static
npm install metrics-yall
or
yarn add metrics-yall
```

### Use

```js static
import { Metrics } from 'metrics-yall';

const data = [
  {
    start: '2017-10-05 13:12:13',
    end: '2017-10-05 13:13:58',
    name: 'One Thing',
    metrics: [
      {
        time: '2017-10-05 13:12:28',
        value: 97595392,
      },
      {
        time: '2017-10-05 13:12:43',
        value: 94142464,
      },
      {
        time: '2017-10-05 13:12:58',
        value: 63918080,
      }
    ],
  },
  {
    start: '2017-10-05 13:12:13',
    end: '2017-10-05 13:13:58',
    name: 'Another Thing',
    metrics: [
      {
        time: '2017-10-05 13:12:28',
        value: 99844096,
      },
      {
        time: '2017-10-05 13:12:43',
        value: 93655040,
      },
      {
        time: '2017-10-05 13:12:58',
        value: 64172032,
      },
      {
        time: '2017-10-05 13:13:13',
        value: 100237312,
      }
    ],
  }
]

const Graph = () =>
    <Metrics 
        metrics={data}
        width="100%"
        height="100%"
        legend={true}
    />


export default Graph;
```

### Contribute

We're delighted that you'd like to contribute to the toolkit, as we're always looking for ways to improve it.

If there is anything that you'd like to improve or propose, please submit a pull request. And remember to check the contribution [guidelines](CONTRIBUTING.md)!.

#### Start

```bash static
git clone git@github.com:yldio/metrics-yall.git
cd metrics-yall
yarn
yarn start
```

### License

[MPL-2.0](LICENSE)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import { processProps } from './utils';

class Metrics extends Component {
  componentDidMount() {
    const { xMin, xMax, datasets } = processProps(this.props);
    const {
      displayX = false,
      displayY = false,
      legend,
      unit,
      tooltips,
      title
    } = this.props;
    const config = {
      type: 'line',
      data: { datasets },
      options: {
        tooltips: {
          enabled: tooltips
        },
        responsive: true,
        legend: {
          display: legend
        },
        title: {
          display: Boolean(title),
          text: title
        },
        scales: {
          xAxes: [
            {
              display: displayX, // config for mini should be false
              type: 'time',
              distribution: 'linear',
              time: {
                unit, // this also needs to be played with
                min: xMin,
                max: xMax
              }
            }
          ],
          yAxes: [
            {
              display: displayY // needs min / max and measurement
            }
          ]
        }
      }
    };

    const ctx = this.chart.getContext('2d');
    this._chart = new Chart(ctx, config);
  }

  componentWillReceiveProps(nextProps) {
    const { xMin, xMax, datasets } = this.processProps(nextProps);

    this._chart.data.datasets = datasets;
    // these need to be set, but don't seem to truncate the data that's displayed
    this._chart.options.scales.xAxes[0].time.max = xMax;
    this._chart.options.scales.xAxes[0].time.min = xMin;
    this._chart.update(0);
  }

  // should not rerender ever, we update only the canvas via chartjs
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { width, height } = this.props;

    return (
      <div
        style={{
          width,
          height
        }}
      >
        <canvas
          ref={c => {
            this.chart = c;
          }}
        />
      </div>
    );
  }
}

Metrics.propTypes = {
  /**
   * Data
   */
  metrics: PropTypes.array.isRequired,
  /**
   * Chart Width
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Chart Height
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 'width' of graph, i.e. total duration of time it'll display and truncate data to
   */
  graphDurationSeconds: PropTypes.number,
  /**
   * Chart Colors
   */
  chartColors: PropTypes.arrayOf(PropTypes.string),
  /**
   * Show we should show a legend
   * This will be get from the name of your object
   */
  legend: PropTypes.bool,
  /**
   * Title of the metrics
   */
  title: PropTypes.string,
  /**
   * Should we show tooltips
   */
  tooltips: PropTypes.bool,

  unit: PropTypes.oneOf(['minute', 'millisecond', 'second', 'hour'])
};

Metrics.defaultProps = {
  height: 500,
  width: 500,
  legend: false,
  unit: 'minute',
  graphDurationSeconds: 90,
  chartColors: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ],
  tooltips: false
};

export default Metrics;

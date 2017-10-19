import { format, isPast, subSeconds } from 'date-fns';

const truncateAndConvertMetrics = (metrics, xMin, xMax) => {
  return metrics.reduce((metrics, metric) => {
    if (isPast(xMin)) {
      metrics.push({
        x: metric.time,
        y: metric.value
      });
    }
    return metrics;
  }, []);
};

export const processProps = props => {
  const { metrics, graphDurationSeconds, chartColors } = props;
  const xMax = metrics[0].end;

  const xMin = format(
    subSeconds(xMax, graphDurationSeconds),
    'YYYY-MM-DDTHH:mm:ss'
  );

  const datasets = metrics.map((data, i) => ({
    fill: false,
    borderColor: chartColors[i],
    label: data.name || i + 1 ,
    data: truncateAndConvertMetrics(data.metrics, xMin, xMax)
  }));

  return {
    xMax,
    xMin,
    datasets
  };
};

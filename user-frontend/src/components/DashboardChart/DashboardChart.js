import React from 'react';
import {
  AreaChart,
  Tooltip,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import classes from './DashboardChart.module.scss';

const monthlyDoneCards = {
  1: 10,
  2: 20,
  3: 30,
  4: 25,
  5: 35,
  6: 54,
  7: 45,
  8: 65,
  9: 77,
  10: 23,
  11: 8,
  12: 18,
};

const monthlyCards = {
  1: 10,
  2: 30,
  3: 40,
  4: 35,
  5: 45,
  6: 54,
  7: 47,
  8: 68,
  9: 80,
  10: 23,
  11: 10,
  12: 20,
};

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'short',
  });
}

const array = [];

for (const key in monthlyDoneCards) {
  if (monthlyDoneCards.hasOwnProperty(key)) {
    array.push({ month: toMonthName(key), doneTasks: monthlyDoneCards[key] });
  }
}

for (const key in monthlyCards) {
  array[key - 1]['allTasks'] = monthlyCards[key];
}

export default function DashboardChart() {
  return (
    <div className={classes['chart']}>
      <div className={classes['chart--title']}>
        <h2>Task Done</h2>
        <h2>Monthly</h2>
      </div>
      <ResponsiveContainer
        width="100%"
        height={400}
        className={classes['chart--content']}>
        <AreaChart
          width={800}
          height={300}
          data={array}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient
              id="color-done-tasks-area"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop offset="5%" stopColor="#5051F9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#5051F9" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient
              id="color-all-tasks-area"
              x1="0"
              y1="0"
              x2="0"
              y2="1">
              <stop offset="5%" stopColor="#5051F9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#5051F9" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="doneTasks"
            stroke="#5051F9"
            fillOpacity={1}
            fill="url(#color-done-tasks-area)"
            dot={{ fill: '#5051F9' }}
          />
          <Area
            type="monotone"
            dataKey="allTasks"
            stroke="#5051F9"
            fillOpacity={1}
            fill="url(#color-all-tasks-area)"
            dot={{ fill: '#5051F9' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

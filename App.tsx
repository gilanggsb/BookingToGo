import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import toObject from 'dayjs/plugin/toObject';
import objectSupport from 'dayjs/plugin/objectSupport';
import utc from 'dayjs/plugin/utc';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import RouteApp from '@features/RouteApp';

dayjs.locale('id');
dayjs.extend(duration);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(toObject);
dayjs.extend(objectSupport);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

function App(): JSX.Element {
  return <RouteApp />;
}

export default App;

// @flow

import Logger from 'js-logger';

Logger.useDefaults();

type LoggerInterface = {
  debug: (...args: any) => void,
  info: (...args: any) => void,
  error: (...args: any) => void,
  warn: (...args: any) => void,
}

export function getLogger(name: string): LoggerInterface {
  return Logger.get(name);
}

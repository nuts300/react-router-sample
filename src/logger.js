import Logger from 'js-logger';

Logger.useDefaults();

export function getLogger(name) {
  return Logger.get(name);
}

import config from './config';

export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    backgroundColor: config.colorUiBg,
    color: config.colorText,
    ...config.borders,
  }
}
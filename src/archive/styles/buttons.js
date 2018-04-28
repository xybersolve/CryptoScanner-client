import config from './config';

export default {
  root: {
    borderRadius: 8,
    backgropundColor: '#666',
    color: '#aaa',
  },
  pushButton: {
    ...config.button,
    width: 50,
    marginRight: 4,
  },
  toggleOptions: {
    ...config.button,
    marginRight: 10,
    width: 150
  }
}
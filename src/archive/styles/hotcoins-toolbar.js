import config from './config';

export default {
  root: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: config.colorUiBgLight,
    color: config.colorTextLight,
    margin: '10px 20px', 
    /*display: inline-flex;*/
    border: '#ccc',
  },
  button: {
    ...config.button,
  },
  refreshButton: {
    ...config.button,
    width: 50,
    marginRight: 4,
  },
  toggleOptionsButton: {
    ...config.button,
    marginRight: 10,
    width: 150
  }
}
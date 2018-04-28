import config from './config';

export default {
  root: {
    flex: 1,
    
    backgroundColor: config.colorUiBg,
    margin: 0,
    padding: 8,
    verticalAlign: 'middle',
    ...config.borders,
    ...config.fonts
  },
  title: {
    display: 'inline-block',
    marginRight: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: config.colorTextLight
  },
  pageTitle: {
    display: 'inline-block',
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'normal',
    color: config.colorTextLighter
  }
}

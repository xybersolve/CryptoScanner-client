/*
  Starting place

*/
const global = {
  gray1: '#363636',
  gray2: '#292b2c',
  borderTop: '#dee2e6',
  borderColor: '#32383e',
  backgroundColor: '#212529',
  backgroundColor: '#2f3241',
  defaultColor: '#eeeeee',
  
  hoverBackgroundColor: '#aaa',
  hoverColor: '#222',
  
  hilightBackground: '#ffff99',
  subduedBackground: '#ccc',
  
  colorText: '#2d2d2d',
  colorTextLight: '#aaa',
  colorTextLighter: '#f2f2f2',
  colorUiBg: '#222',
  colorUiBgLight: '#555',
  colorUiBgLighter: '#aaa',
  colorUiBgHover: '#363636',
  colorBorder: '#181818',

}

const borders = {
  border: '1px solid black',
  borderColor: global.borderColor,
  margin: '0.25em',
  borderRadius: '8px',
}

export default {
  dashboard: { 
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    ...borders,
  },
  header: {
    ...borders,
  },
  toolbar: {
    ...borders
  },
  hotcoinOptions: {
  },
  hotcoins: {
  },
  footer: {
  }
}


/*
export default {
  dashboard: { 
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
  },
  header: {
    flex: 1,
    height: 50,
    ...global.borders,
  },
  toolbar: {
    flex: 1,
    height: 50, 
    ...global.borders,
  },
  hotcoinOptions: {
    height: 0,
    ...global.borders,
  },
  hotcoins: {
    ...global.borders,
  },
  footer: {
    flex: 1,
    height: 100,
    ...global.borders,
  }
}
*/
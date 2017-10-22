function image(url) {
  return `url(${url})`;
}

const backgroundImage = require('../../../../assets/images/background.jpg');

export const styles = // eslint-disable-line import/prefer-default-export
  {
    wrapper: {
      margin: '0 auto',
      backgroundImage: image(backgroundImage),
      width: '1024px',
      height: '768px',
      borderRadius: '20px',
    },
    noDataContainer: {
      margin: '0 auto',
      marginTop: '100px',
    },
  };

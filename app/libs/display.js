import moment from 'moment';
moment.locale('ko');

export default (type, data) => {
  if (type === 'phone') {

    return data.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]{3,4})([0-9]{4})/, '$1-$2-$3');

  } else if (type === 'date') {

    return data && moment(data).format('YYYY.MM.DD');

  } else if (type === 'time') {

    return data && moment(data).format('YYYY.MM.DD HH:mm:ss');

  } else if (type == 'currency') {

    return data && data.toLocaleString();

  } else if (type == 'toFixed') {

    return (data * 100).toFixed(2);

  } else {

    return data;

  }
};

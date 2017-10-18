import swal from 'sweetalert2';

const Simple = (text) => {
  swal(text)
};

const Warning = (text, callback) => {
  swal({
    title: 'Oops!',
    text: text,
    type: 'warning'
  }).then(callback);
};

export { Simple, Warning };

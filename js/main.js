/////////////////// Script for the navigation menu //////////////////

var navigationUl = document.getElementById('navigation-ul');
navigationUl.style.maxHeight = '0px';

function menuToggle() {
  if (navigationUl.style.maxHeight == '0px') {
    navigationUl.style.maxHeight = '100vh';
  } else {
    navigationUl.style.maxHeight = '0px';
  }
}
////////////////////Scroll to top btn ///////////////////
var scrollBtn = document.querySelector('.scroll-btn');

window.onscroll = function () {
  scrollBtn.classList.toggle('show', window.scrollY >= 1000);
};
scrollBtn.onclick = function () {
  window.scrollTo({ behavior: 'smooth', top: 0 });
};

/////////////////////Script for the past event modal popup ///////////////////
var modalOpenPem1 = document.querySelector('.custom-btn-pem1');
var modalOpenPem2 = document.querySelector('.custom-btn-pem2');
var modalOpenPem3 = document.querySelector('.custom-btn-pem3');

var modalBgPem1 = document.querySelector('.pem-1');
var modalBgPem2 = document.querySelector('.pem-2');
var modalBgPem3 = document.querySelector('.pem-3');

var modalClosePem1 = document.querySelector('.exit-pem1');
var modalClosePem2 = document.querySelector('.exit-pem2');
var modalClosePem3 = document.querySelector('.exit-pem3');

///////////////for the first past event modal //////////////
modalOpenPem1.addEventListener('click', function () {
  modalBgPem1.classList.add('modal-active');
});

modalClosePem1.addEventListener('click', function () {
  modalBgPem1.classList.remove('modal-active');
});

/////////////////// for the second past event modal ///////////////////////
modalOpenPem2.addEventListener('click', function () {
  modalBgPem2.classList.add('modal-active');
});

modalClosePem2.addEventListener('click', function () {
  modalBgPem2.classList.remove('modal-active');
});

///////////////for the third past event modal /////////////////////
modalOpenPem3.addEventListener('click', function () {
  modalBgPem3.classList.add('modal-active');
});

modalClosePem3.addEventListener('click', function () {
  modalBgPem3.classList.remove('modal-active');
});

///////////////// flutterwave payment integration for lfc awa online giving///////////////////

const form = document.getElementById('paymentForm');

form.addEventListener('submit', makePayment);

function makePayment(e) {
  ///prevent normal form submittion
  e.preventDefault();

  /////flutterwave configuration settings ///////////////

  FlutterwaveCheckout({
    public_key: 'FLWPUBK_TEST-2aa1cc19c7cf8414c644510c6345c6ba-X',
    tx_ref: 'stoba-' + ' ' + Math.floor(Math.random() * 1000000000 + 1),
    amount: document.getElementById('amount').value,
    currency: 'NGN',

    redirect_url: '#',

    customer: {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone_number: document.getElementById('phone').value,
    },

    customizations: {
      title: 'lfc-awa online giving',
      description: document.getElementById('offering'.value),
      logo: 'https://ibb.co/nR831Xr',
    },

    callback: function (data) {},
  });
}

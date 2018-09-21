console.log("loaded checkout.js");
const stripe = Stripe('pk_test_rmALB2lGQQER0zyeD1O6wsAu');
const elements = stripe.elements();
let $form = $('#checkout-form');

let card = elements.create('card', {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#8898AA',
            color: 'black',
            lineHeight: '36px',
            fontWeight: 300,
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSize: '19px',

            '::placeholder': {
                color: '#8898AA',
            },
        },
        invalid: {
            iconColor: '#e85746',
            color: '#e85746',
        }
    },
    classes: {
        focus: 'is-focused',
        empty: 'is-empty',
    },
});
card.mount('#card-element');

var inputs = document.querySelectorAll('input.field');
Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener('focus', function() {
        input.classList.add('is-focused');
    });
    input.addEventListener('blur', function() {
        input.classList.remove('is-focused');
    });
    input.addEventListener('keyup', function() {
        if (input.value.length === 0) {
            input.classList.add('is-empty');
        } else {
            input.classList.remove('is-empty');
        }
    });
});

function setOutcome(result) {
    let successElement = document.querySelector('.success');
    let errorElement = document.querySelector('.error');
    successElement.classList.remove('visible');
    errorElement.classList.remove('visible');

    if (result.token) {
        // Use the token to create a charge or a customer
        // https://stripe.com/docs/charges
        $form.append($('<input type="hidden" name="stripeToken" value=' + result.token.id + '>'));
        console.log(result.token.id);
        successElement.classList.add('visible');
        $form.get(0).submit();
    } else if (result.error) {
        errorElement.textContent = result.error.message;
        errorElement.classList.add('visible');
    }
}

card.on('change', function(event) {
    setOutcome(event);
});
$form.submit(function(e) {
    e.preventDefault();
    let form = document.querySelector('form');
    let details = {
        name: form.querySelector('input[name=name]').value,
    };
    stripe.createToken(card, details).then(setOutcome);
});
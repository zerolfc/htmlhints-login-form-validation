const constraints = {
	username: {
	  presence: true,
	  length: {
		minimum: 3,
		maximum: 20
	  },
	  format: {
		pattern: "[a-z0-9]+",
		flags: "i",
		message: "can only contain a-z and 0-9"
	  }
	},
	password: {
	  presence: true,
	  length: {
		minimum: 5
	  }
	},
	'pin': {
		presence: true,
		length: {
			minimum: 4
	  	},
		format: {
			
			pattern: "[0-9]+",
			flags: "i",
			message: "can only contain 0-9"
	  }
	}
};
	
const form = document.querySelector('form#login-form');

form.addEventListener('submit', function(e) {
	
	e.preventDefault();
	
	const errors = validate(form, constraints);
	
	showErrors(form, errors || {});
	
	if (!errors) {
		
		Swal.fire({
			title: 'Hello John',
			text: 'You are successfully logged in!',
			icon: 'success',
			allowOutsideClick: false,
			buttonsStyling: false,
			customClass: {
				confirmButton: 'border border-blue-700 bg-blue-600 h-8 px-5 rounded uppercase text-xs text-white tracking-wide shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-700',
			},
		}).then((val) => {
			if(val.value) {
				form.reset();
			}
		});

	}
	
});

function showErrors(form, errors) {
	
	let errorEl = document.getElementById('error-el');
		
	if(!Object.keys(errors).length) {
				
		errorEl.classList.add('hidden');
		
		return false;
		
	}
	
	console.log('error')
	
	let ulErrors = '<ul>';
		
	_.each(errors, (error, key) => {
		ulErrors += `<li>${error}</li>`;
	});
	
	ulErrors += '</ul>';
	
	
	errorEl.classList.remove('hidden');
	errorEl.innerHTML = ulErrors;
		
}
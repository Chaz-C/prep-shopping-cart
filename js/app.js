var products = [
  	{ "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, "img": "../images/jello.jpeg" },
  	{ "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99, "img": "../images/desk.jpeg"},
  	{ "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44, "img": "../images/grenade.jpeg"},
  	{ "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99, "img": "../images/cookie.jpeg" },
  	{ "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32, "img": "../images/hanger.jpeg" },
  	{ "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99, "img": "../images/mustache.jpeg" },
	];
	
	var subTotal = 0;

	function addUp() {
		for ( var j = 0; j < products.length; j ++ ) {
			subTotal += products[j].price;
			console.log(subTotal);
			// console.log(products[j].price + 5);
		}
		return subTotal;
	}

// addUp();
// console.log(subTotal);

// console.log(products[0].description[0]);

	for ( var i = 0; i < products.length; i ++ ) {

		var img = document.createElement('img');
		img.className = 'img';
		img.src = products[i].img;
		main.appendChild(img);

		var itemList = document.createElement('div');
		itemList.className = 'items';
		itemList.innerHTML = products[i].name;
		main.appendChild(itemList);

		var descList = document.createElement('div');
		descList.className = 'description';
		descList.innerHTML = products[i].description[Math.floor(Math.random() * products[i].description.length)];
		main.appendChild(descList);

		var priceList = document.createElement('div');
		priceList.className = 'price';
		priceList.innerHTML = "$" + products[i].price;
		main.appendChild(priceList);



		var hr = document.createElement('hr');
		hr.className = 'hr';
		main.appendChild(hr);
	}

	var total = document.createElement('div');
	total.className = 'subTotal';
	total.innerHTML = "Subtotal:";
	main.appendChild(total);

	var totalData = document.createElement('div');
	totalData.className = 'totalData';
	totalData.innerHTML = "$" + addUp();
	main.appendChild(totalData);





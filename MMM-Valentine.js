/* Magic Mirror
 * Module: MMM-Valentine
 *
 * By Sergey Morozov
 * Based on https://github.com/MichMich/MMM-Snow
 * MIT Licensed.
 */

Module.register("MMM-Valentine",{

	defaults: {
		valentinesCount: 50,
		valentinesSize: 1.00
	},

	getStyles: function() {
		return [ "MMM-Valentine.css" ]
	},

	getDom: function() {
		var wrapper = document.createElement("div")
		wrapper.className = "valentine-wrapper";

		var heart, jiggle, size, rotation;

		for(var i = 0; i < this.config.valentinesCount; i++) {
			heart = document.createElement("div")
			heart.className = "valentine-heart"

			jiggle = document.createElement("div");
			jiggle.style.animationDelay = (Math.random() * 4) + "s";
			jiggle.style.animationDuration = ((Math.random() * 30) + 30) + "s";
			jiggle.className = "heart" + (Math.round(Math.random() * 14) + 1);

			size = (Math.random() * 0.75) + 0.25 + this.config.valentinesSize;
			rotation = (Math.floor(Math.random() * 81) - 40);
			jiggle.style.transform = "scale(" + size + ", " + size + ") rotate(" + rotation + "deg)";
			jiggle.style.opacity = size - this.config.valentinesSize;

			heart.appendChild(jiggle);
			heart.style.left = ((Math.random() * 100) - 10) + "%";
			heart.style.animationDelay = (Math.random() * 100) + "s";
			heart.style.animationDuration = 100 - (Math.random() * 50 * (size - this.config.valentinesSize)) + "s";

			wrapper.appendChild(heart);
		}
		return wrapper;
	}

});

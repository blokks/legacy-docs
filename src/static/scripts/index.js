import Clipboard from 'clipboard';
import { highlightBlock } from 'highlight.js';

// Code blocks
(() => {
	const codeBlocks = document.querySelectorAll('pre code');
	Array.from(codeBlocks).forEach(block => highlightBlock(block));

	new Clipboard(codeBlocks, { target: trigger => trigger });
})();

// Navigation
(() => {
	const ACTIVE = 'table-of-contents__title--selected';
	const HEIGHT = 27;

	const titles = document.querySelectorAll('.table-of-contents__title');
	const articles = document.querySelectorAll('.table-of-contents__articles');

	let currentSelected = document.querySelector(`.${ACTIVE}`);

	const toggleTitle = title => {
		// if (title.classList.contains(ACTIVE)) {
		// 	title.classList.remove(ACTIVE);
		// 	currentSelected = null;

		// 	return;
		// }

		if (currentSelected) {
			currentSelected.classList.remove(ACTIVE);
		}

		if (title === currentSelected) {
			currentSelected = null;
			return;
		}
		else {
			currentSelected = title;
			currentSelected.classList.add(ACTIVE);
		}
	};

	Array.from(titles).forEach(title => {
		title.addEventListener('click', event => toggleTitle(title));
	});	

	Array.from(articles).forEach(article => {
		article.style.height = `${article.childElementCount * HEIGHT}px`;
	});
})();

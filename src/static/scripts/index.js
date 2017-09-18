import Clipboard from 'clipboard';
import Url from 'url';
import { highlightBlock } from 'highlight.js';

// Code blocks
(() => {
	const codeBlocks = document.querySelectorAll('pre code');
	Array.from(codeBlocks).forEach(block => highlightBlock(block));

	new Clipboard(codeBlocks, { target: trigger => trigger });
})();

// Add links to subtitles
(() => {
	const subtitles = document.querySelectorAll('h2, h3, h4');
	Array.from(subtitles).forEach(subtitle => {
		const currentHref = window.location.href.replace(window.location.hash, '');
		subtitle.addEventListener('click', event => {
			window.history.pushState(null, null, `${currentHref}#${subtitle.id}`);
		});
	});
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

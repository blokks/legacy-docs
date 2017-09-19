import Clipboard from 'clipboard';
import Url from 'url';
import { highlightBlock } from 'highlight.js';

var navigationHeight = 0;

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
		const height = article.childElementCount * HEIGHT;
		article.style.maxHeight = `${height}px`;

		navigationHeight += height + 16 + 35;
	});
})();

(() => {
	const ACTIVE = 'table-of-contents__toggle-button--selected';

	const toggleButton = document.getElementById('toggleButton');
	const menuContent = document.getElementById('menuContent');

	menuContent.style.maxHeight = `${navigationHeight}px`;
	toggleButton.addEventListener('click', () => toggleButton.classList.toggle(ACTIVE));
})();

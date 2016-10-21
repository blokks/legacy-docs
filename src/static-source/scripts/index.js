'use strict';

import { highlightBlock } from 'highlight.js';

const codeBlocks = document.querySelectorAll('pre code');
Array.from(codeBlocks).forEach((block) => highlightBlock(block));

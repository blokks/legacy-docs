'use strict';

import Clipboard from 'clipboard';
import { highlightBlock } from 'highlight.js';

const codeBlocks = document.querySelectorAll('pre code');
Array.from(codeBlocks).forEach((block) => highlightBlock(block));

new Clipboard(codeBlocks, { target: (trigger) => trigger });

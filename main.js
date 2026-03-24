import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealZoom from 'reveal.js/plugin/zoom';
import RevealSearch from 'reveal.js/plugin/search';

import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'highlight.js/styles/vs2015.css';
import './style.css';

Reveal.initialize({
    slideNumber: true,
    hash: true,
    controlsTutorial: false,
    plugins: [RevealMarkdown, RevealHighlight, RevealZoom, RevealSearch],
});

'use strict';

/**
 * Converter for details element.
 * Strips confluence div wrapper into proper details element.
 */
module.exports = function(mdConverter, structure, pageDetails) {
    return {
        filter: node => node.className == 'expand-container',
        replacement: (innerHTML, node) => (     
`<details>
<summary>${node.firstChild.textContent}</summary>
<div markdown="1">
${mdConverter(structure, pageDetails, node.lastChild.innerHTML)}    
</div>
</details>`
        )
    };
};
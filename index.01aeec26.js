document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".tree");e.querySelectorAll("li").forEach(function(e){var t=e.childNodes[0];if(t.nodeType===Node.TEXT_NODE){var n=document.createElement("span");n.textContent=t.textContent.trim(),e.insertBefore(n,t),e.removeChild(t)}}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.parentElement.querySelector("ul");t&&(t.hidden=!t.hidden)}})});
//# sourceMappingURL=index.01aeec26.js.map
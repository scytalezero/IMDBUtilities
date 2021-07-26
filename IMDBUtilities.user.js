// ==UserScript==
// @name         IMDB utilities
// @namespace    https://ligature.me/
// @version      1.1.0
// @description  Make the site better
// @author       ScytaleZero
// @match        https://www.imdb.com/title/*
// @match        https://m.imdb.com/title/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  //Add youtube trailer link
  const title = document.querySelector('.title_wrapper > h1') || document.querySelector('.media-body > h1')
  const youtubeLink = document.createElement('a')
  youtubeLink.innerText = 'Youtube'
  youtubeLink.style = 'color: OrangeRed; margin: 0 0.5rem;'
  youtubeLink.target = '_blank'
  youtubeLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(title.textContent.trim().replace(/\s+/g, ' ') + ' trailer')}`

  //Add Meta link
  const metaLink = document.createElement('a')
  metaLink.innerText = 'Meta'
  metaLink.style = 'color: OrangeRed; margin: 0 0.5rem;'
  metaLink.target = '_blank'
  metaLink.href = `http://ligature.me/apps/meta.htm?t=movies&s=${encodeURIComponent(title.textContent.trim().replace(/\s+/g, ' '))}`

  title.parentElement.insertBefore(youtubeLink, title)
  title.parentElement.insertBefore(metaLink, title)
})();

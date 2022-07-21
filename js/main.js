import { thumbnail } from './data.js';
import { createThumbnail } from './thumbnail.js';
import { openModalWindow } from './big-photo.js';
import './form.js';
import './validate.js';

createThumbnail(thumbnail);

const container = document.querySelector('.pictures');
container.addEventListener('click', openModalWindow);


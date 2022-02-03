import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { checkUrl } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const x = document.getElementById("1");
const y = document.getElementById("2");
const z = document.getElementById("3");
const error = document.getElementById("error");
let text = document.getElementById("text");
const form = document.getElementById("form");

form.addEventListener("submit", (evt) => {
    return handleSubmit(evt, x, y, z, error, text);
  });

export {
    checkForName,
    handleSubmit,
    checkUrl
}
const ul = document.querySelector('ul');
const input = document.querySelector('input');

let tags = ['reactjs', 'html', 'css', 'nodejs'];


function createTag() {
  ul.querySelectorAll('li').forEach(li => li.remove())
  tags.slice().reverse().forEach((tag) => {
    let liTag = `<li>${tag}<i class="fas fa-times" onclick="removeTag(this, '${tag}')"></i></li>`;
    ul.insertAdjacentHTML('afterbegin', liTag);
  })
  input.focus()
}
createTag()

function removeTag(element, tag) {
  let index = tags.indexOf(tag);
  tags.splice(index, 1);
  element.parentElement.remove();
}

function addTag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.trim();
    if(tag != "" && !tags.includes(tag)) {
      tags.push(tag)
      createTag();
    }
    e.target.value = '';
  }
}

input.addEventListener('keyup', addTag);

document.querySelector('.btn-removeAll').addEventListener('click', () => {
  tags.length = 0;
  ul.querySelectorAll('li').forEach(li => li.remove())
  input.focus()
})
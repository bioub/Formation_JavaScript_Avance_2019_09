export function prepend(parent, child) {
  if (parent.childElementCount) {
    parent.insertBefore(child, parent.firstElementChild);
  } else {
    parent.appendChild(child);
  }
}

export const TEST = 'TEST';

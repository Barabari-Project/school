import { writable } from 'svelte/store';

export const toasts = writable([]);

function remove (id) {
  toasts.update((t) => {
    t = t.filter((toast) => toast.id !== id);
    console.log(t);

    return t;
  });
}

function add (text, type = 0) {
  const id = (Math.random() * 10e5 | 0).toString(36);
  console.log("adding toast", text, type, id);


  toasts.update((t) => {
    t.push({ message: text, type, id });
    return t;
  });

  console.log(toasts);

  setTimeout(() => {
    remove(id);
  }, 3000);
}

export default {
  add,
  remove
}
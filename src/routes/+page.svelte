<script lang="ts">
  import { p1 } from "microback";
  import { getMounted, store } from "./utils";
  import CodeMirror from "sveltemirror";
  import { html } from "@codemirror/lang-html";
  import Toast from "../components/toast.svelte";
  import { onMount } from "svelte";
  import Toaster, { toasts } from "./toasts";

  import type { EditorView } from "@codemirror/view";

  let //
    value = "",
    doc,
    frame,
    view: EditorView,
    offset = 0,
    innerWidth;

  const write = (text) => {
    doc.open();
    doc.write(text);
    doc.close();
  };

  const preprocess = (text) => {
    if (!text.includes("img")) return text;

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const images = doc.querySelectorAll("img");
    for (const img of images) {
      // its a google image extract the url
      if (img.src.includes("google.com")) {
        img.src = new URL(img.src).searchParams.get("url");
        console.log(img.src);
      }

      img.src = p1.none(img.src);
      img.setAttribute("loading", "lazy");
      img.setAttribute("decoding", "async");
      img.setAttribute("crossorigin", "anonymous");
    }

    return doc.documentElement.outerHTML;
  };

  const handleChange = () => {
    write(preprocess(value));
    store(value);
  };

  const insertEdit = (char) => {
    view.dispatch({
      changes: { from: offset, insert: char },
      selection: {
        anchor: offset + 1,
        head: offset + 1,
      },
    });
    offset += char.length;
    view.focus();
    handleChange();
  };

  const action = {
    rangle: () => insertEdit(">"),
    langle: () => insertEdit("<"),
    rcurly: () => insertEdit("}"),
    lcurly: () => insertEdit("{"),
    copy: () => {
      navigator.clipboard.writeText(value);
      Toaster.add("Copied!");
    },
    clear: () => {
      value = "";
      Toaster.add("Cleared!");
    },
  };

  const handleAction = ({ target }) => {
    const id = target.id;
    if (!id) return 0;
    action[id]();
  };

  onMount(() => {
    value = getMounted();
    if (!doc) doc = frame.contentWindow.document;
    write(value);

    Toaster.add("Compiler Loaded!");
    window.editor = view;
  });

  const handleClick = (e) => {
    const t = e.target;
    if (!t.classList.contains("cm-line")) return 0;

    let [x, y] = [e.clientX, e.clientY];
    offset = view.posAtCoords({ x, y });
  };
</script>

<svelte:window bind:innerWidth on:click={handleClick} />

<main class="f fw">
  <div class="editor p-rel">
    <CodeMirror
      bind:value
      bind:view
      lang={html()}
      styles={{
        "&": {
          fontSize: "18px",
          height: "100%",
          width: "100%",
        },
      }}
      lineWrapping={true}
      on:change={handleChange}
    />
  </div>
  {#if innerWidth <= 768}
    <div class="p5 f buttons w-100 flow-x-s" on:click={handleAction}>
      <button id="langle">&lt;</button>
      <button id="rangle">&gt;</button>
      <button id="lcurly">&#123;</button>
      <button id="rcurly">&#125;</button>
      <button id="copy">CopyAll</button>
      <button id="clear">Clear</button>
    </div>
  {/if}
  <iframe id="mfWHAT" bind:this={frame} frameborder="0" title="Editor Output" />
</main>
<div id="toaster" class="p-fix w-100 tc f-col">
  {#if $toasts.length}
    {#each $toasts as toast}
      <Toast message={toast.message} type={toast.type} />
    {/each}
  {/if}
</div>

<style lang="scss">
  .buttons {
    background: #fc3;
    button {
      color: #fff;
      border-radius: 5px;
      padding: 5px;
      min-width: 3ch;
      margin: 2px 5px;
      background: #349;
    }
  }
  #toaster {
    pointer-events: none;
    bottom: 0;
    left: 0;
  }
  main {
    width: 100vw;
    height: 100vh;
    background: #888;
  }

  .editor,
  iframe {
    width: 50%;
    height: 100%;
    background: #ccc;
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    .editor,
    iframe {
      width: 100%;
      height: calc(50vh - 0.5em - 14px);
    }
  }

  iframe {
    background: #eee;
  }
</style>

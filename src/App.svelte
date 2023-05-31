<script lang="ts">
  import { onMount } from "svelte";

  import { EditorView, basicSetup } from "codemirror";
  // import { javascript } from "@codemirror/lang-javascript";

  let editor;
  onMount(() => {
    editor = new EditorView({
      extensions: [
        basicSetup,
        // javascript()
      ],
      parent: document.querySelector("#editor"),
    });
  });
</script>

<main class="f fw">
  <div id="editor" />
  <iframe src="#" frameborder="0" title="Editor Output" />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    background: #888;
  }
  #editor,
  iframe {
    width: 50%;
    height: 100%;
    background: #ccc;
  }
  @media (max-width: 768px) {
    #editor,
    iframe {
      width: 100%;
      height: 50%;
    }
  }
</style>

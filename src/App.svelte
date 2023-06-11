<script lang="ts">
  import { onMount } from "svelte";
  import CodeMirror from "svelte-codemirror-editor";
  import { html } from "@codemirror/lang-html";

  let frame;
  let value = `<h1>Hello World</h1>`;
  onMount(() => {});

  let old;
  const handleChange = () => {
    const current = value;
    if (old === current) return 0;

    old = current;
    const doc = frame.contentWindow.document;
    doc.open();
    doc.write(current);
    doc.close();
  };
</script>

<main class="f fw">
  <div class="editor">
    <CodeMirror
      bind:value
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
  <iframe
    id="mfWHAT"
    src="#"
    bind:this={frame}
    frameborder="0"
    title="Editor Output"
  />
</main>

<style>
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
  }

  @media (max-width: 768px) {
    .editor,
    iframe {
      width: 100%;
      height: 50%;
    }
  }
</style>

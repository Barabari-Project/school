<script lang="ts">
  import Template from "../../templates/basic.html?raw";
  import CodeMirror from "sveltemirror";
  import { html } from "@codemirror/lang-html";
  import Toast from "../../components/toast.svelte";
  import { onMount } from "svelte";
  import Toaster, { toasts } from "../toasts";

  let //
    value = "",
    frame,
    doc;

  const write = (text) => {
    doc.open();
    doc.write(text);
    doc.close();
  };

  const handleChange = () => write(current);

  onMount(() => {
    value = Template;
    if (!doc) doc = frame.contentWindow.document;
    write(value);

    Toaster.add("Compiler Loaded!"); // green
  });

  const handleMessage = ({ data }) => {
    if (data.type !== "code") return 0; // ignore if not code

    const { code } = data;
    value = code;
    write(code);
  };
</script>

<svelte:window on:message={handleMessage} />

<main class="f fw">
  <div class="editor p-rel">
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
  <iframe id="mfWHAT" frameborder="0" title="Editor Output" bind:this={frame} />
</main>
<div id="toaster" class="p-fix w-100 tc f-col">
  {#if $toasts.length}
    {#each $toasts as toast}
      <Toast message={toast.message} type={toast.type} />
    {/each}
  {/if}
</div>

<style lang="scss">
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
      height: 50%;
    }
  }

  iframe {
    background: #eee;
  }
</style>

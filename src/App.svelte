<script lang="ts">
  import { onMount } from "svelte";

  import { EditorView, basicSetup } from "codemirror";
  import { javascript } from "@codemirror/lang-javascript";

  let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: document.body,
  });
</script>

<main class="f">
  <iframe src="#" frameborder="0" />
</main>

<style>
</style>

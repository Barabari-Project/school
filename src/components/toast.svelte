<script>
  export let message;
  export let type = 0;
</script>

<div class="toast rx2 p5 fade-up" {type}>
  {message}
</div>

<style>
  .toast {
    margin: 5px auto;
    min-width: 200px;
    max-width: 95%;
    background: #222;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    z-index: 100;
  }
  [type="0"] {
    background: #4f4;
  }
  [type="1"] {
    background: #f44;
  }

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-up {
    animation: fade-up 0.5s ease-in-out;
  }
</style>

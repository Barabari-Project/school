const iframeCont = document.querySelector( 'iframe' );
const iframe = iframeCont.contentWindow;
const addIds = document
  .querySelectorAll( 'section' )
  .forEach( ( section, index ) => {
    if ( !section.id ) section.id = index;
  } );

function send ( code ) {
  iframe.postMessage( { type: 'code', code }, '*' )
};


let current, sub, div;
Reveal.initialize( {
  history: true
} );
Reveal.addEventListener( 'slidechanged', ( e ) => {
  current = e.indexh;
  sub = e.indexv;
  div = e.currentSlide;

  const showEditor = div.getAttribute( 'show' ) !== null;
  const maxEditor = div.getAttribute( 'editorMax' ) !== null;

  console.log( showEditor, maxEditor );
  if ( showEditor ) {
    iframeCont.classList.add( 'show' );
    if ( maxEditor ) {
      iframeCont.classList.add( 'editorMax' );
    } else {
      iframeCont.classList.remove( 'editorMax' );
    }

    /* on editor show if code exists render it
    - code needs to be in an attribute since `code` tag cannot take inline HTML as inner text
    it will need to be escaped which is not good for DX
    */
    const code = div.getAttribute( 'code' );
    if ( code ) {
      send( code );
    }
  } else {
    iframeCont.classList.remove( 'show' );
  }
} );
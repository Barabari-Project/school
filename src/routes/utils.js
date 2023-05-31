import Template from "../templates/basic.html?raw";

export const store = ( str ) => {
  localStorage.setItem( "bbi-code", JSON.stringify( {
    code: str,
    date: Date.now() / 1000
  } ) );

  return str;
};

export const getMounted = () => {
  const stored = localStorage.getItem( "bbi-code" );
  if ( stored ) {
    const { code, date } = JSON.parse( stored );

    let diff = ( Date.now() / 1000 ) - +date;
    diff = diff / 3600

    if ( diff < 2 ) {
      console.log( "Mounted with saved:", code );
      return code;
    } else {
      localStorage.removeItem( "bbi-code" );
    }
  }

  console.log( "Mounted with default" );
  return Template;
}
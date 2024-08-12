
export const base64_To_PDF =  (base64: string) => {
    if (base64) {
      const newWindows = window.open();
      
      if(newWindows){
        newWindows.document.write(
          '<embed width="100%" height="100%" ' +
          'src="' + base64 + '"' + 'type="application/pdf" />'
        )
      }else{
        alert("Authoriser les popups");
      }
      
    } else {
      console.error('La chaîne Base64 du PDF est vide ou non définie.');
    }
}
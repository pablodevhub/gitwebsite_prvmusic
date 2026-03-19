// *************************************************************
// Funzione per impostare il tema scuro bootstrap 
// in base alle preferenze del sistema
// per impostare il tema scuro su bootstrap bisogna aggiungere il seguente attributo al tag html
// data-bs-theme="dark"
// function setThemeFromSystem() {
//   const html = document.documentElement;
  
//   // Controlla se l'utente preferisce il tema scuro
//   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     html.setAttribute('data-bs-theme', 'dark');
//   } else {
//     html.setAttribute('data-bs-theme', 'light');
//   }
// }

// // Esegui al caricamento della pagina
// setThemeFromSystem();

// // Ascolta i cambiamenti nelle preferenze del sistema (se l'utente cambia tema mentre è sul sito)
// if (window.matchMedia) {
//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
//     document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
//   });
// }
// *************************************************************


// Funzione per aggiornare le immagini in base al tema
function updateImagesBasedOnTheme() {
    // Seleziona tutte le img con attributi data-src-light o data-src-dark
    $('img[data-src-light], img[data-src-dark]').each(function() {
        var $img = $(this);
        var theme = $('html').attr('data-bs-theme');  // Ottiene il tema dall'<html>
        
        if (theme === 'dark') {
            // Usa src dark se disponibile, altrimenti fallback su light
            var srcDark = $img.data('src-dark');
            if (srcDark) {
                $img.attr('src', srcDark);
            }
        } else {
            // Usa src light (default per tema chiaro)
            var srcLight = $img.data('src-light');
            if (srcLight) {
                $img.attr('src', srcLight);
            }
        }
    });
}


$(document).ready(function() {
    console.log('jQuery caricato! Framework inizializzato.');
    
    updateImagesBasedOnTheme();
    // Opzionale: Se cambi il tema dinamicamente (es. con un bottone), chiama questa funzione dopo il cambio.
    // Esempio: $('html').attr('data-bs-theme', 'dark'); updateImagesBasedOnTheme();
});
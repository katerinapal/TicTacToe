
    var board = createBoard();  // Create an instance of the Bingo Board
    $(document).ready(function() {   
        $('td').click(function () {  // When a td is clicked...
            clicky(this, board);  // Change the class to identify it has been clicked - this = 'td', board = createBoard object
            checkWin(this, board);
        });
   });

var pkBaseURL = (("https:" == document.location.protocol) ? "https://analytics.seanriordan.com/" : "http://analytics.seanriordan.com/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));

try {
var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 3);
piwikTracker.trackPageView();
piwikTracker.enableLinkTracking();
} catch( err ) {}
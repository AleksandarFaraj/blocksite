// google analytics
var _AnalyticsCode = 'UA-109303461-1';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', _AnalyticsCode]);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

function trackButtonClick(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
}


function showStatusMessage(message, color) {
        
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.style.color = color;
        status.textContent = message;
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    }
    
function convertTxtToRegex(uInput) {
    
    return uInput.replace(/\n/g, ' ').replace(/ +/g, ' ').replace(/ +$/gm, '').replace(/^ +/gm, '').replace(/^/gm, '(').replace(/$/gm, ')').replace(/ +/g, ')|(').replace(/[.\/]/g, '\\$&');
    
};

function convertInnerTextToBoolean(label) {
    if(label == "Disable") { 
        document.getElementById('save').disabled = true;
        document.getElementById('uInput').disabled = true;
        document.getElementById('disableBtn').innerText = "Enable";
        return true;
        
    } else {
        document.getElementById('save').disabled = false;
        document.getElementById('uInput').disabled = false;
        document.getElementById('disableBtn').innerText = "Disable";
        return false;
        
    }
};

function validate(disableStatus) {
    
    var uInput = document.getElementById('uInput').value;
    var regex = convertTxtToRegex(uInput);

    if(typeof(uInput !== 'undefined')) {
        
        if(/[^a-zA-Z0-9.:\/\s\-_]/g.test(uInput)) {
            
            showStatusMessage('Incorrect input', 'red');
            
        } else if (/\(.{1,3}\)\|?/g.test(regex)) {
                 
                 showStatusMessage("Too short hostname", "red");
            
        } else {
            
            if(/^\(\)$/gm.test(regex)) {
                regex = null;
                uInput = null;
            }
                
                save_options(regex, uInput, convertInnerTextToBoolean(disableStatus) );

        }
        
    }
};

function save_options(pattern, txt, disableStatus ) {
    
    chrome.storage.sync.set({ 
        pattern:  pattern,
        txt: txt,
        disable: disableStatus
    }, showStatusMessage("Options saved","green")
        
    );
};


function restore_options() {
    
    chrome.storage.sync.get(null, function(items) {
        
        if(typeof(items.pattern) !== 'undefined') {
            
                document.getElementById('uInput').value = items.txt;
                
                if(items.disable == true) {
                    
                    convertInnerTextToBoolean("Disable");     
                    
                } else {
                    
                    convertInnerTextToBoolean("Enable");
                    
                }

            }
      });
};

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('save').addEventListener('click', validate);
document.getElementById('save').addEventListener('click', trackButtonClick);


document.getElementById('disableBtn').addEventListener('click', function() {
    validate(document.getElementById('disableBtn').innerText);
});

document.getElementById('disableBtn').addEventListener('click', trackButtonClick);

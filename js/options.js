function showStatusMessage(message, color) {
        
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.style.color = color;
        status.textContent = message;
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    }

function validate() {
    
    var uInput = document.getElementById('uInput').value;

    if(typeof(uInput !== 'undefined')) {
        
        if(/[^a-zA-Z0-9.:\/\s\-_]/g.test(uInput)) {
            
            showStatusMessage('Incorrect input', 'red');
            
        } else {
            
             var regex = convertTxtToRegex(uInput);
             
             if(/^\(\)$/gm.test(regex)) {
                 
                 regex = null;
                 uInput = null;
                 
             }
                
                save_options(regex, uInput);
        }
        
    }
};

function convertTxtToRegex(uInput) {
    
    return uInput.replace(/\n/g, ' ').replace(/ +/g, ' ').replace(/ +$/gm, '').replace(/^ +/gm, '').replace(/^/gm, '(').replace(/$/gm, ')').replace(/ +/g, ')|(').replace(/[.\/]/g, '\\$&');
    
};

function save_options(pattern, txt ) {
    
    chrome.storage.sync.set({ 
        pattern:  pattern,
        txt: txt
    }, showStatusMessage("Options saved","green")
        
    );
};


function restore_options() {
    
    chrome.storage.sync.get(null, function(items) {
        
        if(typeof(items.pattern) !== 'undefined') {
            
                document.getElementById('uInput').value = items.txt;

            }
      });
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', validate);

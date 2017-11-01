function showStatusMessage(message, color) {
        
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.style.color = color;
        status.textContent = message;
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    }
    
function switchRegex() {
    
    if(document.getElementById('regexField').disabled == true) {
        
        document.getElementById('regexField').disabled = false;
        document.getElementById('regexBtn').innerText = "disableRegex";
        showStatusMessage("Regex is ENABLED", "green");
        
    } else {
        document.getElementById('regexField').disabled = true;
        document.getElementById('regexBtn').innerText = "enableRegex";
        showStatusMessage("Regex is DISABLED", "green");
    }
};

function checkingChain() {
    
    var uInput = document.getElementById('uInput').value;
    var regex = document.getElementById('regexField').value;

    if(typeof(uInput !== 'undefined')) {
//        showStatusMessage("Not undefined", "red");
        
        if(/^[a-zA-Z0-9.:\/\s\-_]+$/gm.test(uInput)) {
//            showStatusMessage("Correct input", "red");
            var regexDisabled = document.getElementById('regexField').disabled;
            
            if(regexDisabled === false) {
                
                var regex = document.getElementById('regexField').value;
                
                var re = new RegExp(regex, 'i');
                
                if(re.test("o")) {
                    
                    showStatusMessage("Can't be saved, make your regex more STRICT", "red");
                    
                } else {
//                    showStatusMessage("First else", "red");
                    save_options(concatenate(convertTxtToRegex(uInput), regex), uInput, false, regex);
                }
            } else {
//                showStatusMessage("Second else", "red");
                save_options(convertTxtToRegex(uInput), uInput, true, regex);
            }
        } else {
            showStatusMessage(uInput, "red");
        }
    }
};


function convertTxtToRegex(uInput) {
    
    return uInput.replace(/\n/g, ' ').replace(/ +/g, ' ').replace(/ +$/gm, '').replace(/^ +/gm, '').replace(/^/gm, '(').replace(/$/gm, ')').replace(/ +/g, ')|(').replace(/[.\/]/g, '\\$&');
    
};

function concatenate(uInput, regex) {
    return uInput.concat('|(').concat(regex.replace(/ +/g, '')).concat(')');
};


function save_options(uInput, txt, regexFlag, regex ) {
    
    chrome.storage.sync.set({ 
        pattern:  uInput,
        txt: txt,
        extraRegex: regex,
        regexFlag: regexFlag
    }, showStatusMessage("Options saved","green")
        
    );
};


function restore_options() {
    
    chrome.storage.sync.get(null, function(items) {
        
        if(typeof(items.pattern) !== 'undefined') {
            
                document.getElementById('uInput').value = items.txt;
                document.getElementById('regexField').value = items.extraRegex;
                
                if (!items.regexFlag) {
                    document.getElementById('regexField').disabled = items.regexFlag;
                    document.getElementById('regexBtn').innerText = "disableRegex";
                } else {
                    document.getElementById('regexField').disabled = items.regexFlag;
                    document.getElementById('regexBtn').innerText = "enableRegex";
                }
            }
      });
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', checkingChain);
document.getElementById('regexBtn').addEventListener('click', switchRegex);

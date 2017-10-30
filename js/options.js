// Saves options to chrome.storage

function save_options() {
    
    var user_pattern = document.getElementById('user_pattern').value;
    
    chrome.storage.sync.set({ pattern:  user_pattern }, function() {
        
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}


function restore_options() {
    
    chrome.storage.sync.get(null, function(items) {
        
        if(typeof(items.pattern) !== 'undefined') {
          document.getElementById('user_pattern').value = items.pattern;
      }
  });
};

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

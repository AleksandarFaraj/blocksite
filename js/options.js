// Saves options to chrome.storage

function save_options() {
    var elements = document.getElementsByTagName("input");
    var stopList = [];
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].type == 'text') {
            stopList.push(elements[i].value);
            alert(elements[i]);
        }
    }
    
    chrome.storage.sync.set({
        stop1: stopList[0],
        stop2: stopList[1],
        stop3: stopList[2],
        stop4: stopList[3],
        stop5: stopList[4],
        stop6: stopList[5],
        stop7: stopList[6]
    }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(null, function(items) {
    document.getElementById('first').value = items.stop1;
    document.getElementById('second').value = items.stop2;
    document.getElementById('third').value = items.stop3;
    document.getElementById('fourth').value = items.stop4;
    document.getElementById('fifth').value = items.stop5;
    document.getElementById('sixth').value = items.stop4;
    document.getElementById('seventh').value = items.stop5;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

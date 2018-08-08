//Written By: @Rakqesh
//Created on: 8 August, 2018

// content.js

//Listen to the "mouseup" event ==> when releasing a mouse button
function CopyTextToClipboard(){
	document.body.addEventListener('mouseup', function(){
		var selected = getSelectionText() // 
		if (selected.length > 0){ // if selected text length is greater than 0
			var copysuccess = copySelectionText() // copy user selected text to clipboard
		}
	}, false)
}

//get selected text
function getSelectionText(){
	var selectedText = "";
	if (window.getSelection){ // all modern browsers and IE9+
		selectedText = window.getSelection().toString();
	}
	return selectedText;
}
	
//Copy selected text
function copySelectionText(){
    var copysuccess // var to check whether execCommand successfully executed
    try{
        copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}

window.onload = CopyTextToClipboard;
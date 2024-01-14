/*
 * function to prevent double submission of forms
 */

function initSubmitOnce()
{
    var func = new Function("this.parentNode.insertBefore(document.createElement('p').appendChild(document.createTextNode('Please wait...')).parentNode, this);this.style.display = 'none';");

    var allForms = document.getElementsByTagName("FORM");

    for (var loop = 0; loop < allForms.length; loop++)
    {
        var theForm = allForms[loop];

        if (typeof theForm.onsubmit != 'function')
        {
            theForm.onsubmit = func;
        }
        else
        {
			var oldsubmit = theForm.onsubmit;
            theForm.onsubmit = function() { if (oldsubmit() == false) { return false; } func(); }
        }
    }
}

// from http://www.brothercake.com/site/resources/scripts/onload/
function addLoadEvent(func)
{
	if(typeof window.addEventListener != 'undefined')
	{
		//.. gecko, safari, konqueror and standard
		window.addEventListener('load', func, false);
	}
	else if(typeof document.addEventListener != 'undefined')
	{
		//.. opera 7
		document.addEventListener('load', func, false);
	}
	else if(typeof window.attachEvent != 'undefined')
	{
		//.. win/ie
		window.attachEvent('onload', func);
	}
	else
	{
		//.. mac/ie5 and anything else that gets this far
		
		//if there's an existing onload function
		if(typeof window.onload == 'function')
		{
			//store it
			var existing = onload;
			
			//add new onload handler
			window.onload = function()
			{
				//call existing onload function
				existing();
				
				//call generic onload function
				func();
			};
		}
		else
		{
			//setup onload function
			window.onload = func;
		}
	}
}
addLoadEvent(initSubmitOnce);

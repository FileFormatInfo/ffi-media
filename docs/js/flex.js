function writeFlex(name, urlWithoutExtension, queryString)
{
    var hasRequestedVersion = DetectFlashVer(9, 0, 0);
    if (hasRequestedVersion)
    {
		AC_FL_RunContent(
					"src", urlWithoutExtension,
					"width", "100%",
					"height", "100%",
					"align", "middle",
					"id", "explorer",
					"quality", "high",
					"bgcolor", "#869ca7",
					"name", name,
					"allowScriptAccess","sameDomain",
                    "allowFullScreen", "true",
					"type", "application/x-shockwave-flash",
					"pluginspage", "http://www.adobe.com/go/getflashplayer",
					"flashvars", queryString
        );
    }
    else
    {
        var alternateContent = '<p>This content requires the Adobe Flash Player version 9 or better. '
        + '<a href=http://www.adobe.com/go/getflash/>Get Flash</a></p>';
        document.write(alternateContent);  
    }
}


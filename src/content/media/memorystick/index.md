---
title: "MemoryStick"
handle: "memorystick"
indexEntries: ["MemoryStick"]
imgCount: 3
technology: "flash-memory"
capacities: [ "256 MB" ]
width: 50.0
height: 21.5
depth: 2.75
---
<%@ page contentType="text/html;charset=utf-8"
		 errorPage="/_err/500.htm"
		 import="info.fileformat.data.*,
				 info.fileformat.ui.*,
				 info.fileformat.util.*,
				 info.fileformat.web.*"
%><!DOCTYPE html>
<html>
<head>
<%UI.getMeta(out, application, request);%>
<title>MemoryStick</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>Memory Stick</h1>
<p><b>Also known as:</b> MemoryStick PRO, Memory Stick, Memory Stick PRO</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Flash Memory</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>50.0 mm x 21.5 mm x 2.8 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1998</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>4 MB to 4 GB<br/>
			PRO: to 32 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Sony</td>
	</tr>
	<tr>
		<td valign="top">Website</td>
		<td>Consumers: <a href="http://www.memorystick.com/">www.memorystick.com</a><br/>
			Developers: <a href="http://www.memorystick.org/">www.memorystick.org</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Memory_Stick">Memory_Stick</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>Smaller variations:<br/>
			<a href="../memorystick-duo/index.htm">MemoryStick Duo</a><br/>
			<a href="../memorystick-micro/index.htm">MemoryStick Micro</a><br/>
		</td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>

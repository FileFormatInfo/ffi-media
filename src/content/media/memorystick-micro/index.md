---
title: "MemoryStick Micro (M2)"
handle: "memorystick-micro"
indexEntries: ["MemoryStick Micro (M2)", "M2"]
imgCount: 3
technology: "flash-memory"
capacities: [ "512 MB" ]
width: 15.0
height: 12.4
depth: 1.2
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
<title>MemoryStick Micro (M2)</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>MemoryStick Micro</h1>
<p><b>Also known as:</b> M2, Memory Stick Micro</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Flash memory</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>15 mm x 12.5 mm x 1.2 mm</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>2006</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>128 MB to 4 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Sony</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.memorystick.com/">memorystick.com</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/Memory_Stick#Memory_Stick_Micro">Memory_Stick#Memory_Stick_Micro</a></td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td><a href="../memorystick/index.htm">MemoryStick</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>

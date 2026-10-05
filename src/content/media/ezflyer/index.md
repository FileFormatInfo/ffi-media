---
title: "SyQuest EZFlyer"
handle: "ezflyer"
indexEntries: ["SyQuest EZFlyer", "EZFlyer"]
imgCount: 3
technology: "magnetic-disk"
capacities: [ "135 MB" ]
width: 98.1
height: 97.1
depth: 9.5
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
<title>SyQuest EZFlyer</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1>SyQuest EZFlyer</h1>
<p><b>Also known as:</b> ez-flyer, ez135, ez-135</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>Magnetic disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1995</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>EZ135: 135 MB<br/>
			EzFlyer: 230 MB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>SyQuest</td>
	</tr>
	<tr>
		<td>Website</td>
		<td><a href="http://www.syquest.com/">syquest.com</a></td>
	</tr>
	<tr>
		<td>Wikipedia</td>
		<td><a href="http://en.wikipedia.org/wiki/SyQuest_EZ_135_Drive">SyQuest_EZ_135_Drive</a></td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>

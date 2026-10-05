---
title: "Compact Disk (CD)"
handle: "compact-disk"
indexEntries: ["Compact Disk (CD)", "DVD"]
imgCount: 4
technology: "optical-disk"
capacities: [ "700 MB" ]
width: 120.0
height: 120.0
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
<title>Compact Disk (CD)</title>
<script type="text/javascript" src="/js/cookie.js"></script>
</head>
<body>
<%UI.getHeader(out, application, request, response);%>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<h1><img src="compact-disk.png" alt="CD icon" style="vertical-align:middle;" border="0" /> Compact Disk (CD)</h1>
<p><b>Also known as:</b> CD-ROM, CD-R, CD-RW, SACD, VCD, SVCD, PhotoCD, PictureCD, CD-i, DVD, DVD+R, DVD+RW, DVD-R, DVD-RW, DVD-RAM</p>
<hr />
<h2>Summary</h2>
<table class="table table-bordered table-striped table-auto">
	<tr>
		<td>Technology</td>
		<td>optical disk</td>
	</tr>
	<tr>
		<td>Dimensions</td>
		<td>120 mm diameter x 1.2 mm thick</td>
	</tr>
	<tr>
		<td>Date Introduced</td>
		<td>1982</td>
	</tr>
	<tr>
		<td valign="top">Storage Capacity</td>
		<td>
			CD-ROM: 640 to 700 MB<br/>
			Single-layer DVD: 4.7 GB<br/>
			Dual-layer DVD: 8.5 GB</td>
	</tr>
	<tr>
		<td>Created by</td>
		<td>Philips, Sony</td>
	</tr>
	<tr>
		<td>Standards</td>
		<td><a href="http://www.ecma-international.org/publications/standards/Ecma-130.htm">ECMA-130</a></td>
	</tr>
	<tr>
		<td valign="top">Wikipedia</td>
		<td>
			<a href="http://en.wikipedia.org/wiki/Compact_Disc">Compact_Disc</a><br/>
			<a href="http://en.wikipedia.org/wiki/CD-ROM">CD-ROM</a><br/>
			<a href="http://en.wikipedia.org/wiki/DVD">DVD</a>
		</td>
	</tr>
	<tr>
		<td valign="top">See Also</td>
		<td>mini-cd<br/>
			business-card-cd</td>
	</tr>
</table>
<h2>Images</h2>
<%@ include file="../_all/image.inc" %>
<p><a href="internal.htm">More Resources</a></p>
<%info.fileformat.ad.AdFactory.getAdProvider(request).append(out, "media");%>
<%UI.getFooter(out, application, request);%>
</body>
</html>

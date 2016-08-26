$(document).ready(function(){
	
	/*$('body').wrapInner('<div id="archivesWrapMain" />');
	$('#archivesWrapMain').prepend('<div id="main_wrapper" />');*/
	$('#top_content').hide();
	$('#search').hide();
	$('#cdmFooterWrapper').hide();
	$('#content_footer').hide();
	$('body').prepend('<div id="main_wrapper" />');
	$('#main_wrapper').hide();
	$('#main_wrapper').prepend('<div id="header_wrapper" />');
	$('#header_wrapper').prepend('<div id="header_bar_wrapper" />');
	$('#header_bar_wrapper').prepend('<div id="header_bar" />');
	$('#header_bar').prepend('<div id="header_bar_inner" />');
	$('#breadcrumb_top_content').html('');	
	
	var navbar = '<div id="logo"><a href="http://seekingmichigan.org"><img src="http://cdm16317.contentdm.oclc.org/ui/custom/default/collection/default/resources/custompages/holderforcssimages/logo.png" alt="Seeking Michigan"></a></div><div id="navigation" class="rightside"><ul id="menu-main-navigation" class="sf-menu"><li id="menu-item-57712" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57712 sf-with-ul"><a href="http://seekingmichigan.org/about"><span class="menu-btn">Seek</span></a><ul class="sub-menu"><li id="menu-item-61147" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61147"><a href="http://seekingmichigan.org/about"><span class="menu-btn">About</span></a></li><li id="menu-item-58104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58104 sf-with-ul"><a href="http://seekingmichigan.org/about/guides"><span class="menu-btn">Guides</span></a><ul class="sub-menu"><li id="menu-item-61134" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61134"><a href="http://seekingmichigan.org/about/guides/getting-started-in-genealogy"><span class="menu-btn">Getting Started in Genealogy</span></a></li><li id="menu-item-61133" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61133"><a href="http://seekingmichigan.org/about/guides/vital-records"><span class="menu-btn">Vital Records</span></a></li><li id="menu-item-61132" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61132"><a href="http://seekingmichigan.org/about/guides/county-records"><span class="menu-btn">County Records</span></a></li><li id="menu-item-61131" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61131"><a href="http://seekingmichigan.org/about/guides/immigration-naturalization-records"><span class="menu-btn">Immigration &amp; Naturalization Records</span></a></li><li id="menu-item-61130" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61130"><a href="http://seekingmichigan.org/about/guides/military-records"><span class="menu-btn">Military Records</span></a></li></ul></li><li id="menu-item-58103" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58103"><a href="http://seekingmichigan.org/about/indexes"><span class="menu-btn">Indexes</span></a></li><li id="menu-item-61210" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61210"><a href="http://seekingmichigan.org/events"><span class="menu-btn">Events</span></a></li><li id="menu-item-61129" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61129"><a href="http://seekingmichigan.org/about/programs"><span class="menu-btn">Programs</span></a></li><li id="menu-item-57717" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57717 sf-with-ul"><a href="http://seekingmichigan.org/about/visit"><span class="menu-btn">Visit</span></a><ul class="sub-menu"><li id="menu-item-57718" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57718"><a href="http://seekingmichigan.org/about/visit/parking"><span class="menu-btn">Parking</span></a></li><li id="menu-item-57719" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57719"><a href="http://seekingmichigan.org/about/visit/museum"><span class="menu-btn">Museum</span></a></li></ul></li><li id="menu-item-61209" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61209"><a href="http://seekingmichigan.org/about/research-services"><span class="menu-btn">Research Services</span></a></li><li id="menu-item-57713" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57713"><a href="http://seekingmichigan.org/about/contact-us"><span class="menu-btn">Contact Us</span></a></li><li id="menu-item-61797" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61797"><a title="Michigan County Clerks Directory" href="http://seekingmichigan.org/about/county-clerks"><span class="menu-btn">Contact County Clerks</span></a></li></ul></li><li id="menu-item-57724" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57724 sf-with-ul"><a href="http://seekingmichigan.org/discover"><span class="menu-btn">Discover</span></a><ul class="sub-menu"><li id="menu-item-59870" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-59870"><a href="http://seekingmichigan.org/discover"><span class="menu-btn">All Collections</span></a></li><li id="menu-item-59869" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-59869"><a href="http://seekingmichigan.contentdm.oclc.org/cdm/search/collection/p129401coll7"><span class="menu-btn">Death Records</span></a></li><li id="menu-item-61048" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-61048"><a href="http://seekingmichigan.contentdm.oclc.org/cdm/search/collection/p16317coll3"><span class="menu-btn">Michigan State Census</span></a></li><li id="menu-item-61049" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-61049"><a href="http://seekingmichigan.contentdm.oclc.org/cdm/search/collection/p15147coll10"><span class="menu-btn">Plat Maps</span></a></li><li id="menu-item-61050" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-61050"><a href="http://seekingmichigan.contentdm.oclc.org/cdm/search/collection/p4006coll8"><span class="menu-btn">Main Streets</span></a></li><li id="menu-item-57720" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57720 sf-with-ul"><a href="http://seekingmichigan.org/civil-war"><span class="menu-btn">Civil War</span></a><ul class="sub-menu"><li id="menu-item-57729" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-57729"><a href="http://seekingmichigan.org/civilwar/reveille"><span class="menu-btn">Reveille Blog</span></a></li><li id="menu-item-57723" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57723"><a href="http://seekingmichigan.org/civil-war/primary-resources"><span class="menu-btn">Archival Records</span></a></li><li id="menu-item-60216" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60216"><a href="http://seekingmichigan.org/civil-war/research-resources"><span class="menu-btn">Resources</span></a></li></ul></li></ul></li><li id="menu-item-57731" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-57731"><a href="http://seekingmichigan.org/look"><span class="menu-btn">Look</span></a></li><li id="menu-item-57725" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-57725 sf-with-ul"><a href="http://seekingmichigan.org/learn"><span class="menu-btn">Learn</span></a><ul class="sub-menu"><li id="menu-item-58341" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-58341"><a href="http://seekingmichigan.org/learn/symbols"><span class="menu-btn">State Symbols</span></a></li></ul></li><li id="menu-item-57730" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-57730"><a href="http://seekingmichigan.org/store"><span class="menu-btn">Services</span></a><ul class="sub-menu"><li id="menu-item-59870" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-59870"><a href="http://seekingmichigan.org/store/research-requests"><span class="menu-btn">Research</span></a></li><li id="menu-item-59870" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-59870"><a href="http://seekingmichigan.org/store/reproductions"><span class="menu-btn">Reproductions</span></a></li><li id="menu-item-59870" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-59870"><a href="http://seekingmichigan.org/store/permissions"><span class="menu-btn">Permissions</span></a></li></ul></li><li id="menu-item-57730" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-57730"><a href="http://seekingmichigan.org/store/donations"><span class="menu-btn">Donate</span></a></li></ul><br class="clear"></div><br class="clear">';

	$('#main_wrapper').append('<div id="header_header_wrapper" />');
	$('#header_header_wrapper').append('<div id="header" />');
	$('#header').html(navbar);
	
	var social = '<div id="social_icons" class="leftside"><a class="tiptip" target="_blank" href="http://twitter.com/seekingmichigan" original-title="Twitter"><img alt="Twitter" src="http://cdm16317.contentdm.oclc.org/ui/custom/default/collection/default/resources/custompages/holderforcssimages/twitter.png"></a><a class="tiptip" target="_blank" href="http://www.facebook.com/pages/Seeking-Michigan-Fan-Page/106503742710958" original-title="Facebook"><img alt="Facebook" src="http://cdm16317.contentdm.oclc.org/ui/custom/default/collection/default/resources/custompages/holderforcssimages/facebook.png"></a><a class="tiptip" target="_blank" href="http://www.flickr.com/photos/archivesofmichigan/" original-title="Flickr"><img alt="Flickr" src="http://cdm16317.contentdm.oclc.org/ui/custom/default/collection/default/resources/custompages/holderforcssimages/flickr.png"></a><a class="tiptip" target="_blank" href="http://vimeo.com/seekingmichigan" original-title="Vimeo"><img alt="Vimeo" src="http://cdm16317.contentdm.oclc.org/ui/custom/default/collection/default/resources/custompages/holderforcssimages/vimeo.png"></a></div>'
	$('#header_bar_inner').html(social);
	
	//move the search box & style
	$("#search").appendTo("#header_bar_inner");
	$("#adv_search").appendTo("#header_bar_wrapper");
	$('#search').wrap('<div class="rightside" id="searchyContainer" />');
	$('#simple_search_button').attr('value','go');
	$('.search_content_container').css('margin-top','0');	
	$('.search_content_container_advanced').prepend('<div id="searchyContainer" />');
	$('#search_content_text').parent().css('margin-top', '5px');
	$('.search_content_container_advanced').removeClass('float_left');
	$('#search_content_text').html('Search Digital Archive:');
	$('#search_content_close_icon').remove();
	//$('#adv_search').prepend('<span class="clear"></span>');
	
	//on item page
	//$('#results_box').appendTo('#image_title');
	$('#results_box').appendTo('#breadcrumb_top');
	
	// OCLC is using <a> when it's not really a link--the onClick is causing open/close.  replace <a> with <div>.
	$('#search_content_adv_link').replaceWith('<div id="search_content_adv_link" tabindex="6">Advanced Search</div>');
	$('#search_results_dd_link').replaceWith('<div id="search_results_dd_link" class="search_content_button_link" tabindex="2">within results<span id="search_results_button_arrow" class="icon_10 icon_nav_top_left ui-icon-triangle-1-s"></span></div>');
	$('#adv_search_by_date_link').replaceWith('<div id="adv_search_by_date_link" class="action_link_10">Search by date</div>');
	
	//we've done our adjustments, now show the page content
	//$('#archivesWrapMain').css("display","block");
	//$('#archivesWrapMain').show();
	$('#main_wrapper').show();
	$('#search').show();
	$('#top_content').show();
	$('#cdmFooterWrapper').show();
	$('#content_footer').show();
	
 });






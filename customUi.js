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
	
	var navbar = '<div id="logo"><a href="http://seekingmichigan.org"><img alt="Seeking Michigan" src="http://cdm16317.contentdm.oclc.org/ui/custom/default/collection/default/resources/custompages/holderforcssimages/logo.png"></a></div><div id="navigation" class="rightside"><ul id="menu-main-navigation" class="sf-menu"><li id="menu-item-13172" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13172"><a href="http://seekingmichigan.org"><span class="menu-btn">Home</span></a></li><li id="menu-item-13220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13220"><a href="http://seekingmichigan.org/about/" title="Seek"><span class="menu-btn">Seek</span></a></li><li id="menu-item-13175" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-13175"><a href="http://seekingmichigan.org/discover/"><span class="menu-btn">Discover</span></a></li><li id="menu-item-13194" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-13194"><a href="http://seekingmichigan.org/category/look/"><span class="menu-btn">Look</span></a></li><li id="menu-item-13405" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13405"><a href="http://seekingmichigan.org/teach/"><span class="menu-btn">Teach</span></a></li><li id="menu-item-13319" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13319"><a href="http://seekingmichigan.myshopify.com/"><span class="menu-btn">Buy</span></a></li></ul><br class="clear"></div><br class="clear">';
	//$('#header_wrapper').append('<div id="header" />');
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
	$('.search_content_container_advanced').appendTo('#searchyContainer');
	$('#search_content_text').parent().css('margin-top', '5px');
	$('.search_content_container_advanced').removeClass('float_left');
	$('#search_content_text').html('Search Digital Archive:');
	//$('#adv_search').prepend('<span class="clear"></span>');
	
	//on item page
	//$('#results_box').appendTo('#image_title');
	$('#results_box').appendTo('#breadcrumb_top');
	
	// OCLC is using <a> when it's not really a link--the onClick is causing open/close.  replace <a> with <div>.
	$('#search_content_adv_link').replaceWith('<div id="search_content_adv_link" class="action_link_10" tabindex="6">Advanced Search</div>');
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






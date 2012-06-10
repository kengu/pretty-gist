/*
 * pretty-gist
 * http://www.joepettersson.com/pretty-gist/
 *
 * Copyright (c) 2012 Joe Pettersson
 * Licensed under the MIT, GPL licenses.
 */
;(function ($, window, document, undefined) {
	"use strict";
	var pluginName = 'prettyGist',
		defaults = {
			extendedHeader: true,
			showFooter: true
		};

	function prettyGist (element, options) {
		this.element = element;
		this.options = $.extend( {}, defaults, options);

		this.init();
	}

	prettyGist.prototype = {
		
		init: function() {
			var gist = $(this.element).attr("id").substring(5), options = this.options, el = this.element,
				placeholder = this.placeholder(el),
				go = this.model(gist, function(data){
					$(".pretty-gist-placeholder").replaceWith(prettyGist.prototype.layout(data, el, options));
					if (options.showFooter === true) {
						prettyGist.prototype.bind(data.data.id);
					}
					if (typeof hljs !== "undefined"){
						hljs.initHighlightingOnLoad();
						$(".pretty-gist").addClass("hljs");
					}
				});
		}, 

		placeholder: function (el) {
			var markup = '<div class="pretty-gist-placeholder"></div>';
			$(markup).insertAfter(el);
		},
		
		model: function (gist, callback) {
			$.getJSON('https://api.github.com/gists/' + gist + '?callback=?', function(data){
				callback(data);
			});
		},

		layout: function (data, el, options) {
			var markup = '';
				markup += '<div class="pretty-gist" id="pretty-gist-' + data.data.id + '">';
				// Build our header
				markup += '<div class="header clear">';
				if (options.extendedHeader === true) {
					markup += '<div class="logo"><a href="https://github.com/">Github</a></div>';
					markup += '<div class="user"><a href="https://github.com/' + data.data.user.login + '" class="github-user">';
					if (typeof data.data.user.avatar_url !== "undefined" && data.data.user.avatar_url.length > 0){
						markup += '<img src="' + data.data.user.avatar_url + '" alt="Avatar" width="34px" height="34px" />';
					} else {
						markup += '<img src="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png" alt="Avatar" width="34px" height="34px" />';
					}
					markup += '</div>';
					markup += '<div class="github-user-data">';
					markup += '<h2><a href="https://gist.github.com/gists/' + data.data.id + '">' + data.data.description + '</a></h2>';
					markup += '<h3><a href="https://github.com/' + data.data.user.login + '">' + data.data.user.login + '</a></h3>';
					markup += '</div>';
				} else {
					markup += '<h2 class="single"><a href="https://gist.github.com/gists/' + data.data.id + '">' + data.data.description + '</a></h2>';
				}
				markup += '</div>';
				// Build code pane
				markup += '<div class="code-container"><ol>';
				$.each($(el).find(".line"), function(i){
					markup += '<li class="pretty-line" id="pretty-line-' + i + '"><pre><code>' + $(this).html() + '</pre></code></li>';
				});
				markup += '</ol></div>';
				if (options.showFooter === true) {
					markup += '<div class="footer clear">';
					markup += '<a href="https://gist.github.com/gists/' + data.data.id + '/download" class="button left">Download Gist</a>';
					markup += '<a href="#" class="button middle show-embed" data-embed="https://gist.github.com/' + data.data.id + '.js">Embed Gist</a>';
					markup += '<a href="#" class="button right show-clone-url" data-clone-url="git://gist.github.com/' + data.data.id + '.git">Clone Gist</a>';
					markup += '<a href="#" class="button single show-plugin-info">Info</a>';
					markup += '</div>';
				}
				markup += '</div>';
			return markup;
		},

		bind: function (gist_id) {
			$(".show-embed").click(function(event){
				event.preventDefault();
				var data = '&lt;script src=&quot;' + $(this).attr("data-embed") + '&quot;>&lt;/script>',
					title = 'Embed code:';
				prettyGist.prototype.modal(gist_id, title, data);
			});
			$(".show-clone-url").click(function(event){
				event.preventDefault();
				var data = $(this).attr("data-clone-url"),
					title = 'Clone url:';
				prettyGist.prototype.modal(gist_id, title, data);
			});
			$(".show-plugin-info").click(function(event){
				event.preventDefault();
				var title = 'Pretty Gist by <a href="http://www.joepettersson.com/pretty-gist/">Joe Pettersson</a><br />A plugin to make prettier and more functional embedded Github Gists';
				prettyGist.prototype.modal(gist_id, title);
			});
		},

		modal: function (gist_id, title, data) {
			$("#pretty-gist-" + gist_id).find(".gist-modal").remove();
			var markup = '',
				width = $("#pretty-gist-" + gist_id).outerWidth() - 2;
				padding = ($("#pretty-gist-" + gist_id + " .code-container").outerHeight() / 2) - 23;

				markup += '<div class="gist-modal" style="width: ' + width + 'px; padding: ' + padding + 'px 0px;">';
				markup += '<p>' + title + '</p>';
				if (typeof data !== "undefined") {
					markup += '<input type="text" value="' + data + '" class="gist-input" name="embed-url" />';
				}
				markup += '</div>';
			$(markup).insertBefore(".pretty-gist .code-container");
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName,
				new prettyGist( this, options ));
			}
		});
	}

})( jQuery, window, document );
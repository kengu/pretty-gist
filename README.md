#Pretty Gist

A jQuery plugin to make prettier and more functional embedded Github Gists.

![image](http://i.imgur.com/lz8c8.jpg)

[Plugin website](http://www.joepettersson.com/pretty-gist/) | [Demos](http://www.joepettersson.com/demo/pretty-gist/) | [@Joe8Bit](http://twitter.com/Joe8Bit) 

Pretty Gist is a simple jQuery plugin to make the rather drab default Github embedded Gists look a little better. It also includes syntax highlighting, via the excellent bundled [Highlight.js](http://softwaremaniacs.org/soft/highlight/en/), which includes many cool themes for you to choose from.

###Simple usage

The plugin has a default skin, which doesn't include syntax highlighting, which means you need to include the bundled `prettygist.min.css` stylesheet within the `<head>` of your page (or include the styles in your own style sheet), there is also a single sprite image that is referenced in the stylesheet (the Github logo and icon or two).

In it's simplest form, the plugin can be used by inserting the following into the `<head>`:

    <link rel="stylesheet" href="prettygist.min.css">
    <script src="jquery.min.js"></script>
    <script src="jquery.prettygist.min.js"></script>
    <script type="text/javascript">
		$(document).ready(function(){
			$(".gist").prettyGist();
		});
	</script>
	
And then embedding a Gist into your page as you normally would, like so:

    <script src="https://gist.github.com/2902410.js"></script>
	
**Note:** in the above example all of the gists on the page will be replaced by pretty gists. You can, however, replace only one Gist at a time by referencing a Gists ID.

###Usage with Syntax highlighting

One of the advantages that pretty Gist has over your standard embedded gist is easy syntax highlighting (provided by the bundled and integrated [Highlight.js](http://softwaremaniacs.org/soft/highlight/en/)). It's usage isn't much different that the simple example above:

    <link rel="stylesheet" href="prettygist.min.css">
    
    <!-- Below is our theme (many more are included in the repo) -->
    <link rel="stylesheet" href="css/syntax-styles/solarized_dark.css">
    
    <script src="jquery.min.js"></script>
    <script src="jquery.prettygist.min.js"></script>
    
    <!-- Below is the main highlight.js include -->
    <script src="js/highlight.pack.js"></script>
    
    <script type="text/javascript">
		$(document).ready(function(){
			$(".gist").prettyGist();
		});
	</script>

When those two extra files are added included, everything else is taken care of automatically and viola! Your Gist is not syntax highlighted.

Supported languages are as follows:

* Bash
* C#
* C++
* CSS
* Diff
* HTML, XML
* HTTP
* Ini
* JSON
* Java
* JavaScript
* PHP
* Perl
* Python
* Ruby
* SQL 
* CoffeeScript
* Erlang
* Haskell 

The included themes are also included in the repo:

* Default
* Dark
* FAR
* IDEA
* Sunburst
* Zenburn
* Visual Studio
* Ascetic
* Magula
* GitHub
* Google Code
* Brown Paper
* School Book
* IR Black
* Solarized - Dark
* Solarized - Light
* Arta
* Monokai
* XCode
* Pojoaque

###Custom options
There are currently two custom options that are supported, as lid out below:

    $(".gist").prettyGist({
		extendedHeader: true,
		showFooter: true
	});

![image](http://i.imgur.com/yt2m2.jpg)
	
Setting `extendedHeader` to `false` will mean that no user information is displayed in the header of the pretty gist, by default it is set to true.

![image](http://i.imgur.com/1zmKZ.jpg)

Setting `showFooter` to `false` will, self-evidently mean that the footer is not shown.

Both of these config options can be seen at the [demo url](http://www.joepettersson.com/demo/pretty-gist/).

###License

Pretty code itself is licensed under the MIT license, however, the license for Highlight.js is as follows:

    Copyright (c) 2006, Ivan Sagalaev
    All rights reserved.
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of highlight.js nor the names of its contributors 
      may be used to endorse or promote products derived from this software 
      without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
###Errata
If you have any questions, comments or problems: get in touch on [Twitter](http://twitter.com/Joe8Bit) and I'll be happy to help.
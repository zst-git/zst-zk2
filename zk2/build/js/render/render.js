define(["jquery","handlebars"],function(a,c){return function(n,e,o){console.log(o);var l=a(n).html(),r=c.compile(l)(o);a(e).append(r)}});
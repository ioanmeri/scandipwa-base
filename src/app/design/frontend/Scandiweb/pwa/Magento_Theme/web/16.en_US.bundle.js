(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{413:function(e,t,a){"use strict";a.r(t);var i=a(429);a.d(t,"default",(function(){return i.a}))},429:function(e,t,a){"use strict";(function(e){var i=a(12),n=a.n(i),r=a(4),o=a.n(r),s=a(5),d=a.n(s),c=a(7),u=a.n(c),l=a(6),p=a.n(l),g=a(2),m=a.n(g),h=a(8),f=a.n(h),b=a(1),P=a.n(b),v=a(14),k=a(0),C=a.n(k),B=a(54),y=a(31),O=a(35),w=a(79),x=a(17),S=a(84),q=a(16),R=a(40),_=a(18),H=a(72),I=a(49),L=a(30),j=a(433),z=a(11).checkBEMProps,A=function(t){function a(e){var t;return o()(this,a),t=u()(this,p()(a).call(this,e)),P()(m()(t),"state",{page:{},isLoading:!0}),P()(m()(t),"setOfflineNoticeSize",(function(){var e=t.props.setBigOfflineNotice;e(!!t.state.isLoading)})),P()(m()(t),"onPageLoad",(function(e){var a=e.cmsPage,i=t.props,n=i.location.pathname,r=i.updateMeta,o=i.setHeaderState,s=i.updateBreadcrumbs,d=a.content_heading,c=a.meta_title,u=a.title;Object(_.b)(t.setOfflineNoticeSize,300)(),s(a),r({title:c||u}),"/"!==n&&o({name:R.e,title:d,onBackClick:function(){return L.b.goBack()}}),t.setState({page:a,isLoading:!1})})),t.updateBreadcrumbs(),t}return f()(a,t),d()(a,[{key:"updateBreadcrumbs",value:function(){var e=this.props;(0,e.toggleBreadcrumbs)(e.isBreadcrumbsActive)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.isOffline,a=e.isOnlyPlaceholder,i=this.state.isLoading;t&&i&&Object(_.b)(this.setOfflineNoticeSize,300)(),a||this.requestPage()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.location.pathname,i=t.pageIdentifiers,n=t.pageIds,r=e.location.pathname,o=e.pageIdentifiers,s=e.pageIds;(a!==r||n!==s||i!==o)&&this.requestPage()}},{key:"getRequestQueryParams",value:function(){var e=this.props,t=e.location,a=e.match,i=e.pageIdentifiers,n=e.pageIds;return i?{identifier:i}:-1!==n?{id:n}:{identifier:Object(I.e)(a,t)}}},{key:"requestPage",value:function(){var e=this.getRequestQueryParams(),t=e.id,a=e.identifier;(t||a)&&(this.setState({isLoading:!0}),this.fetchData([q.e.getQuery(e)],this.onPageLoad))}},{key:"render",value:function(){return z(e,j.a,n()({},this.props,this.state))}}]),a}(w.a);P()(A,"propTypes",{match:x.d.isRequired,setHeaderState:C.a.func.isRequired,updateBreadcrumbs:C.a.func.isRequired,setBigOfflineNotice:C.a.func.isRequired,location:x.c.isRequired,toggleBreadcrumbs:C.a.func.isRequired,pageIds:C.a.number,pageIdentifiers:C.a.string,isOnlyPlaceholder:C.a.bool,isBreadcrumbsActive:C.a.bool}),P()(A,"defaultProps",{pageIds:-1,pageIdentifiers:"",isOnlyPlaceholder:!1,isBreadcrumbsActive:!0}),t.a=Object(v.b)((function(e){return{isOffline:e.OfflineReducer.isOffline}}),(function(e){return{updateBreadcrumbs:function(t){return B.a.updateWithCmsPage(t,e)},setHeaderState:function(t){return e(Object(O.b)(y.b,t))},setBigOfflineNotice:function(t){return e(Object(S.b)(t))},updateMeta:function(t){return e(Object(H.c)(t))},toggleBreadcrumbs:function(t){B.a.update([],e),e(Object(B.c)(t))}}}))(A)}).call(this,a(3))},433:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return y}));var i=a(4),n=a.n(i),r=a(5),o=a.n(r),s=a(7),d=a.n(s),c=a(6),u=a.n(c),l=a(8),p=a.n(l),g=a(1),m=a.n(g),h=a(3),f=(a.n(h),a(0)),b=a.n(f),P=a(37),v=a(129),k=a(74),C=a(434),B=(a.n(C),a(11).checkBEMProps),y=function(t){function a(){return n()(this,a),d()(this,u()(a).apply(this,arguments))}return p()(a,t),o()(a,[{key:"renderHeading",value:function(){var t=this.props.page.content_heading;return t?B(e,"h1",{block:"CmsPage",elem:"Heading"},B(e,P.a,{content:t})):null}},{key:"renderContent",value:function(){var t=this.props,a=t.isLoading,i=t.page.content;return a||i?i?B(e,k.a,{content:i}):B(e,e.Fragment,null,B(e,"div",{block:"CmsPage",elem:"SectionPlaceholder"}),B(e,"div",{block:"CmsPage",elem:"SectionPlaceholder"}),B(e,"div",{block:"CmsPage",elem:"SectionPlaceholder"})):null}},{key:"render",value:function(){var t=this.props,a=t.page,i=t.isBreadcrumbsActive,n=a.page_width;return B(e,"main",{block:"CmsPage",mods:{isBreadcrumbsHidden:!i}},B(e,"div",{block:"CmsPage",elem:"Wrapper",mods:{page_width:n}},this.renderHeading(),B(e,"div",{block:"CmsPage",elem:"Content"},this.renderContent())))}}]),a}(h.PureComponent);m()(y,"propTypes",{isLoading:b.a.bool.isRequired,isBreadcrumbsActive:b.a.bool,page:v.a.isRequired}),m()(y,"defaultProps",{isBreadcrumbsActive:!0})}).call(this,a(3))},434:function(e,t,a){var i=a(20),n=a(435);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);i(n,{insert:"head",singleton:!1});var r=n.locals?n.locals:{};e.exports=r},435:function(e,t,a){(e.exports=a(21)(!1)).push([e.i,".CmsPage-Wrapper,.CmsPage_isBreadcrumbsHidden{margin-top:calc(var(--header-total-height) + 1rem)}.CmsPage-Wrapper{grid-template-columns:auto;max-width:var(--content-wrapper-width);padding-left:1rem;padding-right:1rem;margin-bottom:var(--header-nav-height);margin-left:auto;margin-right:auto}@media (min-width:768px){.CmsPage-Wrapper{margin-top:2rem}}.CmsPage-Wrapper_page_width_full{max-width:100%;padding-left:0;padding-right:0}.CmsPage-Heading{margin-bottom:1.5rem}@media (max-width:767px){.CmsPage-Heading{display:none}}.CmsPage-SectionPlaceholder{background-image:var(--placeholder-image);background-size:var(--placeholder-size);-webkit-animation:var(--placeholder-animation);animation:var(--placeholder-animation);margin:0 0 10px;padding-bottom:30%}@media (max-width:767px){.CmsPage-SectionPlaceholder{padding-bottom:60%}}.CmsPage-SectionPlaceholder:first-child{padding-bottom:40%}@media (max-width:767px){.CmsPage-SectionPlaceholder:first-child{padding-bottom:100%}}.CmsPage .TextPlaceholder{margin-bottom:1.8rem;display:block}@media (max-width:767px){.CmsPage h2,.CmsPage h3{font-size:1rem}}",""])}}]);
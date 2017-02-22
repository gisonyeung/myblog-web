const HOST = 'http://localhost:8000'

const Api = {
	blogCount: '/blogCount',
	getBlogsByPage: HOST + '/homeBlog',
	getBlogTotalPage: HOST + '/homePage',
	getBlogDetail: HOST + '/blogDetail',
	getNearBlog: HOST + '/nearBlog',
	getBlogComment: HOST + '/blogComment',
	addBlogComment: HOST + '/addBlogComment',
	addBlogLike: HOST + '/addBlogLike',
	walkingBlog: '/walkingBlog',
	walkingBlogMore: '/walkingBlogMore',
	walkingBlogDetail: '/walkingBlogDetail',
	walkingBlogComment: '/walkingBlogComment',
	addWalkingBlogComment: '/addWalkingBlogComment',
	nearWalkingBlog: '/nearWalkingBlog',
	bookList: '/bookList',
	bookLike: '/bookLike',
	archiveCondition: '/archiveCondition',
	archiveAll: '/archiveAll',
	categories: '/categories',
	tags: '/tags',
	blogCountForYear: '/blogCountForYear',
	siteYear: '/siteYear',
	getBoardCommentInit: HOST + '/boardComment',
	getBoardCommentMore: HOST + '/boardCommentMore',
	addBoardComment: HOST + '/addBoardComment',
	addSubscribe: HOST + '/subscribe',
	getSiteNum: HOST + '/siteNum',
	unsubconfirm: HOST + '/unsubconfirm',
	cancelSub: '/cancelSub',
	addSiteView: '/addSiteView',

};

export default Api;
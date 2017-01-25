const HOST = 'http://localhost:8000'

const Api = {
	blogCount: '/blogCount',
	fetchBlogByPage: HOST + '/homeBlog',
	getBlogTotalPage: HOST + '/homePage',
	blogDetail: '/blogDetail',
	nearBlog: '/nearBlog',
	blogComment: '/blogComment',
	addBlogComment: '/addBlogComment',
	addBlogLike: '/addBlogLike',
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
	boardComment: '/boardComment',
	boardCommentMore: '/boardCommentMore',
	addBoardComment: '/addBoardComment',
	addSubscribe: HOST + '/subscribe',
	getSiteNum: HOST + '/siteNum',
	unsubconfirm: HOST + '/unsubconfirm',
	cancelSub: '/cancelSub',
	addSiteView: '/addSiteView',

};

export default Api;
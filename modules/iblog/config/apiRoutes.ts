/**
 *  APi post: /api/iblog/v1/posts/id
 *  Api categories: /api/iblog/v1/categories
 *
 *   Filters to post And categories
 *
 *   /api/iblog/v1/posts?page=1&take=2
 /api/iblog/v1/categories?page=1&take=2
 * */

const ModuleName = 'iblog';
const ModuleVersion = 'v1';
const BaseUrl = `/api/${ModuleName}/${ModuleVersion}`;

const apiRoutes = {
    categories: `${BaseUrl}/categories`,
    posts: `${BaseUrl}/posts`
}

export default apiRoutes
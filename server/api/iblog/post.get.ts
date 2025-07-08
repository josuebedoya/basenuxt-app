import apiRoutes from "~/modules/iblog/config/apiRoutes";

export default defineCachedEventHandler(async (event) => {
    const queries = getQuery(event);
    console.log('queries', queries);

})
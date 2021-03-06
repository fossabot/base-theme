import { RequestDispatcher } from 'Util/Request';
import { showNotification } from 'Store/Notification';
import { updateRelatedProducts } from 'Store/RelatedProducts';
import { ProductListQuery } from 'Query';

/**
 * Related Prodcts List Dispatcher
 * @class RelatedProductsDispatcher
 * @extends RequestDispatcher
 */
class RelatedProductsDispatcher extends RequestDispatcher {
    constructor() {
        super('RelatedProducts', 86400);
    }

    onSuccess(data, dispatch) {
        dispatch(updateRelatedProducts(data));
    }

    onError(error, dispatch) {
        dispatch(showNotification('error', 'Error fetching RelatedProducts!', error));
    }

    /**
     * Prepare RelatedProducts query
     * @param {{productsSkuArray: Array<String|Number>}} options A object containing different aspects of query, each item can be omitted
     * @return {Query} ProductList query
     * @memberof RelatedProductsDispatcher
     */
    prepareRequest(options) {
        return ProductListQuery.getQuery(options);
    }

    /**
     * Clear realated products list
     * @param {{productsSkuArray: Array<String>}} options A object containing different aspects of query, each item can be omitted
     * @return {Query} ProductList query
     * @memberof RelatedProductsDispatcher
     */
    clearRelatedProducts(dispatch) {
        dispatch(updateRelatedProducts({ products: {} }));
    }
}

export default new RelatedProductsDispatcher();

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'Component/ContentWrapper';
import CartItem from 'Component/CartItem';
import DiscountCoupons from 'Component/DiscountCoupons';
import CartSummary from 'Component/CartSummary';
import { ProductType } from 'Type/ProductList';
import { TotalsType } from 'Type/MiniCart';
import './CartPage.style';

class CartPage extends Component {
    componentDidMount() {
        this.updateBreadcrumbs();
    }

    updateBreadcrumbs() {
        const { updateBreadcrumbs } = this.props;
        const breadcrumbs = [
            {
                url: '/cart',
                name: 'Shopping cart'
            },
            {
                url: '/',
                name: 'Home'
            }
        ];

        updateBreadcrumbs(breadcrumbs);
    }

    /**
     * Render Cart Item
     * @return {JSX}
     */
    renderItemsList(items) {
        return Object.keys(items)
            .map(key => <CartItem key={ key } product={ items[key] } />);
    }

    /**
     * Render Empty message if there is no products in cart
     * @param {Number} i List key
     * @return {JSX}
     */
    renderEmptyMessage(i) {
        return (
            <li block="MiniCart" elem="Empty" key={ i }>
                You have no items in your shopping cart.
            </li>
        );
    }

    render() {
        const { products, totals } = this.props;

        return (
            <>
                <main block="CartPage" aria-label="Cart Page">
                    <ContentWrapper
                      mix={ { block: 'CartPage' } }
                      wrapperMix={ { block: 'CartPage', elem: 'Wrapper' } }
                      label="Cart page details"
                    >
                        <h1>Shopping cart</h1>
                        <div block="CartPage" elem="ItemsList" aria-label="Cart Items List">
                            <div block="CartPage" elem="TableTitles">
                                <span>Item</span>
                                <span>Qty</span>
                                <span>Subtotal</span>
                            </div>
                            <ul>
                                { Object.entries(products).length
                                    ? (
                                        <>
                                            { this.renderItemsList(products) }
                                            <DiscountCoupons />
                                        </>
                                    )
                                    : this.renderEmptyMessage(1)
                                }
                            </ul>
                        </div>
                        <CartSummary totals={ totals } />
                    </ContentWrapper>
                </main>
            </>
        );
    }
}

CartPage.propTypes = {
    products: PropTypes.objectOf(ProductType),
    totals: TotalsType,
    updateBreadcrumbs: PropTypes.func.isRequired
};

CartPage.defaultProps = {
    products: {},
    totals: {}
};

export default CartPage;

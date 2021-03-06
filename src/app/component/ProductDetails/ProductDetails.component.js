import React, { Component } from 'react';
import Html from 'Component/Html';
import TextPlaceholder from 'Component/TextPlaceholder';
import { ProductType } from 'Type/ProductList';
import PropTypes from 'prop-types';
import './ProductDetails.style';

/**
 * Product details
 * @class ProductDetails
 */
class ProductDetails extends Component {
    renderSku() {
        const { configurableVariantIndex, product: { variants } } = this.props;

        if (variants) {
            const { product } = variants[configurableVariantIndex];

            return (
                <>
                    <span>SKU: </span>
                    <Html content={ product.sku } />
                    <span block="ProductDetails" elem="StockAvailable">In stock</span>
                </>
            );
        }

        return <TextPlaceholder length="medium" />;
    }

    renderShortDescription() {
        const { product } = this.props;

        if (product) {
            if (product.short_description) {
                return (
                    <Html content={ product.short_description } />
                );
            }

            return null;
        }

        return (
            <p block="ProductDetails" elem="PlaceholderBlock">
                <TextPlaceholder length="long" />
                <TextPlaceholder length="medium" />
            </p>
        );
    }

    render() {
        const { product: { name, brand } } = this.props;

        return (
            <article block="ProductDetails">
                <p block="ProductDetails" elem="Brand">
                    <TextPlaceholder content={ brand } length="short" />
                </p>
                <h1 block="ProductDetails" elem="Title">
                    <TextPlaceholder content={ name } length="medium" />
                </h1>
                <p block="ProductDetails" elem="Sku">
                    { this.renderSku() }
                </p>
                <div block="ProductDetails" elem="ShortDescription">
                    { this.renderShortDescription() }
                </div>
            </article>
        );
    }
}

ProductDetails.propTypes = {
    product: ProductType.isRequired,
    configurableVariantIndex: PropTypes.number.isRequired
};

export default ProductDetails;
